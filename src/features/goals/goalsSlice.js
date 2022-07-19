import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice(
	{
		name: 'goals',
		initialState: {
			goals: {}
		},
		reducers: {
			addGoal: (state, action) => {
				const {id, name} = action.payload;
				state.goals[id] = {
					id: id,
					name: name,
					isComplete: false
				};
			},
			removeGoal: (state, action) => {
				delete state.goals[action.payload.id];
			},
			completeGoal: (state, action) => {
				const {id} = action.payload;
				state.goals[id] = {
					isComplete: true
				}
			}
		}	
	}
)

export const selectGoals = (state) => state.goals.goals;
export const  { addGoal, removeGoal, completeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;