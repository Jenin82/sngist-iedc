const baseURL =
    "https://opensheet.elk.sh/1OyCtTyVdYIdm5FqTugfzbOyxQLb2htvjfd9ja42cNoI";

export const fetchGateway = (endpoint: string) => {
    return baseURL + endpoint;
};

export const iedcRoutes = {
    execom: "/execom",
    governance: "/governance",
    achievements: "/achievements",
};
