import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

function ActionComponent({
  setLoading,
  resetLoading,
  setUser,
  setCollection,
  setAge,
}) {
  const collection = [
    { id: 21, name: 'Jane', age: 18 },
    { id: 4, name: 'Park', age: 22 },
    { id: 5, name: 'Paul', age: 40 },
  ];
  return (
    <>
      <Button onPress={() => setLoading(true)}>setLoading</Button>
      <Button onPress={() => resetLoading()}>resetLoading</Button>
      <Button onPress={() => setCollection(collection)}>setCollection</Button>
      <Button onPress={() => setUser({name:'Park', age:20})}>setUser</Button>
      <Button onPress={() => setAge(2, 55)}>setAge</Button>
    </>
  );
}

ActionComponent.propTypes = {
  setLoading: PropTypes.func,
  resetLoading: PropTypes.func,
  setCollection: PropTypes.func,
  setUser: PropTypes.func,
  setAge: PropTypes.func,
};

export default ActionComponent;
