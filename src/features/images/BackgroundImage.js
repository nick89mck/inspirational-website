import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBackgroundImage, s } from "./imagesSlice";

export const BackgroundImage = () => {
	const { allImages, activeImageIndex } = useSelector(
		(state) => state.images
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBackgroundImage());
	}, [dispatch]);

	return (
		<div className='background-image-container'>
			<img src={allImages[activeImageIndex] + '&auto=format&fit=clip'} alt='' id='background-image' />
		</div>
	)
};

