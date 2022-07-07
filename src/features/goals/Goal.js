
export const Goal = (props) => {
	const id = props.id;
	const name = props.name
	
	return (
		<li className="goal" key={id}>
			<div className="goal-container">
				<div className="text-content">
					<h2>{name}</h2>
				</div>
			</div>
		</li>
	)
}