const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const dogeLeaderboardSchema = mongoose.Schema({
  // Guild ID
  _id: reqString,
  channelId: reqString,
})

module.exports = mongoose.model('doge-leaderboards', dogeLeaderboardSchema)