import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',//严格模式，开发环境下不允许直接更改state中的状态值，发布环境关闭避免影响性能（开发环境直接更改状态值会报错）
    state: {//声明状态
      count: 0
    },
    mutations: {//同步操作，调用方法：store.commit('increment')
      increment (state) {
        state.count++
      }
    },
    actions:{//异步操作，调用方法：store.dispatch('changeIncrement')
        changeIncrement ({commit}) {
            return new Promise((resolve, reject) => {//使用Promise 在store.dispatch后可以使用.then执行异步结束后的操作
                setTimeout(() => {
                    commit('increment')
                  resolve()
                }, 1000)
            })
        }
    }
})
//异步操作，可以在异步操作结束后直接使用store.commit调用mutations的方法更改state中的状态，也可以通过使用store.dispatch调用在actions的方法中直接执行异步操作后再执行mutations中的方法