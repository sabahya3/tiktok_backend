const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId


const VideoSchema = Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    sharedBy: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        default: ''
    },
    song: {
        type: String,
        default: ''
    },
    videoImg: {
        type: String,
        default: ''
    },
    videoUrl: {
        type: String,
        default: ''
    },
    loveCount: {
        type: Number,
        default: 0
    },
    watchCount: {
        type: Number,
        default: 0
    },
    shareCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })



module.exports = mongoose.model('Video', VideoSchema)