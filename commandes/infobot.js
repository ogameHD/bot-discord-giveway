const Discord = require('discord.js');

module.exports.run = async (message) => {

      var infobotembed = new MessageEmbed()
        .setTitle('Information sur wolfbot')
        .setColor(0xff6800)
        
      message.channel.send(infobotembed);
    }

module.exports.help = {
    name: "help"
}