module.exports = [{
	name:"joinvc",
	type:"awaited",
	code:`
 $clearQueue
 $joinVC`
},{
	name:"resumeTrack",
	type:"awaited",
	code:`
 $resumeTrack`
},{
	name:"messagedelete",
	type:"awaited",
	code:`
 $deleteMessage[$getGuildVar[messageid];$getGuildVar[channelid]]`
},{
	name:"messageEdit_1",
	type:"awaited",
	code:`
 $editMessage[$getGuildVar[messageid];{newEmbed:
	{author:Şarkı oynatılıyor:https#COLON#//cdn.discordapp.com/emojis/1118197191312412832.gif?v=1&size=64&quality=lossless}
	{thumbnail:$if[$songInfo[artistAvatar]==;$songInfo[thumbnail];$songInfo[artistAvatar]]}
 {image:$if[$songInfo[thumbnail]!=;$songInfo[thumbnail];$if[$songInfo[artistAvatar]==;https://cdn.discordapp.com/attachments/1054455878734061668/1118941266491736095/1686846776196.png;$songInfo[artistAvatar]]]}
 {description:$get[bar]}
 {field:**Şarkı Adı**:**[$songInfo[title]](https://youtu.be/$songInfo[id])**}
 {field:**Artist**:**[$songInfo[artist]]($songInfo[artistURL])**}
 {field:**Şarkının Uzunluğu**:\`$replaceText[$replaceText[$replaceText[$replaceText[$humanizeMS[$songInfo[duration]];s; Saniye];m; Dakika];h; Saat];d; Gün]\`}
 {field:**Şarkının Beğenme Sayısı**:\`$if[$songInfo[likes]==;Bilinmiyor;$songInfo[likes]]\`}
 {field:**Şarkının İzlenme Sayısı**:\`$numberSeparator[$songInfo[views];,]\`}
 {field:**Platform**:\`$toLocaleUppercase[$songInfo[identifier]]\`}
 {field:**Talep Eden**:**[$username[$songInfo[requester.id]]](https://discord.com/users/$songInfo[requester.id])**}
 {color:$if[$songInfo[identifier]==youtube;FF0000;$if[$songInfo[identifier]==spotify;00A031;$if[$songInfo[identifier]==soundcloud;FF5900;]]]}
 }
  {actionRow:
	 {button::1:back10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=10000;false;true]:↩️}
   {button::1:previous_$songInfo[requester.id]:false:◀️}
   {button::1:pause_$songInfo[requester.id]:false:⏸️}
   {button::1:next_$songInfo[requester.id]:false:▶️}
	 {button::1:next10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=$math[$songInfo[duration]-10000];false;true]:↪️}
	};$getGuildVar[channelid]]
 
 $let[bar;$if[$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]==▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;🔘▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]]]`
},{
 name:"messageEdit_2",
	type:"awaited",
	code:`
 $editMessage[$getGuildVar[messageid];{newEmbed:
	{author:Şarkı durduruldu:https#COLON#//cdn.discordapp.com/emojis/1118197191312412832.gif?v=1&size=64&quality=lossless}
	{thumbnail:$if[$songInfo[artistAvatar]==;$songInfo[thumbnail];$songInfo[artistAvatar]]}
 {image:$if[$songInfo[thumbnail]!=;$songInfo[thumbnail];$if[$songInfo[artistAvatar]==;https://cdn.discordapp.com/attachments/1054455878734061668/1118941266491736095/1686846776196.png;$songInfo[artistAvatar]]]}
 {description:$get[bar]}
 {field:**Durdurulan Şarkı Adı**:**[$songInfo[title]](https://youtu.be/$songInfo[id])**}
 {field:**Artist**:**[$songInfo[artist]]($songInfo[artistURL])**}
 {field:**Platform**:\`$toLocaleUppercase[$songInfo[identifier]]\`}
 {field:**Şarkıyı Durduran**:**[$username[$songInfo[requester.id]]](https://discord.com/users/$songInfo[requester.id])**}
 {color:$if[$songInfo[identifier]==youtube;FF0000;$if[$songInfo[identifier]==spotify;00A031;$if[$songInfo[identifier]==soundcloud;FF5900;]]]}
 }
  {actionRow:
	 {button::1:back10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=10000;false;true]:↩️}
   {button::1:previous_$songInfo[requester.id]:false:◀️}
   {button::1:resume_$songInfo[requester.id]:false:⏸️}
   {button::1:next_$songInfo[requester.id]:false:▶️}
	 {button::1:next10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=$math[$songInfo[duration]-10000];false;true]:↪️}
	};$getGuildVar[channelid]]
 $let[bar;$if[$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]==▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;🔘▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]]]`
},{
	name:"messageSend_1",
	type:"awaited",
	code:`
 $setGuildVar[messageid;$get[mid]]
 $let[mid;$channelSendMessage[$getGuildVar[channelid];{newEmbed:
	{author:Şarkı oynatılıyor:https#COLON#//cdn.discordapp.com/emojis/1118197191312412832.gif?v=1&size=64&quality=lossless}
	{thumbnail:$if[$songInfo[artistAvatar]==;$songInfo[thumbnail];$songInfo[artistAvatar]]}
 {image:$if[$songInfo[thumbnail]!=;$songInfo[thumbnail];$if[$songInfo[artistAvatar]==;https://cdn.discordapp.com/attachments/1054455878734061668/1118941266491736095/1686846776196.png;$songInfo[artistAvatar]]]}
 {description:$get[bar]}
 {field:**Şarkı Adı**:**[$songInfo[title]](https://youtu.be/$songInfo[id])**}
 {field:**Artist**:**[$songInfo[artist]]($songInfo[artistURL])**}
 {field:**Şarkının Uzunluğu**:\`$replaceText[$replaceText[$replaceText[$replaceText[$humanizeMS[$songInfo[duration]];s; Saniye];m; Dakika];h; Saat];d; Gün]\`}
 {field:**Şarkının Beğenme Sayısı**:\`$if[$songInfo[likes]==;Bilinmiyor;$songInfo[likes]]\`}
 {field:**Şarkının İzlenme Sayısı**:\`$numberSeparator[$songInfo[views];,]\`}
 {field:**Platform**:\`$toLocaleUppercase[$songInfo[identifier]]\`}
 {field:**Talep Eden**:**[$username[$songInfo[requester.id]]](https://discord.com/users/$songInfo[requester.id])**}
 {color:$if[$songInfo[identifier]==youtube;FF0000;$if[$songInfo[identifier]==spotify;00A031;$if[$songInfo[identifier]==soundcloud;FF5900;]]]}
 }
  {actionRow:
	 {button::1:back10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=10000;false;true]:↩️}
   {button::1:previous_$songInfo[requester.id]:false:◀️}
   {button::1:pause_$songInfo[requester.id]:false:⏸️}
   {button::1:next_$songInfo[requester.id]:false:▶️}
	 {button::1:next10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=$math[$songInfo[duration]-10000];false;true]:↪️}
	};true]]
 
 $let[bar;$if[$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]==▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;🔘▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]]]`
},{
 name:"messageSend_2",
	type:"awaited",
	code:`
 $setGuildVar[messageid;$get[mid]]
 $let[mid;$channelSendMessage[$getGuildVar[channelid];{newEmbed:
	{author:Şarkı durduruldu:https#COLON#//cdn.discordapp.com/emojis/1118197191312412832.gif?v=1&size=64&quality=lossless}
	{thumbnail:$if[$songInfo[artistAvatar]==;$songInfo[thumbnail];$songInfo[artistAvatar]]}
 {image:$if[$songInfo[thumbnail]!=;$songInfo[thumbnail];$if[$songInfo[artistAvatar]==;https://cdn.discordapp.com/attachments/1054455878734061668/1118941266491736095/1686846776196.png;$songInfo[artistAvatar]]]}
 {description:$get[bar]}
 {field:**Durdurulan Şarkı Adı**:**[$songInfo[title]](https://youtu.be/$songInfo[id])**}
 {field:**Artist**:**[$songInfo[artist]]($songInfo[artistURL])**}
 {field:**Platform**:\`$toLocaleUppercase[$songInfo[identifier]]\`}
 {field:**Şarkıyı Durduran**:**[$username[$songInfo[requester.id]]](https://discord.com/users/$songInfo[requester.id])**}
 {color:$if[$songInfo[identifier]==youtube;FF0000;$if[$songInfo[identifier]==spotify;00A031;$if[$songInfo[identifier]==soundcloud;FF5900;]]]}
 }
  {actionRow:
	 {button::1:back10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=10000;false;true]:↩️}
   {button::1:previous_$songInfo[requester.id]:false:◀️}
   {button::1:resume_$songInfo[requester.id]:false:⏯️}
   {button::1:next_$songInfo[requester.id]:false:▶️}
	 {button::1:next10_$songInfo[requester.id]:$if[$getCurrentTrackDuration>=$math[$songInfo[duration]-10000];false;true]:↪️}
	};true]]
 $let[bar;$if[$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]==▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;🔘▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬;$advancedTextSplit[$djsEval[const progressbar = require('string-progressbar');
var total = $songinfo[duration];
var current = $getCurrentTrackDuration;
progressbar.splitBar(total, current, 15,"▬","🔘").join(",");true];,;1]]]`
}]

