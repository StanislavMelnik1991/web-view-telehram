import { Context, Markup, Telegraf } from 'telegraf';
import { Update } from 'typegram';

const TOKEN = process.env.TOKEN as string;
const URL = process.env.URL as string;

export class TelegramBot {
  bot: Telegraf<Context<Update>>;

  constructor() {
    this.bot = new Telegraf(TOKEN);
  }

  init() {
    console.log(TOKEN);
    this.bot.start((ctx) => {
      console.log('connect');
      ctx.reply('Hello ' + ctx.from.first_name + '!');
    });
    this.bot.help((ctx) => {
      ctx.reply('Send /start to receive a greeting');
      ctx.reply('Send /keyboard to receive a message with a keyboard');
      ctx.reply('Send /quit to stop the bot');
    });
    this.bot.command('quit', (ctx) => {
      // Explicit usage
      ctx.telegram.leaveChat(ctx.message.chat.id);
      // Context shortcut
      ctx.leaveChat();
    });
    this.bot.command('keyboard', (ctx) => {
      ctx.reply(
        'Keyboard',
        Markup.inlineKeyboard([
          Markup.button.callback('First option', 'first'),
          Markup.button.callback('Second option', 'second'),
        ]),
      );
    });
    this.bot.on('text', (ctx) => {
      ctx.reply(
        'You choose the ' +
          (ctx.message.text === 'first' ? 'First' : 'Second') +
          ' Option!',
      );
    });
  }
}
