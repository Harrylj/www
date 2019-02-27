$(function(){
	var rowspan='';
	var tableHtml='<table>';
	for(var i=0;true;i++){
		if(!codejson[i]) break;
		if(codejson[i].childChannels){
			for(var j=0;true;j++){
				if(!codejson[i].childChannels[j]){
					rowspan=j;
					break;
				}
			}
			tableHtml+='<tr><td class="one" rowspan="'+rowspan+'">'+//一级栏目
			'<a target="_blank" href="'+codejson[i].href+'">'+
			codejson[i].channelName+'</a></td>';
			for(var j=0;true;j++){
				if(!codejson[i].childChannels[j]) break;
				var ynjj='';
				if(j==0){
					ynjj='<td class="two">';//二级栏目
				}else{
					ynjj='<tr><td class="two">';//二级栏目
				}
				tableHtml+=ynjj+
				'<a target="_blank" href="'+codejson[i].childChannels[j].href+'">'+
				codejson[i].childChannels[j].channelName+'</a></td>';
				if(codejson[i].childChannels[j].childChannels){
					tableHtml+='<td class="three">';//三级栏目
					for(var k=0;true;k++){
						if(!codejson[i].childChannels[j].childChannels[k]) break;
						tableHtml+=
						'<a target="_blank" href="'+codejson[i].childChannels[j].childChannels[k].href+'">'+
						codejson[i].childChannels[j].childChannels[k].channelName+'</a>'+' | ';
					}
					tableHtml+='</td></tr>';
				}else{
					tableHtml+='<td class="three"></td></tr>';
				}
			}
		}else{
			tableHtml+='<tr><td class="one">'+//一级栏目
			'<a target="_blank" href="'+codejson[i].href+'">'+
			codejson[i].channelName+'</a></td><td class="two"></td><td class="three"></td></tr>';
		}
	}
	tableHtml+='</table>';
	$('body').html(tableHtml);
	
	$(function(){
		$('tr:odd .three,tr:odd .two').css('background','#F7FDFD');
	})
})
