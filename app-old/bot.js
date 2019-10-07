const { Botkit } = require('botkit');

const controller = new Botkit()

var bot = controller.spawn({
    token: 'token aqui'
}).startRTM();

controller.hears(['new bug', 'novo bug'], 'direct_message,direct_mention,mention,message', function(bot, message) {
    var helloText = "Novo bug detectado, o contador foi zerado!";

    bot.reply(message, helloText);
});
