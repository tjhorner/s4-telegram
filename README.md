# s4-telegram

This module is to be used as a sender/receiver connector for [s4 core.](https://github.com/studentrnd/s4-core)

## Initializing

```javascript
var TelegramConnector = require('s4-telegram'),
    telegram = new TelegramConnector(bot, "YOUR-TELEGRAM-BOT-KEY");

// then attach the `telegram` variable or whatever you named it to the bot.
```
