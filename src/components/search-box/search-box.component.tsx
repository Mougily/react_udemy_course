// import { Component } from "react";
// import "./search-box.styles.css";

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }
// export default SearchBox;

import React, { Component } from "react";
import "./search-box.styles.css";

interface SearchBoxProps {
  className?: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
} // because the search box props are an object, we have to define it as an interface

class SearchBox extends Component<SearchBoxProps> {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;

