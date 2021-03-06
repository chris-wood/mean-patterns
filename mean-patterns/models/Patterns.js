var mongoose = require('mongoose');

var PatternSchema = new mongoose.Schema({
    name: String,
    upvotes: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}], //array of comment references
    created: {
        type: Date,
        default: Date.now
    }
});

//cb = callback function
PatternSchema.methods.upvote = function (cb) {
    "use strict";
    this.upvotes += 1;
    this.save(cb); //CALLBACK
};

mongoose.model('Pattern', PatternSchema);