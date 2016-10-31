const React = require('react');
const ReactDOM = require('react-dom');

const MyTitle = require('./MyTitle');

const MyFirstComponent = () => {
	return (
			<div>
					<MyTitle title='props are amazing!' color='red' />
					<MyTitle title='hello!' color='blue' />
					<MyTitle title='boem!' color='black' />
					<MyTitle title='nu' />
					<MyTitle />
			</div>
		)
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
