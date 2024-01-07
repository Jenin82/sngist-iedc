import Newscard from "@/components/Newscard/Newscard";
import { getData, iedcRoutes } from "@/services/Endpoints";

interface NewsData {
	date: string;
	image: string;
	link: string;
}

export default async function Page() {
	const data: NewsData[] = await getData(iedcRoutes.newsletters);
    return (
        <div className="p-20 bg-base-200">
            <div>
                <h1 className="text-4xl font-bold text-center p-5">
                    Newsletters
                </h1>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
                {data.map((News) => (
                    <Newscard
                        key={News.date}
                        {...News}
                    />
                ))}
            </div>
        </div>
    );
};