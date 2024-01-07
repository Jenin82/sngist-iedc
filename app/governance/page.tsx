import GovernanceImageHolder from "@/components/GovernanceImageHolder/GovernanceImageHolder";
import ImageHolder from "@/components/ImageHolder/ImageHolder";
import { getData, iedcRoutes } from "@/services/Endpoints";

export default async function Page() {
    const data: GovernanceData[] = await getData(iedcRoutes.governance);

    return (
        <div className="p-16 lg:px-36 md:px-10">
            <h1 className="text-4xl font-bold text-center pt-8">
                GOVERNING BODY
            </h1>
            <div className="mt-10 px-10 items-center flex flex-col">
                <div className="width-full">
                    {data
                        .filter((data) => data.designation === "PRINCIPAL")
                        .map((data) => (
                            <GovernanceImageHolder key={data.image} {...data} />
                        ))}
                </div>
                <div className="flex justify-center items-baseline flex-wrap md:flex-row md:my-10 gap-10">
                    {data
                        .filter((data) => data.designation === "NODAL OFFICER")
                        .map((data) => (
                            <GovernanceImageHolder key={data.image} {...data} />
                        ))}
                </div>

                <div className="flex justify-center flex-wrap gap-10 mt-4 md:flex-row">
                    {data
                        .filter(
                            (data) => data.designation === "FACULTY COORDINATOR"
                        )
                        .map((data) => (
                            <GovernanceImageHolder key={data.image} {...data} />
                        ))}
                </div>
            </div>
        </div>
    );
}
