const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = fruit.filter((fruitName) => {
    return fruitName.toLowerCase().includes(str);
  });
  return results;
}

function searchHandler(e) {
  // TODO
  const inputVal = e.target.value.trim();
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ""; // Clear previous suggestions
  if (results.length > 0) {
    suggestions.style.display = "block"; // Display the suggestion list only if there are results
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      suggestions.appendChild(li);
    });
  } else {
    suggestions.style.display = "none"; // Hide the suggestion list if there are no results
  }
}

function useSuggestion(e) {
  // TODO
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.innerHTML = ""; // Clear suggestions after selecting one
  }
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
