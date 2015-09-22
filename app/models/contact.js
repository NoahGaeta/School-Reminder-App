/**
 * Created by Noah Gaeta on 9/15/2015.
 */
var mongoose = require('mongoose');

var phoneSchema = mongoose.Schema({
    phonenumber : Number
});
   mongoose.model('Phone', phoneSchema);
