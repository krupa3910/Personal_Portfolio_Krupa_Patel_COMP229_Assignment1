var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//User Schema
var UserSchema = new Schema({  
username: {type: String, required:true, unique:true},
password : {type: String, unique: true, required:true},
});

// plugin required for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

// exported userschema 
module.exports = mongoose.model("User", UserSchema);
 