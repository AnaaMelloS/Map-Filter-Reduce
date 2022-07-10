const pineapple = {
	price: 3,
};

const orange = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, orange);
}

console.log(mapArray());