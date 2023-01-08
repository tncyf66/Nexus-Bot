const {EmbedBuilder} = require("discord.js");
const { prefix } = require("../config.js")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  
   if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply("Üyeleri At Yetkiniz Yok.")
    
   const member = message.mentions.members.first();
  
   if(!member) return message.reply("Lütfen Atılacak   Kişiyi Belirtiniz.")

  
   member.kick();
  
  message.reply(" Atıldı! ")

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "kick"
};
