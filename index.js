const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "%"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("${client.guilds.cache.size} servers!", { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)



// THIS IS THE bot.login

bot.login(process.env.token);
