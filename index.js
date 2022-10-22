const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
client.login(auth.key);
client.on("ready", () => {
    console.log(`Bot已上線`);
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: `y!help | 正在輸入....`,
        }
    });

});

client.on('message', msg => {
    if (msg.content === 'y!start') {
        msg.react('✅');
        msg.channel.startTyping();
        if (msg.content === 'y!stop') {
            msg.react('✅');
            msg.channel.stopTyping();
        }
    }
    if (msg.content === 'y!stop') {
        msg.react('✅');
        msg.channel.stopTyping();
    }
    if (msg.content === 'y!help') {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setTitle('typing')
            .setDescription('**你好！我是typing，大概是據我所知第一隻typing機器人，沒想到會被那麼多人仿作AwA**\n**關於作者**\n本機器人作者是`Maoyue#4997`\n[作者個人群](https://discord.gg/uQ4UXANnP2)\n**指令**')
            .addField('開始typing', 'y!start', true)
            .addField('停止typing', 'y!stop', true)
            .addField('邀請typing', 'y!inv', true);

        msg.channel.send(embed);

    }
    if (msg.content === 'y!inv') {
        msg.channel.send(
            new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTimestamp()
            .setDescription(
                "[點我邀請機器人](https://discord.com/api/oauth2/authorize?client_id=880066660738949170&permissions=84992&scope=bot)"





            )
        );
    }
});