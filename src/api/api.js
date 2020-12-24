import axios from "axios";

export const getPizzasAPI = () => {
    return axios.get('http://localhost:3003/pizzas').then(({ data }) => {
        return data;
    })
}