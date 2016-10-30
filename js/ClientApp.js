var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render() {
		return (
			div(null, 
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

var myTitleFact = React.createFactory(MyTitle) 

var MyFirstComponent = (
	div(null, 
		myTitleFact({title: 'props are great!', color: 'red'}),
		myTitleFact({title: 'hello!', color: 'blue'}),
		myTitleFact({title: 'boem!', color: 'black'}),
		myTitleFact({title: 'nu'}),
		myTitleFact(null)
	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
