var Telegram = require('node-telegram-bot-api');

function TelegramConnector(bot, token){
  var telegram = new Telegram(token, {polling: true});

  this.sendMessage = function(message, chat){
    telegram.sendMessage(chat, message);
  };

  this.handleMessage = function(){
    telegram.on("message", function(msg){
      bot.processMessage(msg.text, msg.chat.id, msg.from.username, msg);
    });
  };
};

module.exports = TelegramConnector;
