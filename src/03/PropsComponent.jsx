import React from 'react';
import PropTypes from 'prop-types';



function PropsComponent({name}) {
  return (
    <div>
      {name}
    </div>
  );
}
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;