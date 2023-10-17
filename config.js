const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "27767494368"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'nyamakaziave@gmail.com'
global.github = 'https://github.com/BrbBot69/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/_madeby_ave/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/BrbBot69/XLICON-MD' //wa.me/+27767494368
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpyRW5CNFNpZFkzc2tCY1hUclZPWk1NUk9HbWRiRjQ4SmUxekp1SVhXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1RMem5LcEF1eklmRyszWVR5dUJBQ2d2Qkd2UWtvdVdQTWdFUmFzVm0zMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTXU1WmNoem5SbmRuQXpOWmEvMnREQjlFTGdhWFMxSGc3U2w5RG1WTjFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaTdvam5mMjZBOVZkNkcwTDRqVkVoTEdQbXVseFBaUzU5QUUzSGFMa0JjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCTVNldmpwWlhuQVFqdGpwa2RPcDZPUnc1bDR4dWNDOWp6ejlGMmVkV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5LSVo1RXdBbEgvaU5ybjdDKzYrY254MDBLL0t4dGlnVGs5YnJQNmFZaTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwL1dQb0FJVFhqUCs5Rkd2TTlnSjFzMVNiV01FNHNJNHU3N0pDMDRyWDdXcmZtSW9LYkROUHd4S0c3aDlnV1liSTJNWUdGV2lkbjk1YUpJR1RYbE1pdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjk1LCJhZHZTZWNyZXRLZXkiOiJDdHNNNUlYeEphanN4NTNnTHAxb1dRdnl6QkQ2NDVnRlRKdnpNdE5WaytvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSYnNiSmNVUlN6ZXpZRlduSkNxMW5nIiwicGhvbmVJZCI6IjEzNjVlYjRkLThiMTctNDQ4OS1hMDU5LTU3YTFkYTViYTM2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2QzhrWUo3U1BwTm1OV2dwM3B0S0hzdndQVnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1pa0t4WjdKUnhrZjRCV0NSYXpadGpXR1FFQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xVDRoSVFwNkM3cVFZWUVRPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHp1Q0dYSkRha0pFdWtkS0tIdGpDRXR5aTFOcWVoRzdIMGtRRWFpSm95ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoic3dzMTdTTDZ4dU1GTUM2RWVtaEY2ci94U2hXanBqUkFPRG9RYnZkNlRyWGh3L0tVOHV5K1F6K2VzMDI1eVNCMko0L1pHdkNnY0ZwRHQ5a09iRUtSQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlkyV3lYTDVIalJaeEhJVjh5aVduU2c5OFRCWUJCUE9UVjhOcHhnZ1pnbzg3M2EvaVlPbnMwQXJJSWx4QUtZekxCZDJoRVVVMXlaOHV6dkVWRmJ2MWp3PT0ifSwibWUiOnsiaWQiOiIyNzc2NzQ5NDM2ODoyMUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc2NzQ5NDM2ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRODdnaGx5UTJwQ1JMcEhTaWg3WXdoTGNvdFRhbm9SdXg5SkVCR29pYU1pIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3NTY2NzYyfQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
