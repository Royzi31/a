module.exports = [{
	name:"devam",
	kategori:"muzik",
	code:`
 $description[
 <a:onay:1118168602391105617> **| \`$get[song]\` Adlı şarkı tekrardan oynatılıyor.**]
 $color[#000001]
 $reply
 $resumeTrack
 $let[song;$songInfo[title]]

	$ifAwaited[$messageExists[$getGuildVar[messageid];$channelID]==true;{execute:messageEdit_1};{execute:messageSend_1}]


 $onlyIf[$playerStatus!=playing;** Bu şarkı zaten devam ediyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 $onlyIf[$queueLength!=0;** Şuanda hiç bir şarkı çalmıyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 $onlyIf[$voiceID[$authorID]!=; ** Şuanda hiç bir şarkı çalmıyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]`
}]