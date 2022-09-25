class StringUtils {

  /**
   * Generate and return random string - by default of 5 length
   * @param length 
   * @returns 
   */
  randomString(length: number = 5) {
    const characters =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    const charLength = characters.length;
    for (let i = 1; i <= length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return output;
  }

}

export default new StringUtils();
