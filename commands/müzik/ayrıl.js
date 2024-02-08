module.exports = [{
	name: "ayrıl",
	kategori:"muzik",
	code:`
 $description[
 ** Bot başarıyla <#$get[kanal]> sesli kanalından ayrıldı.**]
 $color[#000001]
$reply
$let[kanal;$voiceID]
$leaveVC
 
$onlyIf[$if[$voiceID[$clientID]!=$voiceID[$authorID];true;false]$if[$djsEval[message.member.voice.channel.members.size;true]!=1;true;false]!=true;** Botu sesli kanaldan çıkarmak için botla aynı sesli kanalda olmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$onlyIf[$voiceID==$voiceID[$clientID];** Botu sesli kanaldan çıkarmak için botla aynı sesli kanalda olmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$onlyIf[$voiceID[$clientID]!=; ** Bot zaten bir sesli kanalda bulunmuyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$onlyIf[$voiceID[$authorID]!=;** Botun ses kanalından çıkarmak için bir sesli kanala katılmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 `
}]