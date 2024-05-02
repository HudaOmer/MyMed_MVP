<template>
    <div>
        <h1>Medicines</h1>
        <div class="grid-wrap">
            <div 
                class="product-item"
                v-for="product in products" 
                :key="product.id"
            >
                <img :src="product.imageName" :alt="product.name"/>
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-price">{{ product.price }}</p>
                <button>View Details</button>
            </div>
        </div>
    </div>
    
</template>

<script>
import {products} from 'D:/webDevelopmentProjects/MyMed_project/front_end/src/temp_data.js'
export default {
    
    name: "MedicinesPage",
    data() {
        return {
            products,
        }
    }
}
</script>