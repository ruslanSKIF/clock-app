import './ClockStyles.css'
import './ScriptJs.js'

function ClockHtml() {
	return (
		<div className = "clock-wrapper">
			<div className = "clock">
				<div className = "clock-face">
					<div className="hand second-hand"></div>
					<div className="hand minute-hand"></div>
					<div className="hand hour-hand"></div>
				</div>
			</div>
		</div>
	)
}

export default ClockHtml;