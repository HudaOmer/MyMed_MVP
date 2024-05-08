(function(){"use strict";var e={1958:function(e,a,n){var t=n(5130),r=n(6768);const i={id:"app"},o={class:"page wrap"};function c(e,a,n,t,c,s){const u=(0,r.g2)("webapp-header"),l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(u),(0,r.Lk)("div",o,[(0,r.bF)(l)])])}var s=n.p+"img/main_logo.31379a9d.png";const u={class:"navbar",role:"navigation","aria-label":"main navigation"},l=(0,r.Fv)('<div class="navbar-menu"><div class="navbar-start"><h1 class="my-med">MyMed</h1><a class="navbar-item white" href="home">Home</a><a class="navbar-item white" href="home">About Us</a><a class="navbar-item white" href="products">Shop</a><a class="navbar-item white" href="home">Contact Us</a><img class="logo-nav" src="'+s+'" alt="logo"></div></div>',1),m=[l];function p(e,a){return(0,r.uX)(),(0,r.CE)("nav",u,m)}var d=n(1241);const v={},g=(0,d.A)(v,[["render",p]]);var f=g,h={name:"App",components:{"webapp-header":f}};const b=(0,d.A)(h,[["render",c]]);var k=b,w=(n(8111),n(1387)),y=n.p+"media/landing_page_v0.e15ebf1f.mp4";const C={class:"hero is-fullheight"},L=(0,r.Fv)('<video autoplay loop muted><source src="'+y+'"></video><section class="intro-section"><h2>Egd Al-loli</h2><p>An online store for selling hand made accessories</p><a href="products"><button class="start-button">Start Shopping Now!</button></a></section>',2),_=[L];function E(e,a,n,t,i,o){return(0,r.uX)(),(0,r.CE)("section",C,_)}var N={name:"HomePage",data(){return{}}};const $=(0,d.A)(N,[["render",E]]);var A=$,X=n(4232);const O=(0,r.Lk)("h1",null,"Shopping Cart",-1),F={key:0},I=["src","alt"],j={class:"details-wrap"},M=(0,r.Lk)("button",{class:"remove-button"},"Remove From Cart",-1),P=(0,r.Lk)("button",{class:"checkout-button"},"Proceed To Checkout",-1),S={key:1};function H(e,a,n,t,i,o){return(0,r.uX)(),(0,r.CE)("div",null,[O,i.cartItems.length>0?((0,r.uX)(),(0,r.CE)("div",F,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.cartItems,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"product-container",key:e.id},[(0,r.Lk)("img",{class:"product-image",src:e.imageName,alt:e.name},null,8,I),(0,r.Lk)("div",j,[(0,r.Lk)("h3",null,(0,X.v_)(e.name),1),(0,r.Lk)("p",null,(0,X.v_)(e.price),1)]),M])))),128)),P])):((0,r.uX)(),(0,r.CE)("div",S,"Your Cart Is Empty"))])}var x=n.p+"img/himalaya_honey_cream_soap_75_gm_0_2.6c618d7f.jpg",T=n.p+"img/basil-bottle.a4f576eb.webp",B=n.p+"img/lemon-bottle.fd199572.webp",D=n.p+"img/garlic-bottle.2a922d82.webp",G=n.p+"img/rosemary-bottle.bf81b88d.webp",K=n.p+"img/chili-bottle.1e766595.webp",R=n.p+"img/delicate-bottle.9c80ad73.webp",U=n.p+"img/medium-bottle.8a671750.webp",V=n.p+"img/bold-bottle.6c727552.webp";const Y=[{id:"1",name:"Himalaya Honey & Cream Soap 125 gm",price:"$2.00",imageName:x},{id:"123",name:"Basil",price:"$26.00",imageName:T},{id:"234",name:"Lemon",price:"$26.00",imageName:B},{id:"345",name:"Garlic",price:"$26.00",imageName:D}],q=[{id:"1",name:"Himalaya Honey & Cream Soap 125 gm",price:"$2.00",imageName:x},{id:"123",name:"Basil",price:"$26.00",imageName:T},{id:"234",name:"Lemon",price:"$26.00",imageName:B},{id:"345",name:"Garlic",price:"$26.00",imageName:D},{id:"456",name:"Rosemary",price:"$26.00",imageName:G},{id:"567",name:"Chili",price:"$26.00",imageName:K},{id:"678",name:"Delicate",price:"$24.50",imageName:R},{id:"789",name:"Medium",price:"$24.50",imageName:U},{id:"890",name:"Bold",price:"$24.50",imageName:V}];var z={name:"ShoppingCartPage",data(){return{cartItems:Y}}};const J=(0,d.A)(z,[["render",H]]);var Q=J;const W=(0,r.Lk)("h1",null,"Medicines",-1),Z={class:"grid-wrap"},ee=["src","alt"],ae={class:"product-name"},ne={class:"product-price"},te=(0,r.Lk)("button",null,"View Details",-1);function re(e,a,n,t,i,o){return(0,r.uX)(),(0,r.CE)("div",null,[W,(0,r.Lk)("div",Z,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.products,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"product-item",key:e.id},[(0,r.Lk)("img",{src:e.imageName,alt:e.name},null,8,ee),(0,r.Lk)("h3",ae,(0,X.v_)(e.name),1),(0,r.Lk)("p",ne,(0,X.v_)(e.price),1),te])))),128))])])}var ie={name:"MedicinesPage",data(){return{products:q}}};const oe=(0,d.A)(ie,[["render",re]]);var ce=oe;const se={class:"image-wrap"},ue=["src","alt"],le={class:"product-details"},me={class:"product-container"},pe={class:"price"},de=(0,r.Lk)("button",{class:"add-to-cart"},"Add To Cart",-1);function ve(e,a,n,t,i,o){return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",se,[(0,r.Lk)("img",{src:i.product.imageName,alt:i.product.name},null,8,ue),(0,r.Lk)("div",le,[(0,r.Lk)("h1",me,(0,X.v_)(i.product.name),1),(0,r.Lk)("h3",pe,(0,X.v_)(i.product.price),1),de])])])}var ge={name:"MedicineDetailPage",data(){return{product:q.find((e=>e.id===this.$route.params.productId))}}};const fe=(0,d.A)(ge,[["render",ve]]);var he=fe;(0,t.Ef)(k).use(w.aE({history:w.LA("/"),routes:[{path:"/home",component:A},{path:"/cart",component:Q},{path:"/products",component:ce},{path:"/products/:productId",component:he}]})).mount("#app")}},a={};function n(t){var r=a[t];if(void 0!==r)return r.exports;var i=a[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(a,t,r,i){if(!t){var o=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,s=0;s<t.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[s])}))?t.splice(s--,1):(c=!1,i<o&&(o=i));if(c){e.splice(l--,1);var u=r();void 0!==u&&(a=u)}}return a}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,r,i]}}(),function(){n.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(a,{a:a}),a}}(),function(){n.d=function(e,a){for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(a){return 0===e[a]};var a=function(a,t){var r,i,o=t[0],c=t[1],s=t[2],u=0;if(o.some((function(a){return 0!==e[a]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var l=s(n)}for(a&&a(t);u<o.length;u++)i=o[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},t=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(1958)}));t=n.O(t)})();
//# sourceMappingURL=app.11f3735f.js.map