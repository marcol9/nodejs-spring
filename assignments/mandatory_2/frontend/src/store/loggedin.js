import { writable } from "svelte/store";

export const loggedin = writable(false);

export const cart = writable(
    localStorage.cart? JSON.parse(localStorage.cart) : []);
    cart.subscribe(val => localStorage.setItem("cart",JSON.stringify(val)))

