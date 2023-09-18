export function ordinalEncode(array) {
    /* Ordinal Encoding
      This function takes an array of arrays and encodes each value in the array
      with a unique integer. The function returns an array of arrays with the same
      dimensions as the input array, but with each value encoded as an integer.
    */
    const uniqueValues = [];
    const numColumns = array[0].length;
  
    for (let col = 0; col < numColumns; col++) {
      const valuesInColumn = new Set(array.map((row) => row[col]));
      uniqueValues.push(Array.from(valuesInColumn));
    }
  
    const encodedArray = array.map((row) => {
      const newRow = [];
      for (let col = 0; col < numColumns; col++) {
        const value = row[col];
        const encoding = uniqueValues[col].indexOf(value) + 1;
        newRow.push(encoding);
      }
      return newRow;
    });
  
    return encodedArray;
  }
  