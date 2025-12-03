import axios from "axios";

const url = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: url
});

export const formatCurrency = (price) => {
    const dollasAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2));
    return dollasAmount
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};