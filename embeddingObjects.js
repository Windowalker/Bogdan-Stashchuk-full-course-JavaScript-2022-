const myCity = {
  city: "New York",
  info: {
    isPopular: true, // embedding objects
    country: "USA", // embedding objects
  },
};
console.log(myCity.info.isPopular); //access to the true through myCity,info,isPopular==true
delete myCity.info["isPopular"]; // bracket notation(try to use dot notation when its just a string.)
console.log(myCity); // bracket notation i should to use only for expressions, such as the name of a variable
