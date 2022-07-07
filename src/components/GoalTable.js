import React, {useState} from "react"
import Goals from "../features/goals/Goals"

export const GoalTable = () => {
	const [goalName, setGoalName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		if (goalName.length === 0) {
			return;
		}
		//dispatch addGoal action here
	
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1 className="center">What's the plan for today?</h1>
				<div className="input-section">
					<input
						id="goal-name"
						type="text"
						value={goalName}
						onChange={(e) => setGoalName(e.currentTarget.value)}
					/>
				</div>
				<button className="center">Add</button>
			</form>
			<Goals />
		</div>
	)
}