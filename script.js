// Function to shuffle an array randomly
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  // Function to divide the names into groups
  function divideIntoGroups(names, numGroups) {
    var groups = [];
    var shuffledNames = shuffleArray(names.slice()); // Make a copy and shuffle it
  
    // Distribute names evenly into groups
    while (shuffledNames.length > 0) {
      for (var i = 0; i < numGroups; i++) {
        if (!groups[i]) {
          groups[i] = [];
        }
  
        var name = shuffledNames.pop();
        if (name) {
          groups[i].push(name);
        }
      }
    }
  
    return groups;
  }
  
  // Function to retrieve names from input and validate
  function getNamesFromInput() {
    var nameInput = document.getElementById("nameInput");
    var namesString = nameInput.value.trim();
  
    if (namesString === "") {
      alert("Please enter names separated by commas.");
      return null;
    }
  
    var names = namesString.split(",").map(function(name) {
      return name.trim();
    });
  
    return names;
  }
  
  // Generate groups and display them on the webpage
  function generateGroups() {
    var names = getNamesFromInput();
    if (!names) {
      return;
    }
  
    var numGroups = 4; // Number of groups
  
    var groups = divideIntoGroups(names, numGroups);
  
    var groupContainer = document.getElementById("groupContainer");
    groupContainer.innerHTML = ""; // Clear previous groups
  
    for (var i = 0; i < numGroups; i++) {
      var groupDiv = document.createElement("div");
      groupDiv.classList.add("group");
      groupDiv.innerHTML = "<h3>Group " + (i + 1) + "</h3>";
  
      var namesList = document.createElement("ul");
      for (var j = 0; j < groups[i].length; j++) {
        var nameItem = document.createElement("li");
        nameItem.textContent = groups[i][j];
        namesList.appendChild(nameItem);
      }
  
      groupDiv.appendChild(namesList);
      groupContainer.appendChild(groupDiv);
    }
  }
  
  // Generate groups when the page loads
  window.onload = function() {
    var generateButton = document.querySelector("button");
    generateButton.addEventListener("click", generateGroups);
  };
  