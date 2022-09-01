import React from 'react';
import PropTypes from 'prop-types';

function SearchResultTable({ items }) {
  return (
    <table>
      <tr>
        <td>아이디</td>
        <td>이름</td>
        <td>나이</td>
      </tr>
      {items.map(({ id, name, age }) => (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      ))}
    </table>
  );
}

SearchResultTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.name,
      age: PropTypes.number,
    })
  ),
};
SearchResultTable.defaultProps = {
  items: [],
};
export default SearchResultTable;
