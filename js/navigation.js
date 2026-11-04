export function markCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('a[href]').forEach(link => {
        const destination = link.getAttribute('href').split('#')[0].split('?')[0];
        if (destination.split('/').pop() === currentPage) {
            link.classList.add('current-page');
            link.setAttribute('aria-current', 'page');
        }
    });
}









