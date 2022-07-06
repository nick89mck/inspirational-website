

export const Goals = () => {
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
					<li className="goal" key={goal.id}>
						<div className="goal-container">
							<div className="text-content">
								<h2>{goal.name}</h2>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}