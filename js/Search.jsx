const React = require('react');
const ShowCard = require('./ShowCard');
const {object } = React.PropTypes;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value });
  }

  render () {
      return (
        <div className='container'>
      <header className='header'>
        <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm}
                className='search-input'
                type='text'
                onChange={this.handleSearchTermEvent}
                placeholder='Search' />
        </header>
      <div className='shows'>
        {this.props.route.shows
          .filter((show) => `${show.title} ${show.description}`.toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((show) => {
          return <ShowCard {...show} key={show.imdbID} />
        })}
      </div>
    </div>
  )}
};

Search.propTypes = {
  route: object
}

module.exports = Search;
