import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import unsplashApi from "../../api/unsplash";

export const getBackgroundImage = createAsyncThunk(
	'images/getImage',
	unsplashApi.getImage
)

const imagesSlice = createSlice(
	{
		name: 'images',
		initialState: {
			activeImageIndex: 0,
			allImages : []
		},
		reducers: {
			switchToNextImage: (state) => {
				state.activeImageIndex = (state.activeImageIndex + 1) % state.allImages.length;
			},
			switchToPreviousImage: (state) => {
				let newIndex = state.activeImageIndex - 1;
				if (newIndex < 0) {
					newIndex = state.allImages.length - 1;
				}

				state.activeImageIndex = newIndex;
			}
		},
		extraReducers: {
			[getBackgroundImage.fulfilled]: (state, action) => {
				state.allImages = action.payload;
				state.activeImageIndex = 0;
			}
		}
	}
)

export const selectActiveImage = (state) => state.images.activeImage;
export const selectAllImages = (state) => state.images.allImages
export const { switchToNextImage, switchToPreviousImage } = imagesSlice.actions

export default imagesSlice.reducer;