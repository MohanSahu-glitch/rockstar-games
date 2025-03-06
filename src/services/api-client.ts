import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '8517945e23284a4bb44def2f16a7e8ca',
  },
});
