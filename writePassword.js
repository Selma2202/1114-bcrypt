'use strict'
const bcrypt = require ('bcrypt-nodejs')
const fs = require ('fs')

console.log('server running')

bcrypt.hash(process.argv[2], null, null, function(err, hash) {
    //sdgds
    if (err) throw (err); 
    let lala = hash
    console.log(lala)

    fs.appendFile(__dirname + '/message.txt', (lala + '\n'), (err) => {
    	if (err) throw err;
    	console.log('It\'s saved!');
    });

});




// Niet nodig, commandline style
// app.listen (3000, ( ) => {
// 	console.log ('The server is listening on local host 8000')
// } )