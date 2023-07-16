const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const FavVideo = Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    video: {
        type: ObjectId,
        ref: 'Video'
    },



}, { timestamps: true })



module.exports = mongoose.model('FavVideo', FavVideo)