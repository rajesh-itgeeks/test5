export function transformFieldsToObject(fields) {
  return fields.reduce((acc, field) => {
    acc[field.key] = field.value;
    return acc;
  }, {});
}

export function transformFieldsImage(fields) {
  return fields.reduce((acc, field) => {
    acc[field.key] = field?.reference?.image?.url;
    return acc;
  }, {});
}

export function getValueByKey(data, key) {
  // Iterate over the nodes
  try {
    for (let node of data?.metaobjects?.nodes) {
      // Iterate over the fields in each node
      for (let field of node?.fields) {
        // Check if the key of the current field matches the desired key
        if (field?.key === key) {
          // If a match is found, return the value
          return field?.value;
        }
      }
    }
  } catch (ex) {
    console.error("error", ex);
  }

  // If no match is found, return null or some default value
  return null;
}
