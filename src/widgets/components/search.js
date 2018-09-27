import React from 'react';
import './search.css';
import HandleError from '../../error/containers/handleError';

// function Search(props) {
//   return (
//     formulario
//   )
// }

const Search = (props) => (
  <form 
    className="Search"
    onSubmit={props.handleSubmit}
    >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Search"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search