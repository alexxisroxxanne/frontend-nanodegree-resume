// create a function alphabetizer(names) that takes in an array
// of names of length N and returns an alphabetized array of names
// in lastname, firstname format


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
//    var finalName = oldName;
//    var names = oldName.split(" "); // making copy variable
//    names[1] = names[1].toUpperCase(); // changes value of this
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
//    return finalName;
/*  for (name in names)
  {

    var newName = name;
    newName.split(" ");
    newName.reverse();
    newName.join(", ");
    return newName;

    var newName = name.split(" ") + name.reverse() + name.join(", ");
    return newName;
  }
*/

   var alphabetized;
  function organize(name)
  {
    var newName = name;
    //   console.log(newName);
    newName = name.split(" ");
    newName = newName.reverse();
    newName = newName.join(", ");
    console.log(newName);
    return newName;
  }

  alphabetized = names.every(organize);
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));