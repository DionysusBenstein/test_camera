const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf('7369645200:AAEWnnCuBXMu6FGQzFKAjSyQYak6P4gm0nk')
bot.command('oldschool', (ctx) => {
  const reply_markup  = Markup.inlineKeyboard([[
    Markup.button.webApp('Open app', 'https://dionysusbenstein.github.io/test_camera'),
  ]]);

  ctx.reply('Start mine',  reply_markup );
})


bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
