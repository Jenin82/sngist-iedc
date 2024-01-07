import axios from "axios";

export const privateGateway = axios.create({
    baseURL:
        "https://opensheet.elk.sh/1OyCtTyVdYIdm5FqTugfzbOyxQLb2htvjfd9ja42cNoI",
    headers: {
        "Content-Type": "application/json",
    },
});

