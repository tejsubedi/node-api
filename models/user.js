const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind: Virtual property don't get persisted in the database.
 * They only exist logically and are not written to the document's collection.
 */

//Creating virtual fields for password updated in data base
//Virtual
userSchema.virtual('password')
    .set(function (password) {
        //create temporary variable called _password
        this._password = password;

        //generate a timestamp
        this.salt = uuidv1();

        //Encrypt password
        this.hashed_password = this.encryptPassword(password);
    })

    .get(function () {
        return this._password
    })

//methods



module.exports = mongoose.model("User", userSchema);