"use client";

import React from "react";
import toast from "react-hot-toast";

type Props = {
	content: string;
	toast?: string;
}

const Button = (props: Props) => {
	const handleClick = () => {
		if (props.toast) {
			toast.error(props.toast);
		}
	}
    return <div onClick={handleClick}>{props.content}</div>;
};

export default Button;