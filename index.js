const { LoadCommands, Util } = require('aoi.js') 
const express = require('express')
const app = express()
const bot = require('./bot/client.js')
const { InviteManager } = require("@akarui/aoi.invite");
const { prefix } = require('./bot/config.json')
const voice = require('./bot/voice.js')

const axios = require('axios')

const i = new InviteManager(bot,{
  sk: "a-32-characters-long-string-here",
},['inviteJoin','inviteLeave']);

  const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")
loader.load(voice.cmds,"./events/voice/");


bot.variables(require(`./bot/variables.js`))
 
loader.setColors({
  walking: ["blink", "dim", "fgBlue"],
  failedWalking: {
    name: ["bright", "fgRed", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgRed"],
    type: ["fgRed"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgGreen"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
})

// DURUM

bot.status({
	name:"İtemSatış:",
	time: 10,
	status: "dnd",
	type:"PLAYING"
})