document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const parentItem = header.parentElement;
      const content = parentItem.querySelector(".accordion-content");
      const isExpanded = parentItem.classList.contains("active");

      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active");
        const itemContent = item.querySelector(".accordion-content");
        if (itemContent) {
          itemContent.style.display = "none";
        }
      });

      if (!isExpanded) {
        parentItem.classList.add("active");
        content.style.display = "block";
      }
    });
  });
});