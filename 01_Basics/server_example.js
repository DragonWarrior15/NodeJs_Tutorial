function placeOrder(orderNumber){
	console.log('Customer Order : ', orderNumber);
	cookAndDeliverFood(function(){
		console.log('Delivered food order : ', orderNumber);
	});
};

// simulate a 5 second operation
function cookAndDeliverFood(callback){
	setTimeout(callback, 5000);
};

// simulate users orders
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);