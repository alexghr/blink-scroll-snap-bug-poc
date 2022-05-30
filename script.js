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

  function run() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const { intersectionRatio, target } = entry;
        target.style.opacity = String(Math.max(intersectionRatio, 0.5));
        target.style.transform = `translateY(${(1 - intersectionRatio) * 50}px)`
      });
    }, {
      root: viewport,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });

    document.querySelectorAll(".item").forEach(item => observer.observe(item));
  }

  populateContainer(10);
  run();
})();
