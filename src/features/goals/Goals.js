import { Goal } from "./Goal"
import { selectGoals } from "./goalsSlice"
import { useSelector } from "react-redux";

const Goals = () => {
	const goals = useSelector(selectGoals)

	return (
		<div>
			<ul className="goals-list">
				{ Object.values(goals).map((goal) => (
					<Goal
						id={goal.id}
						name={goal.name}
						key={goal.id}
					/>					
				))}
			</ul>
		</div>
	)
}

export default Goals