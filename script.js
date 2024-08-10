let fechar_menu = window.document.querySelector("#fechar_menu");
let abrir_menu = window.document.querySelector("#abrir_menu");
let menu = window.document.querySelector("#menu");

abrir_menu.addEventListener("click", () => {

    setTimeout(() => {
        menu.style.transition = ".9s";
        menu.style.display = "flex";
        abrir_menu.style.opacity = "0";
    }, 100);
}
);

fechar_menu.addEventListener("click", () => {
    
    setTimeout(() => {
        menu.style.transition = ".9s";
        menu.style.display = "none";
        abrir_menu.style.opacity = "1";
    }, 200);
}
);

document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    // Clonar todos os itens e adicioná-los ao final da lista
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carrossel.appendChild(clone);
    });

    // Ajustar a duração da animação com base no número de itens (total de itens após a clonagem)
    const duration = totalItems * 1; // Ajuste a velocidade conforme necessário
    carrossel.style.animationDuration = `${duration}s`;
});
