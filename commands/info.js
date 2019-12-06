const client = require("../utils/client.js");
const dev = client.users.get(process.env.OWNER);
const artist = client.users.get("401980971517214723");

exports.run = async (message) => {
  const infoEmbed = {
    "embed": {
      "description": "**You are currently using esmBot Dev! Things may change at any time without warning and there will be bugs. Many bugs.**",
      "color": 16711680,
      "author": {
        "name": "esmBot Info/Credits",
        "icon_url": client.user.avatarURL
      },
      "fields": [{
        "name": "📝 Credits:",
        "value": `Bot by **${dev.username}#${dev.discriminator}**\nIcon by **${artist.username}#${artist.discriminator}**`
      },
      {
        "name": "👪 Total Users:",
        "value": client.users.size
      },
      {
        "name": "💬 Total Servers:",
        "value": client.guilds.size
      },
      {
        "name": "✅ Official Server:",
        "value": "[Click here!](https://discord.gg/vfFM7YT)"
      },
      {
        "name": "💻 Source Code:",
        "value": "[Click here!](https://github.com/TheEssem/esmBot-rewrite)"
      },
      {
        "name": "<:twitter:652550515372064768> Twitter:",
        "value": "[Click here!](https://twitter.com/esmBot_)"
      }
      ]
    }
  };
  return message.channel.createMessage(infoEmbed);
};

exports.aliases = ["botinfo", "credits"];
exports.category = 1;
exports.help = "Gets some info/credits about me";