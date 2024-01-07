import Image from "next/image";

type Props = {
    image: string;
    name: string;
    designation: string;
};

const GovernanceImageHolder = ({ image, name, designation }: Props) => {
    return (
        <div>
            <div className="avatar hover:scale-105 transition">
                <div className="w-[16rem] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                    <Image
                        src={image}
                        alt={`picture of ${name}`}
						width={200}
						height={200}
                    />
                </div>
            </div>
			<div className="text-center mt-4">
				<h2 className="text-lg font-bold">{name}</h2>
				<h3 className="text-sm">{designation}</h3>
			</div>
        </div>
    );
};

export default GovernanceImageHolder;