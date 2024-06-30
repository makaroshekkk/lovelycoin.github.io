const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на токен вашего бота
const token = '7373309842:AAEfoGyLAZ_3ReSBtZ6_VPkeshS8jOHfUn4';

// Создайте экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const gameUrl = 'https://makaroshekk.github.io/lovelycoin.github.io/';

    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Играть в Тык-Тык Игру',
                        url: gameUrl
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, 'Нажмите на кнопку ниже, чтобы начать игру:', opts);
});

console.log('Bot is running...');
