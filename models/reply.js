const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ReplySchema = Schema({
    commentId: {
        type: ObjectId,
        ref: 'Comment'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    replyTxt: {
        type: String,
        default: ''
    },
    loveCount: {
        type: Number,
        default: 0
    },
    dislikeCount: {
        type: Number,
        default: 0
    },


}, { timestamps: true })



module.exports = mongoose.model('Reply', ReplySchema)