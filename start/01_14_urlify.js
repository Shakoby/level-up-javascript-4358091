// Write your code here
//string to url
//remove symbols
//spaces replace by -
//all letters lowercase
//remove spaces in start and end

let testStr = 'The @Title" Blog!'

function urlified(str) {
  const remove = /[@.,/#!$%^&*;:{}=!\-_`~()'"]/g;

  const removedSpecialChars = str.replace(remove, '');
  const final = removedSpecialChars.toLowerCase().trim().replaceAll(" ", "-");
  console.log(final);
}

urlified(testStr);
urlified("How I Got Into Programming!!!");
urlified("I've got a new job :)");