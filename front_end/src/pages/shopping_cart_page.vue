<template>
  <div>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <div
        class="product-container"
        v-for="product in cartItems"
        :key="product.id"
      >
        <img
          class="product-image"
          :src="product.imageName"
          :alt="product.name"
        />
        <div class="details-wrap">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <button class="remove-button">Remove From Cart</button>
      </div>
      <button class="checkout-button">Proceed To Checkout</button>
    </div>
    <div v-else>Your Cart Is Empty</div>
  </div>
</template>

<script>
import { cartItems } from "@/temp_data";

export default {
  name: "ShoppingCartPage",
  data() {
    return {
      cartItems,
    };
  },
};
</script>