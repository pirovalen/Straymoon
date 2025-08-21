(() => {
  const setNavOffset = () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    document.documentElement.style.setProperty('--nav-h', `${Math.ceil(nav.offsetHeight)}px`);
  };
  setNavOffset();                               // inicial
  window.addEventListener('DOMContentLoaded', setNavOffset);
  window.addEventListener('load', setNavOffset);
  window.addEventListener('resize', setNavOffset);
})();
