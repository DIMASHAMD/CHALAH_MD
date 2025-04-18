const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
STATUS_READ_MSG: process.env.STATUS_READ_MSG || "CHALAH_MD",
FOOTER: process.env.FOOTER || "CHALAH_MD💚",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
IMAGE_LIMIT: process.env.IMAGE_LIMIT || "3",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/deiqxp.png",
SESSION_ID: process.env.SESSION_ID || "",
OWNER_NUMBER: process.env.SESSION_ID || "94720244981",
PREFIX: process.env.PREFIX || ".",
FOOTER: "> *𝐃𝐢𝐚𝐫𝐲 𝐎𝐟 𝐂𝐡𝐚𝐥𝐚𝐡 📔🦋*",   
JID: process.env.JID || "",
LOGO: process.env.LOGO || `https://files.catbox.moe/deiqxp.png`,
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vb3v0Fe1dAvw1XUIV61t`,
ANTI_DELETE: process.env.ANTI_DELETE || "true"
};



