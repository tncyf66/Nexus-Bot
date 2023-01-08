
const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        if(!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(" `Üyeleri Banla Yetkiniz Yok. `")


        let user = message.mentions.users.first();




        if(!user) return message.reply(" `Lütfen Banlanacak Kişiyi Belirtiniz. `")




const üye = message.guild.members.cache.get(user.id)


üye.ban()








message.reply("`Banladım!`")




}

  exports.conf = {
  aliases: []
};

exports.help = {
  name: "ban"
};
