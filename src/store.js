import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items : [
      {image: require('./assets/img-cont/img1.png'), title: "Nike Red Zoom", brand: "Nike", color: "red", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 5000, available: 99,},
      {image: require('./assets/img-cont/img2.png'), title: "Green Shoes", brand: "Comu", color: "green", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 3000, available: 50,},
      {image: require('./assets/img-cont/img3.png'), title: "Nike Blue Zoom", brand: "Nike", color: "blue", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 5000, available: 70,},
      {image: require('./assets/img-cont/img4.png'), title: "All Around Star", brand: "Allstar", color: "cream", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 4000, available: 30,},
      {image: require('./assets/img-cont/img5.png'), title: "Nike Grey Zoom", brand: "Nike", color: "grey", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 5000, available: 55,},
      {image: require('./assets/img-cont/img6.png'), title: "Wonder Wall", brand: "Wonder", color: "red", Size: "S-M-L", others: "-Synthetic, -Imported, -Rubber Shoe", price: 4500, available: 89,},
    ],
    currentItems: [
      {currentItem: null},
    ]
  },
  mutations: {
    buy: state => {
      state.items.forEach(function(item) {
        return item.available -= 1
      });
    }
},

  actions: {
    buy: context => {
      setTimeout(function() {
        context.commit('buy')
      }, 500)
    }
  }
});
