const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const bot = new LineBot({
  channelSecret: 'd14d971de36208d917f0c2dd4a633416',
  accessToken: 'SGuP0V2tKEyINQD2Dnb4pplkNckX+A0Sb7yUO443wi+G7nATJyor80RmBOiHC4ySJJ/9d8LDjlnkQbEY4wmC63SRbpGl9zRxa0ErJiNrgwgDlyeYw+iGp4BSely/3L5gqJJfSASVTfmgyR3KekbrSAdB04t89/1O/w1cDnyilFU=',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot);

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
