//your code here!

const infiList = document.getElementById("infi-list");
const totalItems = 10; // Total items to load initially
const itemsPerLoad = 2; // Number of items to load on scroll

// Function to create and append a new list item
function createListItem(index) {
  const li = document.createElement("li");
  li.textContent = `List Item ${index}`;
  return li;
}

// Function to add more items on scroll
function addMoreItems() {
  for (let i = 0; i < itemsPerLoad; i++) {
    const newIndex = totalItems + i + 1;
    infiList.appendChild(createListItem(newIndex));
  }
  totalItems += itemsPerLoad;
}

// Initialize by adding the initial set of list items
for (let i = 1; i <= totalItems; i++) {
  infiList.appendChild(createListItem(i));
}

// Listen for scroll events and trigger adding more items when needed
infiList.addEventListener("scroll", function () {
  const isAtBottom = infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;
  if (isAtBottom) {
    addMoreItems();
  }
});

