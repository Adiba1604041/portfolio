(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navLinks = document.querySelector('.nav-links');

  const storedTheme = localStorage.getItem('portfolio-theme');
  if (storedTheme) root.dataset.theme = storedTheme;
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.dataset.theme = 'dark';

  const updateThemeIcon = () => {
    if (!themeButton) return;
    themeButton.textContent = root.dataset.theme === 'dark' ? '☀' : '☾';
    themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Use light mode' : 'Use dark mode');
  };
  updateThemeIcon();

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    updateThemeIcon();
  });

  menuButton?.addEventListener('click', () => navLinks?.classList.toggle('open'));
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if ((page === '' || page === 'index.html') && href === 'index.html') a.classList.add('active');
    else if (href === page) a.classList.add('active');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Publication/project filtering.
  const search = document.querySelector('[data-search]');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-item]');
  let currentFilter = 'all';
  const applyFilters = () => {
    const q = (search?.value || '').toLowerCase().trim();
    items.forEach(item => {
      const category = item.dataset.category || '';
      const text = item.textContent.toLowerCase();
      const categoryMatch = currentFilter === 'all' || category.split(' ').includes(currentFilter);
      const textMatch = !q || text.includes(q);
      item.classList.toggle('hidden', !(categoryMatch && textMatch));
    });
  };
  search?.addEventListener('input', applyFilters);
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilters();
  }));

  // Contact form opens the user's email client; no backend required.
  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent(`Name: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}\n\n${data.get('message') || ''}`);
    location.href = `mailto:hossainadiba123@gmail.com?subject=${subject}&body=${body}`;
  });
})();
