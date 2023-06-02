export default function canIterate(item) {
  try {
    if (item[Symbol.iterator]) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

// второй вариант
// export default function canIterate(value) {
//   return Symbol.iterator in Object(value);
// }
