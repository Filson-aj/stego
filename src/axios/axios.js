import axios from "axios";

import { URL_LOCAL, URL_PRO } from "../Assets/constants/data";

const url = process.env.NODE_ENV === 'development' ? URL_LOCAL : URL_PRO;

const unauthaxios = axios.create({
    baseURL: url,
});

export default unauthaxios;