import Image from "next/image";
import React from "react";
import styles from "./ImageHolder.module.css";

type Props = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    linkedin?: string;
    role?: string;
};

const ImageHolder = (props: Props) => {
    return (
        <div className="flex flex-col justify-center max-w-fit">
            <div
                className={styles.imageContainer}
                style={{
                    width: props.width || 200,
                    height: props.height || 200,
                }}
            >
                <img
                    src={props.src}
                    width={props.width || 200}
                    height={props.height || 200}
                    alt={props.alt || "profile"}
                    className={styles.image}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 pt-3">
                <h2 className="text-xl font-bold">{props.alt}</h2>
                <h3>{props.role}</h3>
            </div>
            <div className={styles.linkedin} style={{left: (props.width || 200)/2 - 25 }}>
                <Image
                    src="/linkedin.svg"
                    width={50}
                    height={50}
                    alt="linkedin logo"
                    className={styles.logo}
                />
            </div>
        </div>
    );
};

export default ImageHolder;
