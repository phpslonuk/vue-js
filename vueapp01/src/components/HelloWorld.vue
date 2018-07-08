<template>
  <div class="container pt-5">
    <div class="row">
        <div class="col">
        
        </div>
    </div>

    <div class="row">
        
        <div class="col-md-4">
          <h1> List company </h1>
          <ul class="list-group">
            <li 
              v-for="(car, index) in cars"
              class="list-group-item list-group-item-action"
              v-on:click="selectCompany(index)"
              v-bind:class="{'active': secectedCarindex === index}">
                {{ car.companyName }}
            </li>
          </ul>

        </div>

        <div class="col-md-8">
          <div class="row">
            <div class="col-md-7">
                <h2> Company delails </h2>
                <ul>
                    <li> Сompany: {{ car.companyName }} </li>
                    <li> Profit: {{ car.profit }} </li>
                    <li> Business partners: {{ car.partners }} </li>
                </ul>
            
            <button class="btn btn-primary">delete</button>
            <button class="btn btn-primary">updete</button>
            </div>
          </div>
       </div>

    </div>
  </div>




 
</template>

<script>
const cars = [
  {companyName: 'first company', profit: "$1000000", partners: " Walmart, State Grid, Sinopec Group, China National Petroleum" },
  {companyName: 'second company', profit: "$2000000", partners: " Toyota, Volkswagen Group, Royal Dutch Shell"},
  {companyName: 'the thirdcompany', profit: "$50000", partners: " Berkshire Hathaway, Apple, Exxon Mobil"},
  {companyName: 'the fourth company', profit: "$30000", partners: "   McKesson, BP, United Health, CVS Health"},
  {companyName: 'fifth company', profit: "$400000", partners: " Toyota, Volkswagen Group, Royal Dutch Shell"},
  {companyName: 'sixth company', profit: "$55555", partners: " State Grid, Sinopec Group,"},
  {companyName: 'seven company', profit: "$888052", partners: " Berkshire Hathaway, Apple, Exxon Mobil"},
  {companyName: 'eighth company', profit: "$646767", partners: " Exor, AXA"},
]




export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cars: cars,
      car: cars[0],
      secectedCarindex: 0,
    }
  },
    methods: {
    selectCompany: function (index) {
      this.car = cars[index]
      this.secectedCarindex = index
    }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
