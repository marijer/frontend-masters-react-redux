const React = require('react');
const ShowCard = require('./ShowCard');
const Header = require('./Header');
const {object } = React.PropTypes;

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm });
  }

  render () {
      return (
        <div className='container'>
        <Header 
          handleSearchTermChange={this.handleSearchTermChange} 
          search={this.state.searchTerm}  
          showSearch={true} 
        />
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
