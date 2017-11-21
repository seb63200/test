module.exports = function(sails) {
	
    var exec = require('./lib/exec.js');
    var setup = require('./setup.js);

    return {
        exec: exec,
	setup: setup		
    };
};
