//
// var controller = Botkit.slackbot({
//     debug: true,
// });


let { Botkit } = require('botkit');
const { SlackAdapter } = require('botbuilder-adapter-slack');

const adapter = new SlackAdapter({
    clientSigningSecret: '5670c2badd0414fc179c7983bfce58ae',
    botToken: 'xoxb-778678816625-800578005126-I9XayrpHPKmSSkhc89uz6Dpt'
});

const controller = new Botkit({
    adapter
});

controller.on('message', async(bot, message) => {
    await bot.reply(message, 'I heard a message!');
});

// controller.hears(['hello', 'olá', 'oi'],'direct_message, direct_mention, mention', function(bot, message) {
//     bot.reply(message,'Hello yourself!');
// });
