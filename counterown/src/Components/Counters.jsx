import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 1 }
		]
	};
	render() {
		return (
			<div>
				<button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>
					Reset
				</button>
				{this.state.counters.map((c) => (
					<Counter
						counters={c}
						handleDeleteClick={this.OnDelete}
						handleIncrementClick={this.OnIncrement}
						handleDcrementClick={this.OnDecrement}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
