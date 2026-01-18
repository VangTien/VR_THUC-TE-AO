const models = {
    lysosome: { vi: "Tiêu thể Lysosome", en: "Lysosome Organelle", img: "image/lysosome.webp", fileName: "lysosome" },
    skeleton: { vi: "Bộ xương người", en: "Human Skeleton", img: "image/skeleton.webp", fileName: "skeleton" },
    h2o: { vi: "Phân tử Nước (H2O)", en: "H2O Molecule", img: "image/h2o.webp", fileName: "h2o" },
    black_hole: { vi: "Hố đen vũ trụ", en: "Cosmic Black Hole", img: "image/black-hole.webp", fileName: "black_hole" },
    jupiter: { vi: "Sao Mộc", en: "Planet Jupiter", img: "image/jupiter.webp", fileName: "jupiter" },
    archaea: { vi: "Vi khuẩn cổ", en: "Archaea Bacteria", img: "image/Archaea.webp", fileName: "archaea" },
    atomic_models: { vi: "Mô hình nguyên tử", en: "Atomic Models", img: "image/Atomic-Models.webp", fileName: "atomic_models" },
    distillation_montage: { vi: "Hệ thống chưng cất", en: "Distillation System", img: "image/Distillation-montage.webp", fileName: "distillation_-_montage" },
    fluorine_atom: { vi: "Nguyên tử Flo", en: "Fluorine Atom", img: "image/Fluorine-Atom.webp", fileName: "fluorine_atom" },
    knee_anatomy: { vi: "Giải phẫu đầu gối", en: "Knee Anatomy", img: "image/Knee-Anatomy-Model.webp", fileName: "knee_anatomy" },
    laboratory_glasswares: { vi: "Dụng cụ phòng thí nghiệm", en: "Lab Glasswares", img: "image/Laboratory-Glasswares-Pack.webp", fileName: "laboratory_glasswares_pack" },
    frog_life_cycle: { vi: "Vòng đời của ếch", en: "Frog Life Cycle", img: "image/Life-Cycle-of-a-Frog.webp", fileName: "life_cycle_of_a_frog" },
    neptune: { vi: "Sao Hải Vương", en: "Planet Neptune", img: "image/neptune.webp", fileName: "neptune" },
    uranus: { vi: "Sao Thiên Vương", en: "Planet Uranus", img: "image/uranus.webp", fileName: "uranus" },
    moon: { vi: "Mặt trăng", en: "The Moon", img: "image/The-Moon-Sharp.webp", fileName: "the_moon_sharp" },
    valence_electrons: { vi: "Electron hóa trị", en: "Valence Electrons", img: "image/Valence-Electrons.webp", fileName: "valence_electrons" },
    venus_lamp: { vi: "Đèn ngủ Sao Kim", en: "Venus Planet Lamp", img: "image/Venus-Planet-Bedside-Lamp.webp", fileName: "venus_planet_bedside_lamp" },
    stereomatria: { vi: "Hình học không gian", en: "Stereomatria Geometry", img: "image/stereomatria.webp", fileName: "stereomatria" },
    osteoporosis: { vi: "Tín hiệu loãng xương", en: "Osteoporosis Signaling", img: "image/Molecular-Signaling-Of-Osteoporosis.webp", fileName: "molecular_signaling_of_osteoporosis" },
    planes_satellites: { vi: "Máy bay & Vệ tinh", en: "Planes & Satellites", img: "image/Of-Planes-and-Satellites.webp", fileName: "of_planes_and_satellites" },
    organelle_dynamics: { vi: "Động lực học bào quan", en: "Organelle Dynamics", img: "image/Organelle-Dynamics.webp", fileName: "organelle_dynamics" },
    physics_organelle: { vi: "Mã vật lý bào quan", en: "Physics Organelle Codes", img: "image/Physics-Organelle-Building-Codes.webp", fileName: "physics_-_organelle_building_codes" },
    mhd_simulation: { vi: "Mô phỏng MHD Sao", en: "MHD Simulation Star", img: "image/MHD-simulation-of-a-star-with-a-hot Jupiter.webp", fileName: "mhd_simulation_of_a_star_with_a_hot_jupiter" },
    chemistry_molecule: { vi: "Phân tử hóa học", en: "Chemistry Molecule", img: "image/A-Molecule-Chemistry.webp", fileName: "a_molecule_chemistry" }
};

