var async = require('async'),
_         = require('underscore');

module.exports.pks = {
  add: function (req, res) {
    res.render('../app/views/pks/add.ejs');
  }
};

module.exports.amendments = {
  submit: function (req, res) {
    res.render('../app/views/amendments/addAmend.ejs');
  }
};