const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//gg
module.exports = {
SESSION_ID: '', // මෙතනට බොට් සීසන් එක දාන්න ඕන බ්‍රදර් "킹_딜리샤=" මේක මුලට දාන්න ඕන ⛩️
ANTI_DELETE: process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE, 
MV_BLOCK: process.env. MV_BLOCK === undefined ? 'true' : process.env. MV_BLOCK,    
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK, 
SEEDR_MAIL: '', // මේල් එක දාන්න මෙතනට
SEEDR_PASSWORD: '', // පාස්වර්ඩ් එක මෙතනට
SUDO: '', // මෙතනට ඔයාගෙ නම්බර් එක දාන්න
DB_NAME: '킹_딜리샤', // මේවා DATABASE එක මේක වෙනස් කරන්න එපා
LANG: 'SI', // මෙතනට ඔයාගෙ භාශාව (SI,ENG,JP,KOR,TAM,TEL,HIN,ALL) ඕන එක දාන්න.
OWNER_NUMBER: '94754871798', // ඔයාගෙ නම්බර් එක දාන්න මේක්ට
TG_GROUP: 'https://t.me/ff_proxy_vip_SL' // ඔයාගෙ TELEGRAM GROUP එක මෙතනට.

};

