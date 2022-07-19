import { removeGoal, completeGoal } from "./goalsSlice";
import { useDispatch } from "react-redux";


export const Goal = (props) => {
	const id = props.id;
	const name = props.name
	const dispatch = useDispatch() // must be called and defined and highest level of Component

	const handleRemove = (e) => {
		const idToRemove = e.target.value
		dispatch(removeGoal(idToRemove))
		//dispatch remove goal action here that removes goal via filtering id
		//based off e.target.value (which is set to the id)
	}

	const handleComplete = (e) => {
		const idToComplete = e.target.value;
		dispatch(completeGoal(idToComplete))
		// dispatch goal completion action
	}
	
	return (
		<li className="goal" key={id}>
			<div className="goal-container">
				<div className="text-content">
					<h2>{name}</h2>
				</div>
				<div id="goal-buttons">
					<button
						className="goal-complete"
						value = {id}
						onClick={handleComplete}
					>
					Complete
					</button>
					<button
						className="goal-remove"
						value = {id}
						onClick={handleRemove}
					>
					Remove
					</button>
				</div>
			</div>
		</li>
	)
}