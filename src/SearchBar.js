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
        <div className="card search">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="search">Search Video</label>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
