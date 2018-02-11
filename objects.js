// Objects

function phoneticLookup(val) {
  var result = "";

  
  
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Franklin"
  };
  
  result = lookup[val];
  

  
  return result;
}

// Change this value to test
phoneticLookup("alpha");
