class Formatter {
  //add static methods here
  static capitalize(string){
    return (string[0].toUpperCase() + string.slice(1))
  };
  static sanitize(string){
    const split = string.split("").filter(el => el.match(/[-A-Za-z ']/g));
    return split.join("")
  };
  
  static titleize(sentence){
    const split = sentence.split(" ")
    const articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const capitalizeElement = this.capitalize;
    return split.map((el) => {
        if (split[0] === el){
          return capitalizeElement(el);
        } else if (articles.some(article => article === el)){
          return el;
        } else { 
          return capitalizeElement(el);
        }
    }).join(" ");
  };
}