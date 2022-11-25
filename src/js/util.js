class Util {
  static isString(str) {
    const letters = /^[A-Za-z]+$/;
    if (str.match(letters)) {
      return true;
    }
    return false;
  }
}
export default Util;