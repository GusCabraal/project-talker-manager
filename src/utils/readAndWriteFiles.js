const fs = require('fs/promises');
const { join } = require('path');

const filename = join(__dirname, '../talker.json');

const read = async () => {
  try {
    const talkers = await fs.readFile(filename, 'utf8');

    return JSON.parse(talkers);
  } catch (error) {
    return null;
  }
};

const getTalker = async (id) => {
    const talkers = await read();
    const talkerId = talkers.find((talker) => talker.id === Number(id));
    return talkerId;
};

module.exports = {
  read,
  getTalker,
};