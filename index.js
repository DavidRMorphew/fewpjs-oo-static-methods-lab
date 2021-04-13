class Formatter {
  //add static methods here
  static capitalize(string){
    return (string[0].toUpperCase() + string.slice(1))
  };
  static sanitize(){};
  static titleize(sentence){
    const split = sentence.split(" ")
    // return split.forEach(function(el){this.capitalize(el)}).join(" ")
  };
}