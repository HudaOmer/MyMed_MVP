<template>
  <div>
    <div class="image-wrap">
      <img :src="product.imageName" :alt="product.name" />

      <div class="product-details">
        <h1 class="product-container">{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "D:/webDevelopmentProjects/MyMed_project/front_end/src/temp_data.js";

export default {
  name: "MedicineDetailPage",
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },
};
</script>