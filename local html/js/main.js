const cars = [
	{companyName: 'first company', doxid: "$55555", ditu: " lalalal"},
	{companyName: 'second company', doxid: "$55555", ditu: " lalalal"},
	{companyName: 'third company', doxid: "$55555", ditu: " lalalal"}
]




new Vue ({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		secectedCarindex: 0,
	}, 
	methods: {
		selectCompany: function (index) {
			this.car = cars[index]
			this.secectedCarindex = index
		}
	},
});