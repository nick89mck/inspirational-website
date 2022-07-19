import React, {useState} from "react"
import Goals from "../features/goals/Goals"
import { addGoal } from "../features/goals/goalsSlice"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid'

export const GoalTable = () => {
	const [goalName, setGoalName] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (goalName.length === 0) {
			return;
		}
		//dispatch addGoal action here
		dispatch(addGoal(
			{
				id: uuidv4(),
				name: goalName
			}
		)
		)
		setGoalName('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1 className="center">What's the plan for today?</h1>
				<div className="input-section">
					<input
						className="goal-input"
						type="text"
						value={goalName}
						onChange={(e) => setGoalName(e.currentTarget.value)}
					/>
				</div>
				<input type='submit' className="goal-add" />
			</form>
			<Goals />
		</div>
	)
}