module.exports = [{
	name:"durdur",
	kategori:"muzik",
	code:`
 $description[
 **\`$get[song]\` Adlı şarkı durduruldu.**]
 $color[#000001]
 $reply
 $pauseTrack
 	$ifAwaited[$messageExists[$getGuildVar[messageid];$channelID]==true;{execute:messageEdit_2};{execute:messageSend_2}]
	
  $let[song;$songInfo[title]]
 $onlyIf[$playerStatus!=paused;** Bu şarkı zaten durdurulmuş!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 $onlyIf[$queueLength!=0;** Şuanda hiç bir şarkı çalmıyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 $onlyIf[$voiceID[$authorID]!=; **Şuanda hiç bir şarkı çalmıyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]`
}]