module.exports = function() {
    var exec = require('./exec.js');
	var setup = require('./setup.js);

    return {
        exec: exec
		setup: setup		
    };
};