const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const { token } = require('./config.json'); // STEP 1. Make sure to include your bot token from Discord in the config.json file.

const WELCOME_CHANNEL_ID = 'YOUR WELCOME CHANNEL ID HERE'; // STEP 2. Copy the channel ID of where you want the bot to welcome new members here.

console.log('Starting bot, please give me a second.');
client.on('ready', () => {
    console.log('I am ready to welcome people!');
});

client.on("guildMemberAdd", member => {
    WelcomeNewMember(member);
});

function WelcomeNewMember(member) {

    // STEP 3. (optional) Edit this array to add, change, or remove welcoming messages.
    const WELCOME_MESSAGES = [
        `Welcome, ${member}!`,
        `Glad to have you here, ${member}.`,
        `${member}, how are you?`,
        `Would you like to choose a role, ${member}?`
    ];

    const channel = client.channels.fetch(WELCOME_CHANNEL_ID)
        .then(channel => {

            // This line selects a random message from the WELCOME_MESSAGES array.
            let welcomeMessage = WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];

            // Sending the welcome message 1 second after the member joins, to make sure they get properly tagged.
            setTimeout(function () {

                console.log("Welcoming a new member.");
                channel.send(welcomeMessage);

            }, 1000);

        })
        .catch(console.error);

}

client.login(token);