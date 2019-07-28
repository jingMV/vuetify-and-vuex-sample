<template>
    <div id="section">
        <div class="wrapper">
            <section v-for="currentItem in currentItems" :key="currentItem.Id" class="bg">
                <div class="tabs-container">
                <v-tabs vertical
                v-model="currentItem.currentItem"
                background-color="transparent"
                fixed-tabs
                slider-color="green" right>

                     <v-tab
                     v-for="item in items" 
                     :key="item.Id">    
                     <img  width="50px" :src="item.image">
                     </v-tab>

                </v-tabs>

                <v-tabs-items v-model="currentItem.currentItem"  class="image-items">
                    <v-tab-item 
                    v-for="item in items" :key="item.Id">
                    <img width="100%" :src="item.image">
                    </v-tab-item>
                </v-tabs-items>
                </div>

                <div class="description-container">
                <v-tabs-items v-model="currentItem.currentItem" class=" item-description" >
                    <v-tab-item 
                    v-for="item in items" :key="item.Id">
                   <h1 >{{item.title}}</h1>
                    </v-tab-item>
                </v-tabs-items>

                <h4 >Description</h4>

                <v-tabs-items v-model="currentItem.currentItem" class=" item-description">
                    <v-tab-item 
                    v-for="item in items" :key="item.Id">
                  <li >Brand: {{item.brand}}</li> 
                  <li >Color: {{item.color}}</li>
                  <li >Size: {{item.Size}}</li>
                  <li >{{item.others}}</li>
                  <li >Price: ${{item.price}}</li>
                  <li >Available: {{item.available}}</li>
                  </v-tab-item>
                </v-tabs-items>

                <v-tabs-items v-model="currentItem.currentItem" class="btn-container">
                    <v-tab-item v-for="item in items" :key="item.Id">
                        <button class="buy"  @click="buy">Buy Now</button>
                    </v-tab-item>
                </v-tabs-items>
                </div>
            </section>
        </div>
        <footers />
    </div>
</template>
<script>
import footers from './footer'
import {mapActions} from 'vuex'

export default {
    name: 'homeSection',
    components: {
        footers,
    },
    data() {
        return {
            
        }
    },
    computed: {
        items() {
            return this.$store.state.items
        },
        currentItems() {
            return this.$store.state.currentItems
        },
    },
    methods: {
        ...mapActions([
            'buy',
        ])
        }
}
</script>
<style scoped>
.theme--light.v-tabs-items {
    background: none;
}
section {
    padding: 0px;
}
.tabs-container {
    display: flex;
    margin-bottom: 50px;
    position: relative;
    z-index: 2;
}
.image-items {
    margin-top: 40px;
     margin-right: 30px;
}
.description-container {
    background: #263238;
}
.description-container h4 {
    font-size: 14px;
    font-family: 'open sans';
    margin: 10px 0px 0px 20px;
    color: white;
   
}
.item-description h1 {
    text-align: center;
    padding-top: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: #263238;
    color: white;
}
.item-description li {
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 13px;
    background: #263238;
    color: white;
}
.item-description {
    margin-top: 20px;
    position: relative;
}
.buy {
    background: #FFDE00;
    padding: 8px 0px;
    font-weight: 600;
    width: 100%;
}
.btn-container {
    text-align: center;
    background: #263238;
}
.btn-container button {
    justify-content: space-around;
}
@media only screen and (min-width: 420px) {
    .tabs-container {
        width: 350px;
        margin: 20px auto;
}
}
@media only screen and (min-width: 700px) {
    section {
        display: flex;
        width: 700px;
        margin: 50px auto;
        overflow: hidden;
    }
    .tabs-container {
        width: 400px;
        margin: 0px;
    }
    .description-container {
        width:300px;
        background: none;
        z-index: 2;
    }
    .item-description h1 {
        background: none;
        color: black;
    }
    .description-container h4 {
        color: black;
        background: none;
    }
    .item-description li {
        background: none;
        color: black;
    }
    .bg::before {
        content: '';
        width: 700px;
        height: 700px;
        display: block;
        background: #DCDBDB;
        position: absolute;
        top: -150px;
        left: -180px;
        border-radius: 50%;
        z-index: 1;
    }
        .bg::after {
        content: '';
        width: 200px;
        height: 200px;
        display: block;
        background: #DCDBDB;
        position: absolute;
        bottom: -50px;
        right: -50px;
        border-radius: 50%;
        z-index: 1;
        
    }
}
@media only screen and (min-width: 1200px) {
    section {
        width: 1000px;
        margin: 60px auto;
        padding-left: 50px; 
    }
    .tabs-container {
        width: 400px;
       justify-content: space-around
    }
    .description-container {
        width: 400px;
    }
    .wrapper {
        max-width: 1200px;
        width: 98%;
        margin: 0 auto;
    }
}
</style>


