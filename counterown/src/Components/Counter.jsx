import React, { Component } from 'react';
class Counter extends Component {
	render() {
		return (
			<div>
				<span className={this.getBadgeName()}>{this.formatCount()}</span>

				<button
					className="btn btn-secondary btn-sm m-2"
					onClick={() => this.props.handleIncrementClick(this.props.counters)}
				>
					+
				</button>
				<button
					className="btn btn-secondary btn-sm m-2"
					onClick={() => this.props.handleDcrementClick(this.props.counters)}
					disabled={this.props.counters.value === 0 ? 'disabled' : ''}
				>
					-
				</button>
				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => this.props.handleDeleteClick(this.props.counters.id)}
				>
					Delete
				</button>
			</div>
		);
	}

	getBadgeName() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counters.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value } = this.props.counters;
		return value === 0 ? 'zero' : value;
	}
}

export default Counter;
