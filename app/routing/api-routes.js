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

//this will show the data that was posted from the survey. This will be a for-loop that this display the content that the client posted on the app. One for loop will bring up the the data. The second for-loop will break down the score and subtract a json from the api. IntThe last for-loop, I attempt to   gather the difference and match with  one of the jsons from the api. 


for (i= 0 ; i<friendData.length; i++){

newFriend= {};
totalDifference =100;
for (j = 0; j<friendData.scores[h]; j++){
(newFriend).push(req.body.scores)-(friendData[i].scores[h])

}
for (k = 0; k<totalDifference.length; k++){
if (newFriend == totalDifference ){
	newFriend = friendData
}


}

	 }



});

}

