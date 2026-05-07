document.addEventListener('DOMContentLoaded', function () {
  const yearElements = document.querySelectorAll('#currentYear');
  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
});
