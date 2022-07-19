import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice(
	{
		name: 'images',
		initialState: {
			activeImage: {},
			allImages : []
		},
		reducers: {
			getAllImages: (state, action) => {
				state.allImages = action.payload;
			},
			setActiveImage: (state, action) => {
				state.activeImage = action.payload
			}
		}
	}
)

export const selectActiveImage = (state) => state.images.activeImage;
export const selectAllImages = (state) => state.images.allImages
export const { getAllImages, setActiveImage } = imagesSlice.actions

export default imagesSlice.reducer;