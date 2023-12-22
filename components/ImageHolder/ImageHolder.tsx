import Image from "next/image";
import React from "react";
import styles from "./ImageHolder.module.css";
import Link from "next/link";

type Props = {
    src: string;
    linkedin: string;
    alt?: string;
    width?: number;
    height?: number;
    role?: string;
};

const ImageHolder = (props: Props) => {
    return (
        <div className="flex flex-col justify-center max-w-fit">
            <div
                className={`${styles.imageContainer} md:mt-[-3rem]`}
                style={{
                    width: props.width || 200,
                    height: props.height || 200,
                }}
            >
                <Image
                    src={props.src}
                    width={props.width || 200}
                    height={props.height || 200}
                    alt={props.alt || "profile"}
                    className={styles.image}
                />
            </div>
            <div className="flex flex-col mb-auto items-center gap-1 pt-7 max-w-[200px] text-center">
                <h2 className="text-xl font-bold">{props.alt}</h2>
                <h3>{props.role}</h3>
            </div>
            <Link className={styles.linkedin} style={{ left: (props.width || 200) / 2 - 25 }} href={props.linkedin} target="_blank">
                <Image
                    src="/linkedin.svg"
                    width={50}
                    height={50}
                    alt="linkedin logo"
                    className={styles.logo}
                />
            </Link>
        </div>
    );
};

export default ImageHolder;
