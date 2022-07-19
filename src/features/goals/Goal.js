
export const Goal = (props) => {
	const id = props.id;
	const name = props.name

	const handleRemove = (e) => {
		//dispatch remove goal action here that removes goal via filtering id
		//based off e.target.id ?
	}

	const handleComplete = (e) => {
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
						onClick={handleComplete}
					>
					Complete
					</button>
					<button
						className="goal-remove"
						onClick={handleRemove}
					>
					Remove
					</button>
				</div>
			</div>
		</li>
	)
}