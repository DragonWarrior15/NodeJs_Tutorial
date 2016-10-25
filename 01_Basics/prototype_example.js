function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		this.life -= 1;
		console.log(this.name, 'gave one life to', targetPlayer.name, 'new life', targetPlayer.life);
	}
};

var alpha = new User();
alpha.name = "alpha";

var beta = new User();
beta.name = "beta";

alpha.giveLife(beta);

console.log('alpha', alpha.life);
console.log('beta', beta.life);

// properties can be added later also
User.prototype.upperCut = function upperCut(targetPlayer) {
	targetPlayer.life -= 3;
	this.life += 3;
	console.log(this.name, 'took 3 lives from', targetPlayer.name, 'new life', targetPlayer.life);

}

beta.upperCut(alpha);

console.log('alpha', alpha.life);
console.log('beta', beta.life);
