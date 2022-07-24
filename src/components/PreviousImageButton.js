import React from "react";
import { useDispatch } from "react-redux";
import { switchToPreviousImage } from "../features/images/imagesSlice";

export const PreviousImageButton = () => {
	const dispatch = useDispatch();

	return (
		<button
			aria-label="Switch to previous wallpaper"
			onClick={()=> {
				dispatch(switchToPreviousImage())
			}}
		>
			{'<'}
		</button>
	)
}