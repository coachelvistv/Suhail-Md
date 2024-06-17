const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348062851287";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_43_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNyxcbiAgICAgICAgODksXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaTXoyMWNqYTlXVkRZTFcxbkJhMkhkTURMNFplUnJqWkFvVk1ObkwvckcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFeUhSeGVXQlNmV2F0eVBwdTVUNE5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImNhYjUxN2M0LTI1OTAtNGUwYy05MTlmLTM1MTA5ZTI1MzM5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICA1MyxcbiAgICAgIDE3OCxcbiAgICAgIDE4MyxcbiAgICAgIDE2LFxuICAgICAgMjQyLFxuICAgICAgMTM5LFxuICAgICAgMTAzLFxuICAgICAgNTUsXG4gICAgICA1MyxcbiAgICAgIDIzMCxcbiAgICAgIDc1LFxuICAgICAgMTQ3LFxuICAgICAgMzIsXG4gICAgICAyMjksXG4gICAgICA1MyxcbiAgICAgIDI5LFxuICAgICAgMjIwLFxuICAgICAgMTIxLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgOTksXG4gICAgICAyMzgsXG4gICAgICAyMTgsXG4gICAgICA4NSxcbiAgICAgIDEwMixcbiAgICAgIDE3OCxcbiAgICAgIDY5LFxuICAgICAgMTE2LFxuICAgICAgMTkyLFxuICAgICAgMjAzLFxuICAgICAgNTIsXG4gICAgICAxNDIsXG4gICAgICAxNDcsXG4gICAgICA1NCxcbiAgICAgIDgsXG4gICAgICAyMjgsXG4gICAgICAyNTEsXG4gICAgICA2MyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRUWVNWN0pZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYyODUxMjg3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDT0FDSEVMVklTIFRWXCIsXG4gICAgXCJsaWRcIjogXCI0MTkwNjE0Njk2MzUxNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l1ejI2Y0JFSkg3d0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlJOVjVja0JuSWszbXpWTHNjUFRaUlZsV1JsaG1xRGJ2MkdTTFNCMERRRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3MkltOUJZQzJpMDlTKzR0TDlEYnlnejZoOHNMQzF4T0ZsWm9SVk9NVmlDTGtFaDNCeVI3RThLUzJ0T0hMZUFEd2ZoSy9nMWpuNkhsUGlPV0RkaDBCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRR1dSUGhmdG91US8xR2JwWWpkTTduTlpna3pWZGtJWDE5R0JWQ21uSHg0SlY5NVBTS1RpU1NOUzdmek1TcmFVY3JLblBERytzNElDcUxicTRyRXZndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYyODUxMjg3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NjMxODMxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
