const Discord = require('discord.js');

const client = new Discord.Client();

const WELCOME_CHANNEL_ID = '123456789012345678';

console.log('Starting.');

client.on('ready', () => {

    console.log('I am ready!');

});


client.on("guildMemberAdd", member => {

    WelcomeNewMember(member);

});

function WelcomeNewMember(member) {

    const WELCOME_MESSAGES = [
        `Welcome, ${member}!`,
        `Glad to have you here, ${member}.`,
        `${member}, how are you?`,
        `Would you like to choose a role, ${member}?`
    ];

    const channel = member.guild.channels.cache.find(ch => ch.id === WELCOME_CHANNEL_ID);

    if (!channel) return;

    let welcomeMessage = WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];

    console.log("Welcoming a new member.");

    channel.send(welcomeMessage);

}

client.login("YOUR BOT TOKEN");