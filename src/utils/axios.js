import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "https://crudcrud.com/api/b7ff479acb46497e9f550ee35d157433",
    }
);
