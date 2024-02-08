module.exports = [{
	name: "katıl",
	kategori:"muzik",
	code:`
 $description[
** Bot başarıyla <#$get[kanal]> ses kanalına katıldı.**]
 $color[#000001]
$reply
$let[kanal;$voiceID]
$joinVC
 
$onlyIf[$if[$voiceID[$clientID]!=$voiceID[$authorID];true;false]$if[$djsEval[message.member.voice.channel.members.size;true]!=1;true;false]!=truetrue;**Bot zaten şuanda başka bir ses kanalında!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$onlyIf[$voiceID!=$voiceID[$clientID];*Zaten botla aynı ses kanalında bulunuyorsunuz!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$onlyIf[$voiceID[$authorID]!=;**Botun ses kanalınıza katılması için bir sesli kanala katılmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
 `
}]