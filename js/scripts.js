
console.log("LARI.OS iniciado com sucesso!");

// ======================================
// ELEMENTOS PRINCIPAIS
// ======================================

const bootScreen = document.querySelector("#boot-screen");
const desktop = document.querySelector("#desktop");

const startButton = document.querySelector("#start-button");
const startMenu = document.querySelector("#start-menu");

const searchInput = document.querySelector("#app-search");
const windowArea = document.querySelector("#window-area");

const taskbarApps = document.querySelector("#taskbar-apps");
const powerButton = document.querySelector("#power-button");


// ======================================
// INFORMAÇÕES DOS APLICATIVOS
// ======================================

const applications = {

    about: {
        title: "Sobre mim",
        icon: "👩🏻‍💻",
        content: `
            <span class="content-tag">PERFIL PESSOAL</span>

            <h2>Olá, eu sou a Larissa! ♡</h2>

            <p class="intro">
                Estudante de Análise e Desenvolvimento de Sistemas,
                apaixonada por tecnologia, criatividade e desenvolvimento.
            </p>

            <div class="info-card">
                <h3>Quem sou eu?</h3>
                <p>
                    Sou uma estudante de tecnologia que gosta de transformar
                    ideias em projetos digitais. Estou sempre buscando
                    aprender coisas novas e desenvolver minhas habilidades.
                </p>
            </div>

            <div class="info-card">
                <h3>Minha jornada</h3>
                <p>
                    Atualmente curso Análise e Desenvolvimento de Sistemas
                    no SENAI, onde tenho desenvolvido projetos acadêmicos
                    e explorado diferentes tecnologias.
                </p>
            </div>

            <h3>Meu objetivo</h3>

            <p>
                Evoluir como desenvolvedora, adquirir experiência prática
                e participar de projetos que unam tecnologia e criatividade.
            </p>

            <p class="window-note">
                Perfil em constante evolução ♡
            </p>
        `
    },

    education: {
        title: "Formação acadêmica",
        icon: "🎓",
        content: `
            <span class="content-tag">EDUCAÇÃO</span>

            <h2>Minha formação</h2>

            <p class="intro">
                Conhecimento é uma jornada que nunca termina.
            </p>

            <div class="info-card">
                <h3>🎓 Análise e Desenvolvimento de Sistemas</h3>
                <p>
                    SENAI — Ribeirão Preto
                </p>
                <p>
                    Curso Superior de Tecnologia.
                </p>
                <p>
                    Período: 2026 — atualmente.
                </p>
                <p>
                    Status: Em andamento.
                </p>
            </div>

            <div class="info-card">
                <h3>🛠️ Técnico em Instrumentação</h3>
                <p>
                    SENAI — Sertãozinho
                </p>
                 <p>
                    Curso Técnico em Instrumentação Industrial.
                </p>
                <p>
                    Período: 2024 — 2025.
                </p>
                <p>
                    Status: Concluído.
                </p>
            </div>

            <div class="info-card">
                <h3>📊 Excel básico</h3>
                <p>
                    SESI — 2024.
                </p>
            </div>

            <div class="info-card">
                <h3>🌎 Inglês</h3>
                <p>
                    Curso de inglês.
                </p>
            </div>

            <p class="window-note">
                Sempre aprendendo e construindo novos conhecimentos.
            </p>
        `
    },

    projects: {
        title: "Meus projetos",
        icon: "💻",
        content: `
            <span class="content-tag">PORTFÓLIO</span>

            <h2>Projetos em destaque</h2>

            <p class="intro">
                Algumas ideias que já saíram do papel!
            </p>

            <div class="project-card">
                <h3>🦺 SafeWork</h3>

                <p>
                    Sistema web de gerenciamento de Equipamentos
                    de Proteção Individual (EPIs), com controle de
                    estoque, validade, funcionários e relatórios.
                </p>

                <span class="project-status">
                    PROJETO INTEGRADOR • SENAI
                </span>
            </div>

            <div class="project-card">
                <h3>🐱 Res-Gatinhos</h3>

                <p>
                    Projeto de site para uma iniciativa de adoção
                    de gatos, desenvolvido como parte dos estudos
                    de desenvolvimento web.
                </p>

                <span class="project-status">
                    PROJETO ACADÊMICO
                </span>
            </div>

            <div class="project-card">
                <h3>💜 LARI.OS</h3>

                <p>
                    Um portfólio interativo inspirado em um sistema
                    operacional, desenvolvido com HTML, CSS e JavaScript.
                </p>

                <span class="project-status">
                    EM DESENVOLVIMENTO
                </span>
            </div>

            <p class="window-note">
                Novos projetos serão adicionados por aqui!
            </p>
        `
    },

    skills: {
        title: "Minhas habilidades",
        icon: "🧠",
        content: `
            <span class="content-tag">CONHECIMENTOS TÉCNICOS</span>

            <h2>Minha caixa de ferramentas</h2>

            <p class="intro">
                Tecnologias que venho estudando e utilizando
                em meus projetos.
            </p>

            <h3>Desenvolvimento web</h3>

            <div class="skill-list">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">ASP.NET</span>
            </div>

            <h3>Programação</h3>

            <div class="skill-list">
                <span class="skill-tag">Java</span>
                <span class="skill-tag">C#</span>
                <span class="skill-tag">Python</span>
            </div>

            <h3>Banco de dados e ferramentas</h3>

            <div class="skill-list">
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">GitHub</span>
                <span class="skill-tag">Firebase</span>
            </div>

            <h3>Outros conhecimentos</h3>

            <div class="skill-list">
                <span class="skill-tag">Excel</span>
                <span class="skill-tag">Bulma</span>
                <span class="skill-tag">Pico CSS</span>
                <span class="skill-tag">daisyUI</span>
            </div>

            <p class="window-note">
                Conhecimentos em desenvolvimento e constante aprendizado.
            </p>
        `
    },

    
experience: {
    title: "Experiências",
    icon: "📁",
    content: `
        <span class="content-tag">TRAJETÓRIA PROFISSIONAL</span>

        <h2>Minha experiência</h2>

        <p class="intro">
            Cada experiência contribui para minha evolução.
        </p>

        <div class="info-card">
            <h3>🥐 Balconista</h3>

            <p>
                Atuação em padaria, com atendimento ao público,
                organização de produtos e suporte às atividades
                do estabelecimento.
            </p>
        </div>

        <div class="info-card">
            <h3>🏭 Raízen — Aprendiz Técnico I</h3>

            <p>
                Vínculo de aprendizagem relacionado à formação
                no curso Técnico em Instrumentação.
            </p>

            <p>
                Período: Junho de 2025 — Agosto de 2025.
            </p>

            <p>
                Empresa: Raízen Centro-Sul Paulista S.A.
            </p>
        </div>

        <h3>Competências desenvolvidas</h3>

        <div class="skill-list">
            <span class="skill-tag">Comunicação</span>
            <span class="skill-tag">Organização</span>
            <span class="skill-tag">Atendimento</span>
            <span class="skill-tag">Trabalho em equipe</span>
        </div>

        <p class="window-note">
            Experiências que também fazem parte da minha formação profissional.
        </p>
    `
},
    contact: {
        title: "Entre em contato",
        icon: "💌",
        content: `
            <span class="content-tag">CONEXÕES</span>

            <h2>Vamos conversar? ♡</h2>

            <p class="intro">
                Estou aberta a conhecer pessoas, trocar experiências
                e descobrir novas oportunidades na tecnologia.
            </p>

            <div class="info-card">
                <h3>💼 LinkedIn</h3>
                <a href="https://www.linkedin.com/in/larissa-ferreira-2795073b3/"
                   target="_blank">
                    Acesse meu LinkedIn ↗
                </a>
            </div>

            <div class="info-card">
                <h3>🐙 GitHub</h3>
                <a href="https://github.com/llariisf"
                   target="_blank">
                    Acesse meu GitHub ↗
                </a>
            </div>

            <div class="info-card">
                <h3>✉️ E-mail</h3>
                <a href="mailto:larissacristinasimao39@gmail.com">
                    Entre em contato comigo ↗
                </a>
            </div>

            <p class="window-note">
                Obrigada por visitar meu universo digital! 💜
            </p>
        `
    }

};


