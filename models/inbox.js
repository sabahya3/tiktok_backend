const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId



const InboxSchema = Schema({
    chatMembers: [{
        type: ObjectId,
        ref: 'User'
    }]


}, { timestamps: true })



module.exports = mongoose.model('Inbox', InboxSchema)