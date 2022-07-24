import React from "react";
import { useDispatch } from "react-redux";
import { switchToNextImage } from "../features/images/imagesSlice";

export const NextImageButton = () => {
	const dispatch = useDispatch();

	return (
		<button
			aria-label="Switch to next wallpaper"
			onClick={()=> {
				dispatch(switchToNextImage())
			}}
		>
			{'>'}
		</button>
	)
}