// ======================================
// INICIALIZAÇÃO DO SISTEMA
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        bootScreen.classList.add("hidden");
        desktop.classList.remove("hidden");

        console.log("Desktop carregado!");

    }, 3200);

});


// ======================================
// RELÓGIO E DATA
// ======================================

function updateClock() {

    const now = new Date();

    document.querySelector("#clock").textContent =
        now.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });

    document.querySelector("#date").textContent =
        now.toLocaleDateString("pt-BR");

}

updateClock();

setInterval(updateClock, 1000);


// ======================================
// MENU INICIAR
// ======================================

startButton.addEventListener("click", (event) => {

    event.stopPropagation();

    startMenu.classList.toggle("hidden");

});

document.addEventListener("click", (event) => {

    if (
        !startMenu.contains(event.target) &&
        !startButton.contains(event.target)
    ) {

        startMenu.classList.add("hidden");

    }

});


// ======================================
// PESQUISA DE APLICATIVOS
// ======================================

const pinnedApps = document.querySelectorAll(".pinned-app");

searchInput.addEventListener("input", () => {

    const search = searchInput.value
        .toLowerCase()
        .trim();

    pinnedApps.forEach((app) => {

        const appName = app.textContent.toLowerCase();

        app.style.display = appName.includes(search)
            ? ""
            : "none";

    });

});


// ======================================
// GERENCIAMENTO DE JANELAS
// ======================================

let highestZIndex = 20;

const openWindows = new Map();


function focusWindow(windowElement) {

    highestZIndex++;

    windowElement.style.zIndex = highestZIndex;

}


// ABRIR APLICATIVO

