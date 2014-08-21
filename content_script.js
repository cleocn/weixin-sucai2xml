
$(".appmsg").each(function( ){ 
//最终生成格式
/*
<xml>
<ToUserName><![CDATA[toUser]]></ToUserName>
<FromUserName><![CDATA[fromUser]]></FromUserName>
<CreateTime>12345678</CreateTime>
<MsgType><![CDATA[news]]></MsgType>
<ArticleCount>2</ArticleCount>
<Articles>
<item>
<Title><![CDATA[title1]]></Title> 
<Description><![CDATA[description1]]></Description>
<PicUrl><![CDATA[picurl]]></PicUrl>
<Url><![CDATA[url]]></Url>
</item>
<item>
<Title><![CDATA[title]]></Title>
<Description><![CDATA[description]]></Description>
<PicUrl><![CDATA[picurl]]></PicUrl>
<Url><![CDATA[url]]></Url>
</item>
</Articles>
</xml> 
*/

var items = [];
var title,description,picurl,url;
title = $(".cover_appmsg_item A",this).html();
//log.write(title);
description = $(".cover_appmsg_item A" ,this).html();
picurl = $(".appmsg_thumb_wrp IMG",this).attr("src");
url = $(".cover_appmsg_item A" ,this).attr("href");

var item = ' \
	<item> \
	<Title><![CDATA['+title+']]></Title> \
	<Description><![CDATA['+description+']]></Description>\
	<PicUrl><![CDATA['+picurl+']]></PicUrl>\
	<Url><![CDATA['+url+']]></Url>\
	</item>\
	';
items.push(item); 

$(".appmsg_item",this).each(function( ){ 
	title = $("H4 A",this).html();
	//log.write(title);
	description = $("H4 A",this).html();
	picurl = $("IMG",this).attr("src");
	url = $("H4 A" ,this).attr("href");

	item = ' \
		<item> \
		<Title><![CDATA['+title+']]></Title> \
		<Description><![CDATA['+description+']]></Description>\
		<PicUrl><![CDATA['+picurl+']]></PicUrl>\
		<Url><![CDATA['+url+']]></Url>\
		</item>\
		';
	items.push(item); 
});
 
var msgText = '<xml> \
	<ToUserName><![CDATA[toUser]]></ToUserName>\
	<FromUserName><![CDATA[fromUser]]></FromUserName>\
	<CreateTime>12345678</CreateTime>\
	<MsgType><![CDATA[news]]></MsgType>\
	<ArticleCount>'+ items.length +'</ArticleCount>\
	<Articles>\
	'+ items.join('') +
	'</Articles>\
	</xml> ';
var id = $(this).parent().attr("id");
	$("<textarea cclass='appmsg_col' ccols='200' style='width:100%' rows=4>"+msgText+"</textarea> "+id+" :  <a target='_blank' href='data:text/plain,"+msgText+"'>XML另存为</a><br/><br/>").insertAfter($(this));
	 
});