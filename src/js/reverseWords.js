function reverseWords(str) {
  if (!str || str.trim() === "") {
    return "";
  }
  return str.trim().split(/\s+/).reverse().join(' ');
}

export default reverseWords;