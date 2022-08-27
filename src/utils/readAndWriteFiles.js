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

const addTalker = async (talker) => {
    const { name, age, talk } = talker;
    const talkers = await read();
    const lastTalkerId = talkers[talkers.length - 1].id;
    const newTalker = {
      name,
      age,
      talk,
      id: lastTalkerId + 1,
    };
    talkers.push(newTalker);
    await fs.writeFile(filename, JSON.stringify(talkers));
    return newTalker;
};

module.exports = {
  read,
  getTalker,
  addTalker,
};