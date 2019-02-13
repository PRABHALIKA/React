import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Counters from './Components/Counters';

class App extends Component {
	state = {
		counters: [ { id: 1, value: 0 }, { id: 2, value: 2 }, { id: 3, value: 0 }, { id: 4, value: 0 } ]
	};
	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDcrement}
					/>
				</main>
			</React.Fragment>
		);
	}

	handleReset = () => {
		const counters = [ ...this.state.counters ];
		counters.map((c) => (c.value = 0));
		this.setState({ counters });
	};

	handleDelete = (id) => {
		const counters = this.state.counters.filter((c) => c.id !== id);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};
}

export default App;
