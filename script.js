// Инициализация иконок Lucide после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