const uiText = {
    vi: { title: "AR Mô Phỏng Thực Tế Ảo", sub: "Khám phá tri thức qua không gian 3D trực quan", search: "Tìm kiếm mô hình...", btn: "Xem AR", footer: "© 2026 • AR Learning • Ngọc Tiến & Đăng Khoa", alert: "Vui lòng dùng thiết bị di động để xem AR!" },
    en: { title: "AR Reality Simulation", sub: "Explore knowledge via intuitive 3D space", search: "Search models...", btn: "View AR", footer: "© 2026 • AR Learning • Ngoc Tien & Dang Khoa", alert: "Please use a mobile device to view AR!" }
};

let state = { lang: localStorage.getItem('lang') || 'vi', theme: localStorage.getItem('theme') || 'light' };

function initApp() {
    document.body.setAttribute('data-theme', state.theme);
    const container = document.getElementById('ar-container');
    
    container.innerHTML = Object.keys(models).map(key => `
        <div class="ar-card" data-id="${key}">
            <div class="img-box">
                <div class="skeleton-loader" id="skel-${key}"></div>
                <img src="${models[key].img}" class="card-img" id="img-${key}" onload="onImgLoad('${key}')" alt="${key}">
            </div>
            <div class="card-body">
                <h3 id="h3-${key}">${models[key][state.lang]}</h3>
                <button class="btn-ar" onclick="openAR('${key}')" id="btn-${key}">${uiText[state.lang].btn}</button>
            </div>
        </div>
    `).join('');
    
    updateUI();
}

function onImgLoad(key) {
    const skel = document.getElementById(`skel-${key}`);
    const img = document.getElementById(`img-${key}`);
    if(skel) skel.style.display = 'none';
    if(img) img.style.opacity = '1';
}

function updateUI() {
    const lang = state.lang;
    document.getElementById('main-title').innerText = uiText[lang].title;
    document.getElementById('sub-title').innerText = uiText[lang].sub;
    document.getElementById('search-input').placeholder = uiText[lang].search;
    document.getElementById('footer-text').innerText = uiText[lang].footer;
    document.getElementById('theme-btn').innerHTML = state.theme === 'dark' ? '☀️' : '🌙';
    
    Object.keys(models).forEach(key => {
        const h3 = document.getElementById(`h3-${key}`);
        const btn = document.getElementById(`btn-${key}`);
        if(h3) h3.innerText = models[key][lang];
        if(btn) btn.innerText = uiText[lang].btn;
    });
    
    document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.style.transform = 'scale(0.7)';
    setTimeout(() => {
        themeBtn.innerHTML = state.theme === 'dark' ? '☀️' : '🌙';
        themeBtn.style.transform = 'scale(1)';
    }, 150);
}

function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
}

function filterModels() {
    const query = document.getElementById('search-input').value.toLowerCase();
    document.querySelectorAll('.ar-card').forEach(card => {
        const id = card.getAttribute('data-id');
        const match = models[id].vi.toLowerCase().includes(query) || models[id].en.toLowerCase().includes(query);
        card.classList.toggle('hidden', !match);
    });
}

function openAR(name) {
    const fileName = models[name].fileName;
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) {
        window.location.href = `${fileName}.usdz`;
    } else if (/Android/i.test(navigator.userAgent)) {
        window.location.href = `intent://arvr.google.com/scene-viewer/1.0?file=${location.origin}/${fileName}.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;end;`;
    } else {
        alert(uiText[state.lang].alert);
    }
}

document.addEventListener('DOMContentLoaded', initApp);