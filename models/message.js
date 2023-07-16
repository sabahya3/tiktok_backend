const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId



const MessageSchema = Schema({
    msgTxt: {
        type: String,
        default: ''
    },
    senderId: {
        type: ObjectId,
        ref: 'User'
    },
    chatId: {
        type: ObjectId,
        ref: 'Inbox'
    },



}, { timestamps: true })



module.exports = mongoose.model('Message', MessageSchema)