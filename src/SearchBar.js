import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="col-md-12 mt-3">
        <form onSubmit={this.onFormSubmit}>
          <div className="d-flex justify-content-between outer-search">
            <h2>
              <span>S</span>TUBE
            </h2>
            <div className="form-group d-flex justify-content-end">
              <input
                type="text"
                className="form-control"
                id="search"
                value={this.state.term}
                onChange={this.onInputChange}
                placeholder="search..."
              />
              <button className="searchBtn" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
