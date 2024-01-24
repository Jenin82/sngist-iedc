import toast from "react-hot-toast";

const TIME = 5 

// Function to fetch data from the server
export async function getData(endpoint: string) {
    const res = await fetch(fetchGateway(endpoint), {
        next: { revalidate: TIME },
    });
    if (!res.ok) {
		toast.error("Failed to fetch data");
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

const baseURL =
    "https://opensheet.elk.sh/1OyCtTyVdYIdm5FqTugfzbOyxQLb2htvjfd9ja42cNoI";
const fetchGateway = (endpoint: string) => {
    return baseURL + endpoint;
};

export const iedcRoutes = {
    execom: "/execom",
    governance: "/governance",
    achievements: "/achievements",
	marquee: "/marquee",
	newsletters: "/newsletters",
    events: "/events",
};
