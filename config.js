module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["796001480406466601", ""], 
  mongodbUri : "mongodb+srv://dante:dante1@discordbot.jvp49.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
        {
      name: "Public Lavalink v4 NonSSL",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 80,
      secure: false
    },
  ] 
}
