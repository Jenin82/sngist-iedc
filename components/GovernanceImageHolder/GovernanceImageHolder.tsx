import Image from "next/image";

type Props = {
    image: string;
    name: string;
    designation: string;
};

const GovernanceImageHolder = ({ image, name, designation }: Props) => {
    return (
        <div>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="profile"
						width={200}
						height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default GovernanceImageHolder;
