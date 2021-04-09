const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "%"

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("${Client.guilds.cache.size} servers!", { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

bot.on("message", async message => {
	
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
    if (command === "say") {

        if (!args[0]) return message.channel.send("What should i say?, try `*say <message>`")
	if (message.content.includes("^")) {
            return message.reply("ERROR: the "^" key is invalid!")
        
        }
        const sayMessage = args.slice(0).join(" ");
        message.delete().catch(O_o => { });
        message.channel.send(sayMessage).catch(err => message.reply(`Something went wrong... ${err}`));
        return;
    };
});

// THIS IS THE bot.login

bot.login(process.env.token);
