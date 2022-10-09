import { Telegraf } from "telegraf"
import 'dotenv/config';
const env = process.env;
if (env.TOKEN && env.URL) {
  const bot = new Telegraf(env.TOKEN)
  bot.start((ctx) => ctx.reply('Welcome!'))
  // web_app: { url: env.URL || '' } to fix
  bot.hears('app', (ctx) => ctx.reply('web_app', { reply_markup: { keyboard: [[{ text: 'web_app', web_app: { url: env.URL || '' } }]] } }))
  bot.launch()
}
