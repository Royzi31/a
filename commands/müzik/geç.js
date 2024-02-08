module.exports = [{
	name:"geç",
	kategori:"muzik",
	code:`
 $description[
 **\`$get[sarki]\` Adlı şarkı geçildi.**]
 $skipTrack
 $let[sarki;$songInfo[title]]
 $reply
 $color[#000001]
 $onlyIf[$queueLength!=1; **Listede atlanıcak başka şarkı bulunmuyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 $onlyIf[$queueLength!=0; **Şuanda hiç bir şarkı çalmıyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
$ifAwaited[$hasPlayer==false;{execute:joinvc}]
 $onlyIf[$voiceID!=; **Şarkı geçebilmek için bir sesli kanala katılıp bir müzik oynatmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
	`
}]