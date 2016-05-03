var path 			= require('path');

var friendData 		= require('../data/friends.js');

module.exports = function(app){

	

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});
// lets you see the results the client posted on the resurvey
app.post('/api/friends', function(req, res){

	var friend = req.body;
	console.log(friend);


	friendData.push(friend);


	res.json(friend);
//break into variables
//this will show the data that was posted from the survey
for (i= 0 ; i<friendData.length; i++){if (friendData[i]== friendData[i]){
if (res.score < 100){ friendData[i]== friendData[i]}

}



	 }



});

}