function openApp(appId) {

    const app = applications[appId];

    if (!app) return;

    startMenu.classList.add("hidden");

    if (openWindows.has(appId)) {

        const existingWindow = openWindows.get(appId);

        existingWindow.classList.remove("minimized");

        focusWindow(existingWindow);

        updateTaskbar();

        return;
    }

    const windowElement = document.createElement("section");

    windowElement.className = "app-window";
    windowElement.dataset.app = appId;

    windowElement.innerHTML = `

        <div class="window-titlebar">

            <div class="window-title">
                <span>${app.icon}</span>
                ${app.title}
            </div>

            <div class="window-controls">

                <button
                    class="minimize-window"
                    title="Minimizar"
                    aria-label="Minimizar janela"
                >−</button>

                <button
                    class="maximize-window"
                    title="Maximizar"
                    aria-label="Maximizar janela"
                >□</button>

                <button
                    class="close-window"
                    title="Fechar"
                    aria-label="Fechar janela"
                >✕</button>

            </div>

        </div>

        <div class="window-content">
            ${app.content}
        </div>

    `;

    windowArea.appendChild(windowElement);

    openWindows.set(appId, windowElement);

    focusWindow(windowElement);

    setupWindow(windowElement, appId);

    updateTaskbar();

}


// CONFIGURAR CONTROLES DA JANELA

function setupWindow(windowElement, appId) {

    const minimizeButton = windowElement.querySelector(
        ".minimize-window"
    );

    const maximizeButton = windowElement.querySelector(
        ".maximize-window"
    );

    const closeButton = windowElement.querySelector(
        ".close-window"
    );

    const titlebar = windowElement.querySelector(
        ".window-titlebar"
    );


    // MINIMIZAR

    minimizeButton.addEventListener("click", () => {

        windowElement.classList.add("minimized");

        updateTaskbar();

    });


    // MAXIMIZAR

    maximizeButton.addEventListener("click", () => {

        const isMaximized = windowElement.classList.toggle(
            "maximized"
        );

        maximizeButton.textContent = isMaximized ? "❐" : "□";

    });


    // FECHAR

    closeButton.addEventListener("click", () => {

        windowElement.remove();

        openWindows.delete(appId);

        updateTaskbar();

    });


    // TRAZER JANELA PARA FRENTE

    windowElement.addEventListener("mousedown", () => {

        focusWindow(windowElement);

    });


    // ARRASTAR JANELA

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;

    titlebar.addEventListener("pointerdown", (event) => {

        if (event.target.closest(".window-controls")) return;

        if (windowElement.classList.contains("maximized")) return;

        dragging = true;

        const rect = windowElement.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        titlebar.setPointerCapture(event.pointerId);

    });

    titlebar.addEventListener("pointermove", (event) => {

        if (!dragging) return;

        const areaRect = windowArea.getBoundingClientRect();

        const width = windowElement.offsetWidth;
        const height = windowElement.offsetHeight;

        let x = event.clientX - areaRect.left - offsetX;
        let y = event.clientY - areaRect.top - offsetY;

        x = Math.max(0, Math.min(x, areaRect.width - width));
        y = Math.max(0, Math.min(y, areaRect.height - height));

        windowElement.style.left = `${x}px`;
        windowElement.style.top = `${y}px`;

        windowElement.style.transform = "none";

    });

    titlebar.addEventListener("pointerup", () => {

        dragging = false;

    });

    titlebar.addEventListener("pointercancel", () => {

        dragging = false;

    });

}


// ======================================
// ÍCONES NA BARRA DE TAREFAS
// ======================================

function updateTaskbar() {

    taskbarApps.innerHTML = `
        <span title="LARI.OS">🌸</span>
    `;

    openWindows.forEach((windowElement, appId) => {

        const app = applications[appId];

        const taskbarButton = document.createElement("button");

        taskbarButton.type = "button";
        taskbarButton.textContent = app.icon;
        taskbarButton.title = app.title;

        if (!windowElement.classList.contains("minimized")) {
            taskbarButton.classList.add("active-task");
        }

        taskbarButton.addEventListener("click", () => {

            if (windowElement.classList.contains("minimized")) {

                windowElement.classList.remove("minimized");

            }

            focusWindow(windowElement);

            updateTaskbar();

        });

        taskbarApps.appendChild(taskbarButton);

    });

}


// ======================================
// ABRIR APLICATIVOS PELOS ÍCONES
// ======================================

document.querySelectorAll("[data-app]").forEach((button) => {

    button.addEventListener("click", () => {

        openApp(button.dataset.app);

    });

});


// ======================================
// BOTÃO DE DESLIGAR
// ======================================

powerButton.addEventListener("click", () => {

    const confirmShutdown = confirm(
        "Deseja reiniciar o LARI.OS?"
    );

    if (confirmShutdown) {

        window.location.reload();

    }

});


// ======================================
// FINALIZAÇÃO
// ======================================

console.log("Todos os aplicativos estão carregados!");
console.log("Bem-vinda ao LARI.OS, Larissa! 💜");
