const Discord = require('discord.js');

module.exports.run = async (message) => {

      var helpembed = new MessageEmbed()
        .setTitle('Help de wolfbot')
        .setColor(0x00ff20)
        .addField("W!help", "Permet d'afficher toute les commande")
        .addField("W!infobot","Permet de connaitre les informations sur le bot")
      message.channel.send(helpembed);
    }

module.exports.help = {
    name: "help"
}