function printAvatar(){
	console.log("Avatar");
};

function printConjuring(){
	console.log("Conjuring");
};

// to export specific parts of the module
module.exports.avatar = printAvatar();

// can export specific parts in a more efficient way through following
module.exports = {
	printOcean(){
		console.log("Oceans 11");
	}
};