const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId



const FollowSchema = Schema({
    follower: {
        type: ObjectId,
        ref: 'User'
    },
    following: {
        type: ObjectId,
        ref: 'User'
    },



}, { timestamps: true })



module.exports = mongoose.model('Follow', FollowSchema)