let headLinks = document.querySelectorAll(`.head_links`);

headLinks.forEach(link => {
    link.addEventListener('click', () => {
        headLinks.forEach(link=>{
            link.style.color='grey';
        })
        link.style.color = 'black';
    });
});