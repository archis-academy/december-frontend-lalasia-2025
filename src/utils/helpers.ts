import type { Basket } from "@/types/types";

const baseURL = "https://674895ea5801f515359188c9.mockapi.io/api/lalasia"

export const fetcher = async (endpoint: string) => {
  const response = await fetch(`${baseURL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// set a value into localstorage
export const setColorStorage = (key: string, value: string): void => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, value);
    return;
  }
  localStorage.setItem(key, value);
}

// add a product into localstorage
export const setBasketStorage = (key: string, value: Basket[]): void => {
  if (!localStorage.getItem(key)) {
    const basket: Basket[] = [];
    localStorage.setItem(key, JSON.stringify(basket));
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
}

// get all products from inside the basket
export const getBasket = (): [] => {

  const basket = localStorage.getItem('basket');
  return basket !== null ? JSON.parse(basket) : [];

}