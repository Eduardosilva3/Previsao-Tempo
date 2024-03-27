import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather'
    });

const ApiClima = {
    getPrevisaoCity: (city) => {
        return instance.get( `?key=e4a2c875&city_name=${city}`);
    }, 

    getPrevisao: () => {
        return instance.get();
    }
}

export default ApiClima;