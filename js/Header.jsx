const React = require('react');
const {Link} =require('react-router');
const {func, bool, string} = React.PropTypes;
const { connector } = require('./Store');

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    searchTerm: string,
    showSearch: bool
  },

  handleSearchTermEvent(e) {
    this.props.setSearchTerm(e.target.value);
  },

  render() {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm}
                className='search-input'
                type='text'
                onChange={this.handleSearchTermEvent}
                placeholder='Search' />
    } else {
      utilSpace = <h2 className="header-back">
                      <Link to='/search'>
                        Back
                      </Link>
                    </h2>
    }

    return (
      <header className="header">
          <h1 className="brand">
            <Link to='/' className="brand-link">
              svideo
            </Link>
          </h1>
          {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header);
