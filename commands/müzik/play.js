module.exports = [{
	name:"play",
	kategori:"muzik",
	code:`
$author[$username;$useravatar]
$description[
**$if[$splitText[2]==0;\`$toLocaleUpperCase[$songInfo[title]]\` isimli şarkı oynatılıyor.;\`$toLocaleUpperCase[$songInfo[title;$math[$queueLength-1]]]\` isimli şarkı listeye eklendi.]**]
$color[Green]
$reply
$playTrack[$nonescape[$get[resp]];$replaceText[$replaceText[$checkCondition[$get[plc]==open.spotify.com];true;spotify];false;youtube]]
$setGuildVar[channelid;$channelID]
$ifAwaited[$splittext[2]==0;$ifAwaited[$playerStatus==paused;{execute:resumeTrack};];]

$textSplit[$get[pl]; ]
$let[pl;$get[plc] $if[$queueLength==0;0;1]]
$let[plc;$if[$isValidLink[$get[resp]]==true;$advancedTextSplit[$advancedTextSplit[$get[resp];//;2];/;1];youtube]]
$let[resp;$message]

$onlyIf[$if[$voiceID[$clientID]!=$voiceID[$authorID];true;false]$if[$djsEval[message.member.voice.channel.members.size;true]!=1;true;false]!=truetrue;**Bir şarkı çalabilmek için botla aynı sesli kanalda olmanız gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]

$ifAwaited[$voiceID[$authorID]!=$voiceID[$clientID];$ifAwaited[$djsEval[message.member.voice.channel.members.size;true]==1;{execute:joinvc};]]
$ifAwaited[$hasPlayer==false;{execute:joinvc};]

$onlyIf[$message!=;**Bir şarkı oynatabilmeniz için öncelikle bir müzik ismi veya bağlantısı girmeniz gerekiyor!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]
$onlyIf[$voiceID[$authorID]!=;**Bir şarkı oynatabilmeniz için öncelikle bir sesli kanala katılmalısınız!** {options: {reply: $messageID}}{extraOptions: {delete: 6s}}]`
}]