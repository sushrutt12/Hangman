var movies = {1:'heat', 2:'hangman',3:'avengers',4:'deadpool',5:'the shawshank redemption',6:'the godfather',7:'interstellar',8:'pulp fiction'};
module.exports.getMovieId=function(){
	var keys = [];
	for (var prop in movies) {
    if (movies[prop]) {
        keys.push(prop);
    }
}
	return keys[keys.length * Math.random() << 0];
};

module.exports.getMovie=function(id){
	return movies[id];
}

module.exports.charExistsInMovie=function(id,alphabet){
	var movie=movies[id];
	if(movie.indexOf(alphabet)>-1)
	{
		return true
	}
	else
	{
		return false
	}
}

module.exports.createMask=function(movie){
 str="";
 for (i=0;i<movie.length;i++){
	if (movie[i]!==' '){
		str+='* ';
    }	
   else if (movie[i]===' '){str+='_ ';}
}
  return str
}

function spacedMovie(movie){
	str="";
 for (i=0;i<movie.length;i++){
	if (movie[i]!==' '){
		str+=movie[i]+' ';
    }	
   else str+='_ ';
}
  return str
}

module.exports.reveal=function(id,alphabet,maskedWord){
	// console.log(id,alphabet,maskedWord)
	var movie = spacedMovie(movies[id]);
	var temp="";
	// console.log(movie,maskedWord);
	for (var i = 0; i < maskedWord.length; i++) {
		if(alphabet===movie[i])
		{
			temp+=alphabet;
		}
		else if(alphabet===' ')
		{
			temp+=' ';
		}
		else{
			temp+=maskedWord[i];
		}
	}
	
	return temp

}