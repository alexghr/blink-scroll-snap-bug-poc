(function() {
  'use strict';

  const viewport = document.querySelector(".viewport");
  const container = document.querySelector(".container");

  function populateContainer(itemCount = 10) {
    for (let i = 1; i <= itemCount; i++) {
      const item = document.createElement("div");
      item.className = "item";
      item.textContent = `item #${i}`;

      container.appendChild(item);
    }
  }

  populateContainer(10);
})();
