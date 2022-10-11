import React from "react";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSongProps: ""
    };
  }

  handleSearchChange = (event) =>
    this.setState({ searchSongProps: event.target.value });
    
  render() {
    const { startSearch } = this.props;
    const { searchSongProps } = this.state;

    return (
      <div>
        <div>
          <input
            type=""
            value={searchSongProps}
            placeholder="Search..."
            onChange={this.handleSearchChange}
          />
          <button onClick={() => startSearch(searchSongProps)}>
            <i>search</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
