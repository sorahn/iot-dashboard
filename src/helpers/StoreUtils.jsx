export function isInBag(bag, id, fields) {
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

export function mergeIntoBag(bag, entities) {
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
