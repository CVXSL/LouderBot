const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = ""

// THIS IS THE STATUS

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} :)`);
    bot.user.setActivity("over your server!", { 
        type: "WATCHING", 
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    });

}
)

//help command
bot.on('message', async message => {
    if (message.content === "%help") {
	if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('352256')
            .setTitle('Help')
            .setDescription('If you need help, join our support server and DM ``OS Utilities``. \n \n [``[Click here]``](https://discord.gg/5EZpkaGGDW) \n \n *If you are looking for a list of commands, then use the ``=commands`` command!*')

        message.channel.send(exampleEmbed);
    }
})

//commands command
bot.on('message', async message => {
    if (message.content === "%commands") {
	if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('352256')
            .setTitle('Commands')
            .setDescription('**Say** = ``say <message> (not prefix)`` *This command can be used to say something.* \n \n**Help** = ``%help`` *This command can be used to join our support server.* \n \n**Invite** = ``%invite`` *This command can be used to invite this bot to your server.* \n \n**Ping** = ``%ping`` *This command can be used to see the ms (ping) of the bot.*')

        message.channel.send(exampleEmbed);
    }
})

bot.on("message", async message => {
	
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
    if (command === "say") {
	if (message.channel.type == "dm") return;

        if (!args[0]) return message.channel.send("What should i say?, try `say <message>`")
	if (message.content.includes("^")) {
            return message.reply("ERROR: the "^" key is invalid!")
        
        }
        const sayMessage = args.slice(0).join(" ");
        message.delete().catch(O_o => { });
	    
	message.channel.send(sayMessage).catch(err => message.reply(`Something went wrong... ${err}`));
	   
	const exampleEmbed = new Discord.MessageEmbed()
		.setColor('352256')
        	.setDescription(`If spamming, please consider \nmuting this user!`)
		.setFooter(`User: ${message.author.tag} \nUser ID: ${message.author.id}`)
			
		message.channel.send(exampleEmbed);
        return;
    };
});

//invite command
bot.on('message', async message => {
    if (message.content === "%invite") {
	if (message.channel.type == "dm") return;
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('352256')
            .setTitle('Invite')
            .setDescription('[``[Click here]``](https://discord.gg/5EZpkaGGDW)')

        message.channel.send(exampleEmbed);
    }
})

bot.on('message', async message => {
    if (message.content === "%ping") {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('ff55b2')
            .addField("🏓 Pong", `${Math.round(bot.ws.ping)}ms`, false)
	
        message.channel.send(exampleEmbed);
    }

})

// THIS IS THE bot.login

bot.login(process.env.token);
