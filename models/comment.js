const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const CommentSchema = Schema({
    videoId: {
        type: ObjectId,
        ref: 'Video'
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    commentTxt: {
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
    replysCount: {
        type: Number,
        default: 0
    },

}, { timestamps: true })



module.exports = mongoose.model('Comment', CommentSchema)