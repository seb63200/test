const ssh = require('ssh2');
var Client = ssh.Client;
	var conn = new Client();

module.exports = function exec() {
	
	switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            conn.on('ready', function() {
              console.log('Client :: ready');
              conn.shell(function(err, stream) {
                if (err) throw err;
                stream.on('close', function() {
                  console.log('Stream :: close');
                  conn.end();
                }).on('data', function(data) {
                  console.log('STDOUT: ' + data);
                }).stderr.on('data', function(data) {
                  console.log('STDERR: ' + data);
                });
                stream.end('sudo reboot\nexit\n');
              });
            }).connect({
              host: '192.168.1.100',
              port: 22,
              username: 'pi',
              privateKey: require('fs').readFileSync('/here/is/my/key')
            });
        } else {
			conn.on('ready', function() {
              console.log('Client :: ready');
              conn.shell(function(err, stream) {
                if (err) throw err;
                stream.on('close', function() {
                  console.log('Stream :: close');
                  conn.end();
                }).on('data', function(data) {
                  console.log('STDOUT: ' + data);
                }).stderr.on('data', function(data) {
                  console.log('STDERR: ' + data);
                });
                stream.end('ls -l\nexit\n');
              });
            }).connect({
              host: '192.168.1.100',
              port: 22,
              username: 'pi',
              privateKey: require('fs').readFileSync('/here/is/my/key')
            });
        }  
      break;
      
    }
   
};
