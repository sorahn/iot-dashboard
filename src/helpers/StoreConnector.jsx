import React from 'react';

function mergeIntoBag(bag, entities) {
  for (let id in entities) {
    if (!entities.hasOwnProperty(id)) {
      continue;
    }

    if (!bag.hasOwnProperty(id)) {
      bag[id] = entities[id];
    } else if (!shallowEqual(bag[id], entities[id])) {
      bag[id] = Object.assign({}, bag[id], entities[id]);
    }
  }
}

function isInBag(bag, id, fields) {
  let item = bag[id];
  if (!bag[id]) {
    return false;
  }

  if (fields) {
    return fields.every(field => item.hasOwnProperty(field));
  } else {
    return true;
  }
}

export class StoreUtils extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onStoreUpdate = this.onStoreUpdate.bind(this);
  }

  onStoreUpdate() {
    
    mergeIntoBag(state, entities)
  }

  render() {
    return (
      <div></div>
    );
  }
}

export const isInBag;
export const mergeIntoBag;
