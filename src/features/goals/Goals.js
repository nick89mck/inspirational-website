import { Goal } from "./Goal"

const Goals = () => {
	const goals = {
		'1': {
			id: '1',
			name: 'Test Goal'
		},
		'2': {
			id: '2',
			name: 'Another goal'
		},
		'3': {
			id: '3',
			name: 'Yet Another'
		}
	
	}

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