# Welcoming Discord Bot using Discord.js
👋 This is a simple Discord bot, coded in JavaScript and the Discord.js library. This bot welcomes new members to a Discord server using one of the specified messages, sent to a specified channel on the server.

## Set-up & use
To set up this bot, please create a bot application in the Discord Developer Portal (for more instructions, see Tutorial), and then follow these steps:

1. Include your bot token in the `config.json` file.
2. Change the `WELCOME_CHANNEL_ID` variable to the ID of the Discord channel welcoming messages should be sent to.
3. (optional) Edit the `WELCOME_MESSAGES` array to add, change, or remove welcoming messages.
4. Change the information in the `package.json` file to reflect your bot's data.
5. Make sure your bot has the `SERVER MEMBERS INTENT` turned on in the Discord Developer Portal - without it, the bot will not receive notifications when new members come in.
6. Run the bot via NodeJS by running the `node bot.js` command locally, or set up online hosting.

*The `README.md` and `LICENSE` files do not have to be included in the bot's folder. All other files do.*

## Tutorial
A full article on how to code, set up, and use this bot is coming soon.
