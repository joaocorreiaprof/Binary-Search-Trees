function sortArray(array) {
  // Remove duplicates by converting the array to a Set, then back to an array
  const uniqueArray = [...new Set(array)];

  return uniqueArray.sort((a, b) => a - b);
}

export default sortArray;
