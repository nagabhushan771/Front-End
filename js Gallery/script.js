const panels = document.querySelectorAll('.panel');

panels.forEach((panel, i) => {
    panel.addEventListener('click', () => {
        expand(i);
    });
});

var expand = (ind) => {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });

    panels[ind].classList.add('active');
}
