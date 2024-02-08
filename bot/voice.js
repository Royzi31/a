const bot = require('./client.js')
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require(`@akarui/aoi.music`);

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "zCEEXZhOnotqick3yiRUAN1DAl34xbSD", 
        youtubeCookie: "",
        youtubeAuth: "",
        youtubegl: "TR",
        youtubeClient: "WEB"
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
        youtubeLikeTrackLimit: 200,
        spotifyPlaylistLimit: 200,
    },
});
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* ou "disk" */));
voice.addPlugin( PluginName.Filter, new Filter( {
    filterFromStart: false,
}));
voice.bindExecutor(bot.functionManager.interpreter);
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.QUEUE_START);
voice.addEvent(PlayerEvents.QUEUE_END);
voice.addEvent(PlayerEvents.AUDIO_ERROR);
voice.addEvent(PlayerEvents.TRACK_PAUSE);
voice.addEvent(PlayerEvents.TRACK_RESUME);

module.exports = voice