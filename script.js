// ===== FUNCIONES DE HOVER COMO EL EJEMPLO ===== //
function playSoundAndChangeImage(element, soundFile, newImage) {
    const audio = document.getElementById('hover-audio');
    const source = audio.querySelector('source');
    
    source.src = soundFile;
    audio.load();
    audio.play().catch(e => console.log("Reproducción automática bloqueada:", e));
    
    element.src = newImage;
}

function resetImage(element, originalImage) {
    element.src = originalImage;
}

// ===== BLOQUEO DE ZOOM (mantén tu código existente) ===== //
const viewportMeta = document.querySelector('meta[name="viewport"]');
viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

function enforceZoom() {
    document.body.style.zoom = "100%";
    if (window.devicePixelRatio !== 1) {
        document.body.style.transform = `scale(${1/window.devicePixelRatio})`;
        document.body.style.transformOrigin = '0 0';
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
}

// ===== BLOQUEO GENERAL ===== //
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', (e) => e.preventDefault());
});
document.addEventListener('contextmenu', (e) => e.preventDefault());

// ===== INICIALIZACIÓN ===== //
window.addEventListener('load', enforceZoom);
window.addEventListener('resize', enforceZoom);
