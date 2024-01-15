import { getData, iedcRoutes } from "@/services/Endpoints";
import "./Marquee.css";

interface MarqueeData {
	image: string;
	alt: string;
	order: string;
}

export default async function Marquee() {
    const data: MarqueeData[] = await getData(iedcRoutes.marquee);
    return (
        <div className="width-full py-2">
            <div className="imageBody">
                <div id="grid-container-image">
                    <div className="gridImage">
                        <div className="rowImage forward">
                            {data
                                .filter((marquee) => marquee.order === "1")
                                .map((marquee) => (
                                    <div
                                        className="boxImage rounded-full"
                                        key={marquee.image}
                                    >
                                        <img
                                            src={marquee.image}
                                            alt={marquee.alt}
                                        />
                                    </div>
                                ))}
                            {data
                                .filter((marquee) => marquee.order === "1")
                                .map((marquee) => (
                                    <div
                                        className="boxImage rounded-full"
                                        key={marquee.image}
                                    >
                                        <img
                                            src={marquee.image}
                                            alt={marquee.alt}
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="rowImage backward">
                            {data
                                .filter((marquee) => marquee.order === "2")
                                .map((marquee) => (
                                    <div
                                        className="boxImage rounded-full"
                                        key={marquee.image}
                                    >
                                        <img
                                            src={marquee.image}
                                            alt={marquee.alt}
                                        />
                                    </div>
                                ))}
                            {data
                                .filter((marquee) => marquee.order === "2")
                                .map((marquee) => (
                                    <div
                                        className="boxImage rounded-full"
                                        key={marquee.image}
                                    >
                                        <img
                                            src={marquee.image}
                                            alt={marquee.alt}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};