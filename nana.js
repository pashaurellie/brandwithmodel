// Toggle dropdown menu
document.querySelectorAll('.toggle-dropdown').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah link default
      const dropdownMenu = this.closest('.dropdown').querySelector('ul');
      dropdownMenu.classList.toggle('hidden');
      dropdownMenu.classList.toggle('show');
  });
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
  const dropdownMenus = document.querySelectorAll('.dropdown ul');
  dropdownMenus.forEach(menu => {
      if (!menu.previousElementSibling.contains(event.target) && !menu.contains(event.target)) {
          menu.classList.add('hidden');
          menu.classList.remove('show');
      }
  });
});
