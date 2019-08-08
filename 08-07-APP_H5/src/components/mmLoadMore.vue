<template>
    <div 
    ref="loadmore"
    :class="'mmloadmore '+changeStyle"
    :style="changeTranslate()"
    @touchstart="viewTouchStart" 
    @touchmove="viewTouchMove" 
    @touchend="viewTouchEnd">
    
        <div class="loadmor-title">
            <!-- 顶部自定义拉下状态区域插槽区域 -->
            <slot name="top">
                <div class="topDef" v-if="topStatus == 'pull'">继续下拉刷新</div>
                <div class="topDef" v-if="topStatus == 'drop'">释放更新</div>
                <div class="topDef" v-if="topStatus == 'loading'">加载中。。。</div>
            </slot>
            <!-- 顶部自定义拉下状态区域插槽区域 -->
        </div>


        <!-- 公共插槽区域 -->
        <slot></slot>
        <!-- 公共插槽区域 -->
    </div>
</template>
<script>
export default {
    props:['topValve'],
    data () {
        return {
            parentList:[],
            openTouch:true,
            startCoordinate:'',
            changeStyle:'',
            mmTranslateY:0,
            scrollDiv:document.body,
            topStatus:'pull',
            topDistance:80//开启加载阀值
        }
    },
    created(){
        if(this.topValve){
            this.topDistance = parseInt(this.topValve)
        }
    },
    mounted () {
        this.templateStart()
    },
    methods:{
        templateStart:function(){
            let _this = this
            function getParentlist(tag){//获取所有父元素合集
                if ('HTML' !== tag.parentElement.nodeName) {
                    _this.parentList.push(tag.parentElement)
                    getParentlist(tag.parentElement)
                }
            }
            getParentlist(this.$refs.loadmore)
            let retFor = true
            this.parentList.forEach(element => {
                if(element.scrollHeight > (element.innerHeight || element.clientHeight) && retFor){//判断页面是在什么元素上滚动
                    retFor = false//这里只取最里层的滚动容器
                    this.scrollDiv = element
                    if(element.nodeName == 'BODY'){
                        document.addEventListener('scroll', this.scrollMonitor)
                    }else{
                        element.addEventListener('scroll', this.scrollMonitor)
                    }
                }
            })
        },

        scrollMonitor:function(event){
            if(event.target.nodeName == '#document'){
                if((document.body&&document.body.scrollTop&&document.body.scrollTop > 0) || 
                (document.documentElement&&document.documentElement.scrollTop&&document.documentElement.scrollTop > 0)){//当页面滚动后，页面不在顶部 不可触发下拉
                    this.openTouch = false
                }else{
                    this.openTouch = true
                }
            }else{
                if(this.scrollDiv.scrollTop > 0){
                    this.openTouch = false
                }else{
                    this.openTouch = true
                }
            }
        },
        viewTouchStart:function(event){//触屏事件
            this.templateStart()//每次触屏时检测当前是否有滚动条
            this.startCoordinate = event.touches[0].clientY//记录点击的位置
            this.changeStyle = ''
        },
        viewTouchMove:function(event){//滑动事件
            if(this.openTouch&&this.topStatus != 'loading'){//判断下拉是否开启
                if(event.touches[0].clientY > this.startCoordinate || this.mmTranslateY > 0){//判断用户是否在下拉
                    this.scrollDiv.style.overflowY = 'hidden'//下拉时关闭页面滚动
                    this.mmTranslateY = (event.touches[0].clientY-this.startCoordinate)//页面位置跟随下拉位置
                }else{
                    if(this.mmTranslateY <= 0){//用户滑动回顶部时，还原页面位置，开启滚动
                        this.mmTranslateY = 0
                        this.scrollDiv.style.overflowY = 'scroll'
                    }
                }
                if(this.mmTranslateY > this.topDistance){//改变顶部提示状态
                    this.topStatus = 'drop'
                }else{
                    this.topStatus = 'pull'
                }
                this.topStatusChange()
            }else{
                if(this.topStatus == 'loading'){//当在加载状态时 用户滑屏处理
                    if(event.touches[0].clientY < this.startCoordinate){
                        this.onTopLoaded()
                    }
                }
            }
        },
        viewTouchEnd:function(){//触屏结束事件
            if(this.mmTranslateY > 0){
                this.changeStyle = 'transitions'//动画效果
                if(this.topStatus == 'pull'){//当前未加载时状态
                    this.mmTranslateY = 0
                    let _this = this
                    setTimeout(function(){
                        _this.changeStyle = ''
                    },500)
                }else{//滑动超过开启加载阀值时处理
                    this.mmTranslateY = 90
                    this.topStatus = 'loading'
                    this.topStatusChange()
                    this.scrollDiv.style.overflowY = 'scroll'
                    this.$emit('loadTop')//加载时触发事件给父组件处理
                }
            }
        },
        topStatusChange:function(){//在topStatus改变时调用此方法，传递给父组件监听当前下拉状态
            this.$emit('topStatusChange',this.topStatus)
        },
        onTopLoaded:function(){//关闭加载状态
            this.changeStyle = 'transitions'
            this.mmTranslateY = 0
            this.topStatus = 'pull'
            let _this = this
            setTimeout(function(){
                _this.changeStyle = ''
            },500)
        },
        changeTranslate:function(){//把当前滑动距离赋值给页面
            return 'transform:translateY('+this.mmTranslateY+'px);-webkit-transform:translateY('+this.mmTranslateY+'px);-o-transform:translateY('+this.mmTranslateY+'px);-moz-transform:translateY('+this.mmTranslateY+'px);'
        }
    }
}
</script>
<style scoped>
    .loadmor-title{
        width: 100%;
        height: 2rem;
        margin-top: -2rem;
    }
    .transitions{
        transition: all .5s;
        -o-transition: all .5s;
        -moz-transition: all .5s;
        -webkit-transition: all .5s;
    }
    .topDef{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
