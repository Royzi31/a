module.exports = [{
	name:"ses",
	code:`
$reply
$author[$username;$useravatar]
$description[**Şarkı sesi başarılı bir şekilde $message olarak ayarlandı.**]
$footer[$username[$clientid];$useravatar[$clientid]]
$color[Green]
 $volume[$message]


  $onlyIf[$message<=201;{newEmbed:
{title:Hata}
{author:$username:$userAvatar}
{description:**Ses düzeyini seste bozulmalar olabileceğinden dolayı maksimum 200 yapabilirsiniz.**}
{color:Red}
{footer:$username[$clientİD]:$useravatar[$clientid]}
{timestamp}
}]

$onlyIf[$message!=0;{newEmbed:
{title:Hata}
{author:$username:$userAvatar}
{description:**Ses düzeyini 0 yapamazsınız.**}
{footer:$username[$clientİD]:$useravatar[$clientid]}}
{color:Red}
{timestamp}
}]

 $onlyIf[$playerStatus!=idle;{newEmbed:
  {title:Hata}
  {author:$username:$userAvatar}
  {description:**Zaten şuanda şarkı çalmıyor.**}
  {footer:$username[$clientID]:$useravatar[$clientID]}
  {color:Red}
  {timestamp}}]

 $onlyIf[$queueLength!=0;{newEmbed:
  {title:Hata}
  {author:$username:$userAvatar}
  {description:**Şuanda hiç bir şarkı çalmıyor.**}
  {footer:$username[$clientID]:$useravatar[$clientID]}
  {color:Red}
  {timestamp}}]


 $onlyIf[$voiceID[$clientID]!=;{newEmbed:
  {title:Hata}
  {author:$username:$userAvatar}
  {description:**Şuanda hiç bir şarkı çalmıyor.**}
  {footer:$username[$clientID]:$useravatar[$clientID]}
  {color:Red}
  {timestamp}}]`
}]