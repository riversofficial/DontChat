const { Botkit } = require('botkit');
const { SlackAdapter } = require('botbuilder-adapter-slack');
require('dotenv').config();

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT || !process.env.VERIFICATION_TOKEN) {
  console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN and PORT in environment');
  process.exit(1);
} else {
  console.log('Good job, you have the variables!')
}

const adapter = new SlackAdapter({
     clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
     botToken: process.env.BOT_TOKEN
});

const controller = new Botkit({
     adapter,
     // ... other configuration options
});

controller.on('message', async(bot, message) => {
    console.log('estou ouvindo')
    await bot.reply(message, 'I heard a message!');
});

controller.hears('hello','direct_message', function(bot, message) {
    console.log('estou ouvindo')
    bot.reply(message,'Hello yourself!');
});

// var SlackBot = require('slackbots');
// var channel = 'geral'
//
// var bot = new SlackBot({
//   token: 'xoxb-778678816625-800578005126-UnL8Jt6cj8yKvHwkhmrk6b1r',
//   name: 'BuglessTimer'
// })
//
//
// bot.on('message', function(data) {
//   let message = data.text
//   // console.log(data.text)
//   switch (message.toLowerCase()) {
//     case 'novo bug':
//     case 'new bug':
//     bot.postMessageToChannel(channel, 'Bug Registrado!');
//     console.log('Hello world!');
//   }
// })
