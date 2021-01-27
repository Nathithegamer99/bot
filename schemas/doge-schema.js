const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const dogeSchema = mongoose.Schema({
  userId: reqString,
  guildId: reqString,
  received: {
    type: Number,
    default: 0,
  },
  lastGave: Date,
})

module.exports = mongoose.model(
  'give-doges',
  dogeSchema,
)