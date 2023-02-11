import React from "react";
import "./search-box-style.css";

class SearchBox extends React.Component {
  // initial state
  state = {};

  render() {
    // destructure variables from props
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
