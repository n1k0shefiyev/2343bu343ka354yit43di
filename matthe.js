// Sorununz olursa Matthe#0001 ulaşınız.
const keep_alive = require('./keep_alive.js')

const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")//Matthe#1000
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)//Youtube Matthe
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {
  
  if(message.content === '.tag') {
    message.channel.send(`\`${ayarlar.tag}\``)//Youtube Matthe
  }
  })

client.on("ready", () => {
    console.log(chalk.redBright(`tm`))
})

//
client.on('guildMemberAdd', async (member) => {
  /////////////////////////
     //Kanal Tanımı
     ////////////////////////////////////////
    let viruskanal = client.channels.cache.get("895773179937710140")
  ////////////////////////////////////////
  //Güvenlik TanımlarıS
  ////////////////////////////////////////
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
  
  /////////////////////// /////////////////
  //Embed
  ////////////////////////////////////////
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
     <a:asvdvfds:897507683681308702> Aramıza Hoşgeldin **${virususer.username}** !
  
     <a:asvdvfds:897507683681308702> Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
  
     <a:asvdvfds:897507683681308702> <@&895770570703118427> Rolundekiler Senle En Kısa Zamanda İlgilenicek
  
     <a:asvdvfds:897507683681308702> İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.

     <a:asvdvfds:897507683681308702> Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
     <a:asvdvfds:897507683681308702> Hesabın Güvenlik Durumu: **${viruj}**
  
     <a:asvdvfds:897507683681308702> Kurallari Okumayi Unutma
    
    `)
    .setColor("#00ff1f")
    //.setImage("https://cdn.discordapp.com/attachments/706505340417736736/794296050121965568/ezgif-6-9ab9144abf46.gif")
    .setImage("https://i.imgur.com/ISA4NFv.jpeg")
    .setTitle("Aramıza Yeni Birisi Katıldı !")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter("Şahan")
    ////////////////////////////////////////
    //Kanala Gönderme
    ////////////////////////////////////////
    viruskanal.send(`<@&895770570703118427> <@${member.id}>`, hgembed) ;
  })



client.login(process.env.TOKEN)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
//Youtube Matthe







