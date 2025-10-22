// ABRINDO LISTENER DE CARREGAMENTO DO DOM
document.addEventListener('DOMContentLoaded', function () {

    // =========================================================================
    // VARIÁVEIS DE ACESSIBILIDADE E UTILIDADE
    // =========================================================================
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let lastFocusedElement = null;

    // VARIÁVEIS DE MODO DE COR 
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const MODES = ['light-mode', 'dark-mode', 'high-contrast'];

    // CONTAINER PRINCIPAL DA APLICAÇÃO (SPA)
    const appContentContainer = document.getElementById('app-content-container');

    // VARIÁVEL DE CONTROLE
    let alertShown = false; // Variável de controle global para Intersection Observer

    // =========================================================================
    // TEMPLATES JAVASCRIPT E LÓGICA SPA (SINGLE PAGE APPLICATION)
    // =========================================================================

    const routes = {
        '#inicial': `
            <section id="inicial">
                <h2>Bem-vindo à ONG Inclusão IA</h2>
                <div class="grid-container">
                    <figure class="col-12 col-md-12 col-lg-8">
                        <img class="img-responsiva" src="img/usuario-com-tablet.webp"
                            alt="Usuário utilizando um tablet para fins educacionais.">
                        <figcaption>
                            Crédito: ONG Inclusão IA
                    </figure>
            
                    <article class="col-12 col-md-12 col-lg-4">
                        <p>A ONG Inclusão IA é uma organização sem fins lucrativos dedicada a promover a inclusão social e
                            digital no Brasil, utilizando o poder da Inteligência Artificial (IA) como ferramenta de
                            transformação.</p>
                        <p>Nosso foco está em fornecer recursos educacionais personalizados e ferramentas acessíveis
                            para comunidades de baixa renda, permitindo que indivíduos desenvolvam habilidades essenciais para o
                            mercado de trabalho do futuro.</p>
                        <p class="destaque centralizar">A tecnologia deve ser uma ponte, e não uma barreira.</p>
                        <div class="btn-centralizado"><a href="#projetos-sociais" class="btn btn-primario">Conheça Nossos Projetos</a></div>
                        
                    </article>
            
                    <h2 class="col-12">Nossos Valores</h2>
                    <ul class="col-12">
                        <li><strong>Acessibilidade:</strong> Garantir que as ferramentas de IA sejam simples e de fácil acesso
                            para que <span class="destaque">todos se beneficiem</span> da
                            tecnologia</li>
                        <li><strong>Transparência:</strong> Nossos processos e algoritmos são <span class="destaque">abertos e
                                auditáveis</span></li>
                        <li><strong>Colaboração:</strong> Acreditamos no poder das <span class="destaque">parcerias</span> para
                            gerar <span class="destaque">impacto</span></li>
                    </ul>
                </div>
                <div class="tags">
                    <h3>TAGS</h3>
                    <a href="#" class="tag">#Projetos</a>
                    <a href="#" class="tag">#ONG</a>
                    <a href="#" class="tag">#InclusãoSocial</a>
                    <a href="#" class="tag">#IAnaInclusãoSocial</a>
                    <a href="#" class="tag">#InteligênciaArtificialEducação</a>
                    <a href="#" class="tag">#ProjetosSociais</a>
                    <a href="#" class="tag">#TransformandoVidas</a>
                    <a href="#" class="tag">#ApoieOProjeto</a>
                </div>
            </section>
        `,

        '#missao': `
            <section id="missao-conteudo">
                <h2>Nossa Missão</h2>
                <p>Nossa missão é promover a inclusão social e digital no Brasil, utilizando a Inteligência Artificial para criar oportunidades e reduzir as desigualdades.</p>
                <p>Focamos em educação, capacitação profissional e acesso a recursos tecnológicos.</p>
                <p><a href="#inicial" class="btn btn-secundario">Voltar para Página Inicial</a></p>
            </section>
        `,
        '#equipe': `
            <section id="equipe-conteudo">
                <h2>Nossa Equipe</h2>
                <p>Somos um time multidisciplinar de voluntários e profissionais dedicados à causa da inclusão e da tecnologia.</p>
                <p>Trabalhamos com paixão para levar a IA a quem mais precisa.</p>
                <p><a href="#inicial" class="btn btn-secundario">Voltar para Página Inicial</a></p>
            </section>
        `,
        '#contato': `
            <section id="contato-conteudo">
                <h2>Entre em Contato</h2>
                <p>Ficaremos felizes em ouvir você. Utilize as informações abaixo ou nosso formulário de cadastro.</p>
                <ul>
                    <li><strong>E-mail:</strong> contato@inclusaoia.org</li>
                    <li><strong>Telefone:</strong> (11) 99999-9999</li>
                    <li><strong>Endereço:</strong> Rua da Inovação, 123 - Minas Gerais, MG</li>
                </ul>
                <br/>
                <p><a href="#cadastro" class="btn btn-primario">Ir para o Formulário de Cadastro</a></p>
            </section>
        `,

        '#projetos-sociais': `
            <section id="projetos">
                <h2>Projetos e Iniciativas Sociais</h2>
                <div class="grid-container">
                    <article class="col-12 col-lg-8">
                        <h3>Inclusão Digital para Jovens e Adultos</h3>
                        <p>Este é o nosso carro-chefe. Utilizamos plataformas de IA para:</p>
                        <ul>
                            <li>Identificar o nível de conhecimento individual dos participantes.</li>
                            <li>Criar trilhas de aprendizado personalizadas, focadas em programação básica, lógica e o uso de
                                ferramentas digitais.</li>
                            <li>Oferecer suporte automatizado 24/7 com chatbots educativos.</li>
                        </ul>
                        <p class="destaque">Impacto: Mais de 500 pessoas capacitadas no último ano.</p>
                    </article>
                    <figure class="col-12 col-lg-4">
                        <img class="img-responsiva" src="img/artificial-intelligence.webp"
                            alt="Arte representando a inteligência artificial.">
                        <figcaption>
                            Crédito: ONG Inclusão IA
                        </figcaption>
                    </figure>
            
                    <article class="col-12 col-lg-6">
                        <h3>Projeto IA-Mentor: Mentoria Personalizada</h3>
                        <p>Usando IA para conectar mentores (profissionais da área de tecnologia) com mentorados (jovens em
                            formação), garantindo o match ideal baseado em:</p>
                        <ul>
                            <li>Perfil de interesse do mentorado.</li>
                            <li>Área de especialidade do mentor.</li>
                            <li>Localização e disponibilidade.</li>
                        </ul>
                    </article>
            
                    <article class="col-12 col-lg-6">
                        <h3>Campanha: Doe seu Conhecimento ou Equipamento</h3>
                        <p>Você pode contribuir de diversas formas:</p>
                        <ul>
                            <li>Doe seu tempo como mentor voluntário (cadastro acima!).</li>
                            <li>Doe equipamentos de informática (computadores, notebooks, tablets).</li>
                            <li>Doe licenças de softwares ou plataformas de aprendizado.</li>
                        </ul>
                        <div class="btn-centralizado"><a href="#cadastro" class="btn btn-primario">Quero ser um Doador/Voluntário</a></div>
                    </article>
            
                </div>
                <figure class="col-12">
                    <img class="img-responsiva" src="img/volunteer.webp"
                        alt="Desenho de mão para cima enfatizando a ideia de se voluntariar">
                    <figcaption>
                        Crédito: ONG Inclusão Social
                    </figcaption>
                </figure>
                <br />
                <h3>Estamos planejando expandir nossas atividades com os seguintes projetos:</h3>
                <div class="cards-container">
                    <ul class="cards-ul">
                        <li class="card">IA para agricultura familiar</li>
                        <li class="card">Plataforma de educação acessível com IA</li>
                        <li class="card">Ferramentas de IA para microempreendedores</li>
                    </ul>
                </div>
            </section>
        `,

        '#cadastro': `
            <section id="cadastro-voluntario">
                <h2>Faça Seu Cadastro</h2>
                <p>Seja um voluntário ou um parceiro da ONG Inclusão IA. Sua contribuição é essencial!</p>
            
                <form id="formulario" novalidate>
                    <div class="grid-container formulario-grid">
                        <div class="col-12 col-md-6">
                            <label for="nome">Nome Completo <span class="obrigatorio">*</span></label>
                            <input type="text" id="nome" name="nome" required minlength="3">
                            <span class="erro-mensagem" id="erro-nome"></span>
                        </div>
            
                        <div class="col-12 col-md-6">
                            <label for="email">E-mail <span class="obrigatorio">*</span></label>
                            <input type="email" id="email" name="email" required>
                            <span class="erro-mensagem" id="erro-email"></span>
                        </div>
            
                        <div class="col-12 col-md-6">
                            <label for="telefone">Telefone (DDD + Número) <span class="obrigatorio">*</span></label>
                            <input type="tel" id="telefone" name="telefone" required>
                            <span class="erro-mensagem" id="erro-telefone"></span>
                        </div>
            
                        <div class="col-12 col-md-6">
                            <label for="cpf">CPF <span class="obrigatorio">*</span></label>
                            <input type="text" id="cpf" name="cpf" required maxlength="14">
                            <span class="erro-mensagem" id="erro-cpf"></span>
                        </div>
            
                        <div class="col-12" id="voluntario">
                            <label for="interesse">Interesse Principal <span class="obrigatorio">*</span></label>
                            <select id="interesse" name="interesse" required>
                                <option value="">Selecione uma opção</option>
                                <option value="voluntario">Quero ser Voluntário</option>
                                <option value="parceiro">Quero ser Parceiro/Doador</option>
                                <option value="aluno">Quero ser Aluno</option>
                            </select>
                            <span class="erro-mensagem" id="erro-interesse"></span>
                        </div>
            
                        <div class="col-12">
                            <label for="mensagem">Mensagem/Comentário</label>
                            <textarea id="mensagem" name="mensagem" rows="4"></textarea>
                        </div>
            
                        <div class="col-12 botoes-formulario">
                            <button type="submit" id="btnEnviar" class="btn btn-primario">Enviar Cadastro</button>
                            <button type="button" id="btnLimpar" class="btn btn-secundario">Limpar Formulário</button>
                        </div>
                    </div>
                </form>
            
                <section id="como-ajudar">
                    <br/>
                    <h3>Outras Formas de Apoio:</h3>
                    <ul>
                        <li>Divulgando nosso trabalho nas redes sociais</li>
                        <li>Doando equipamentos de informática</li>
                        <li>Sendo um embaixador da causa em sua comunidade</li>
                        <li>Indicando nossa ONG para possíveis parceiros</li>
                    </ul>
                </section>
            
                <div id="toast-sucesso" class="toast-escondido">
                    ✅ Cadastro Enviado com Sucesso! Agradecemos o seu interesse. Entraremos em contato em breve!
                </div>
            </section>
        `
    };

    // =========================================================================
    // FUNÇÕES DE UTILIDADE E VALIDAÇÃO
    // =========================================================================

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]/g, "");
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
        let soma;
        let resto;
        soma = 0;
        for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if ((resto === 10) || (resto === 11)) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
    }

    function maskCPF(value) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value;
    }

    function maskTelefone(value) {
        value = value.replace(/\D/g, "");
        if (value.length > 11) value = value.substring(0, 11);
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        if (value.length > 9) {
            value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        }
        return value;
    }

    // --- LÓGICA DE MODO DE COR (CORRIGIDA) ---

    function updateToggleText(mode) {
        if (!modeToggle) return;

        let text = '';
        switch (mode) {
            case 'dark-mode':
                text = '🌙 Modo Escuro';
                break;
            case 'high-contrast':
                text = '✨ Alto Contraste';
                break;
            case 'light-mode':
            default:
                text = '☀️ Modo Claro';
                break;
        }
        modeToggle.textContent = text;
        // ARIA: Atualiza aria-label para leitores de tela
        modeToggle.setAttribute('aria-label', `Alternar Modo de Cor: Atualmente ${mode.replace('-', ' ')}`);
    }

    function toggleColorMode() {
        // Pega o modo atual, ou assume 'light-mode'
        let currentMode = MODES.find(mode => body.classList.contains(mode)) || 'light-mode';

        // Determina o próximo modo na sequência (light -> dark -> high-contrast -> light)
        let currentIndex = MODES.indexOf(currentMode);
        let nextIndex = (currentIndex + 1) % MODES.length;
        let nextMode = MODES[nextIndex];

        // 1. Remove todas as classes de modo
        body.classList.remove(...MODES);

        // 2. Adiciona a classe do próximo modo, garantindo que 'light-mode' seja adicionada se for o próximo
        if (nextMode !== 'light-mode') {
            body.classList.add(nextMode);
        } else {
            // Se for "light-mode", adiciona explicitamente para sobrepor a preferência do sistema operacional
            body.classList.add('light-mode');
        }

        // 3. Salva a preferência
        localStorage.setItem('color-mode', nextMode);

        // 4. Atualiza o texto do botão
        updateToggleText(nextMode);
    }

    function applySavedMode() {
        let savedMode = localStorage.getItem('color-mode');

        if (savedMode && MODES.includes(savedMode)) {
            body.classList.remove(...MODES); // Remove qualquer modo existente (incluindo o light-mode)
            if (savedMode !== 'light-mode') {
                body.classList.add(savedMode);
            } else {
                body.classList.add('light-mode'); // Adiciona light-mode para sobrepor prefers-color-scheme: dark
            }
        } else {
            // Se não houver preferência salva, verifica o sistema operacional
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // Se o navegador/OS estiver em dark, define 'dark-mode' como inicial (mas deixa o CSS lidar com a classe)
                savedMode = 'dark-mode';
            } else {
                savedMode = 'light-mode';
            }
        }

        // Garante que o texto inicial do botão esteja correto
        updateToggleText(savedMode);
    }

    // --- FUNÇÕES DE EXIBIÇÃO DE MENSAGENS E ERROS ---
    function displayError(fieldId, message) {
        const errorElement = document.getElementById(`erro-${fieldId}`);
        const inputElement = document.getElementById(fieldId);

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('active');
        }
        if (inputElement) {
            inputElement.classList.add('input-error');
            // ARIA: Indica que o campo é inválido
            inputElement.setAttribute('aria-invalid', 'true');
            // ARIA: Associa o campo à sua mensagem de erro
            inputElement.setAttribute('aria-describedby', `erro-${fieldId}`);
        }
    }

    function clearError(fieldId) {
        const errorElement = document.getElementById(`erro-${fieldId}`);
        const inputElement = document.getElementById(fieldId);

        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('active');
        }
        if (inputElement) {
            inputElement.classList.remove('input-error');
            // ARIA: Remove os atributos de erro
            inputElement.removeAttribute('aria-invalid');
            inputElement.removeAttribute('aria-describedby');
        }
    }

    function showToast() {
        const toast = document.getElementById('toast-sucesso');
        if (toast) {
            toast.classList.remove('toast-escondido');
            toast.classList.add('toast-visivel');
        }
    }

    function hideToast() {
        const toast = document.getElementById('toast-sucesso');
        if (toast) {
            toast.classList.remove('toast-visivel');
            toast.classList.add('toast-escondido');
        }
    }

    // --- LÓGICA DO MODAL ---
    function handleFocusTrap(e) {
        if (e.key !== 'Tab') return;

        const modal = document.getElementById('modal-confirmacao');
        if (!modal || modal.classList.contains('modal-escondido')) return;

        const focusableModalElements = modal.querySelectorAll(focusableElementsString);
        if (focusableModalElements.length === 0) return;

        const firstFocusableElement = focusableModalElements[0];
        const lastFocusableElement = focusableModalElements[focusableModalElements.length - 1];

        // Se Shift + Tab
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
            // Se Tab
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }

    function mostrarModal() {
        const modal = document.getElementById('modal-confirmacao');
        if (modal) {
            // Guarda o elemento que estava focado antes de abrir o modal
            lastFocusedElement = document.activeElement;

            modal.classList.remove('modal-escondido');
            modal.classList.add('modal-visivel');

            // Torna o modal focável e move o foco para ele
            modal.setAttribute('tabindex', '-1');
            modal.focus();
            modal.removeAttribute('tabindex'); // Remove o tabindex após focar

            // Adiciona o listener para o "Focus Trap"
            document.addEventListener('keydown', handleFocusTrap);
        }
    }

    function esconderModal() {
        const modal = document.getElementById('modal-confirmacao');
        if (modal) {
            modal.classList.remove('modal-visivel');
            modal.classList.add('modal-escondido');

            // Remove o listener do "Focus Trap"
            document.removeEventListener('keydown', handleFocusTrap);

            // Retorna o foco para onde estava antes do modal abrir
            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }
        }
    }

    function setupModalListeners() {
        const modal = document.getElementById('modal-confirmacao');
        const btnLimpar = document.getElementById('btnLimpar');

        if (modal) {
            // Reatacha os listeners estáticos do modal
            const fecharModalTop = document.getElementById('fechar-modal-top');
            const btnConfirmar = document.getElementById('btnConfirmarLimpeza');
            const btnCancelar = document.getElementById('btnCancelarLimpeza');

            if (fecharModalTop) fecharModalTop.addEventListener('click', esconderModal);
            if (btnCancelar) btnCancelar.addEventListener('click', esconderModal);
            if (btnConfirmar) {
                btnConfirmar.addEventListener('click', () => {
                    const form = document.getElementById('formulario');
                    if (form) form.reset();
                    esconderModal();
                });
            }
        }

        if (btnLimpar) {
            btnLimpar.addEventListener('click', (e) => {
                e.preventDefault();
                mostrarModal();
            });
        }
    }

    // --- LÓGICA DE FORMULÁRIO E SPA ---

    function initializeFormLogic() {
        const form = document.getElementById('formulario');
        if (!form) return;

        const inputs = form.querySelectorAll('input, select, textarea');

        // Adiciona Listeners de Máscara e Validação em Tempo Real
        inputs.forEach(input => {
            if (input.id === 'cpf') {
                input.addEventListener('input', (e) => {
                    e.target.value = maskCPF(e.target.value);
                });
            }
            if (input.id === 'telefone') {
                input.addEventListener('input', (e) => {
                    e.target.value = maskTelefone(e.target.value);
                });
            }

            input.addEventListener('blur', () => {
                validateField(input);
            });
        });

        // Submissão do Formulário
        form.addEventListener('submit', handleFormSubmit);

        // Configura Listeners do Modal
        setupModalListeners();

        // Configura Intersection Observer (para o alerta)
        setupIntersectionObserver();
    }

    function validateField(input) {
        const fieldId = input.id;
        clearError(fieldId); // Limpa erros anteriores

        if (input.hasAttribute('required') && !input.value.trim()) {
            displayError(fieldId, `O campo ${input.previousElementSibling.textContent.split(' ')[0]} é obrigatório.`);
            return false;
        }

        if (fieldId === 'cpf' && input.value.trim() && !validarCPF(input.value)) {
            displayError(fieldId, 'CPF inválido. Verifique o número digitado.');
            return false;
        }

        if (fieldId === 'email' && input.value.trim() && !input.checkValidity()) {
            displayError(fieldId, 'E-mail inválido. Utilize o formato nome@dominio.com');
            return false;
        }

        return true;
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const inputs = form.querySelectorAll('input, select');
        let formIsValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            showToast();
            setTimeout(() => {
                form.reset();
                hideToast();
            }, 3000);
        } else {
            // Foca no primeiro campo com erro
            const firstError = form.querySelector('.input-error');
            if (firstError) {
                firstError.focus();
            }
        }
    }

    // Função de Roteamento SPA (DOM Manipulation)
    function router() {
        const path = window.location.hash || '#inicial';
        const template = routes[path];

        if (template && appContentContainer) {
            appContentContainer.innerHTML = template;

            // Move o foco para o novo conteúdo principal para leitores de tela
            appContentContainer.setAttribute('tabindex', '-1');
            appContentContainer.focus();
            appContentContainer.removeAttribute('tabindex');

            window.scrollTo(0, 0);

            const pageTitle = path.substring(1).split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            document.title = `ONG Inclusão IA - ${pageTitle || 'Inicial'}`;

            if (path === '#cadastro') {
                initializeFormLogic();
            }
        } else if (appContentContainer) {
            appContentContainer.innerHTML = `
                <section id="erro-404" style="text-align: center; padding: 50px;">
                    <h2>Erro 404 - Página Não Encontrada</h2>
                    <p>A página que você está procurando não existe. Tente voltar para a <a href="#inicial">Página Inicial</a>.</p>
                </section>
            `;
            document.title = 'ONG Inclusão IA - 404';
        }
    }

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');
    const dropdown = document.querySelector('.dropdown > a');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('is-active');
            navUl.classList.toggle('is-open');
            this.setAttribute('aria-expanded', this.classList.contains('is-active'));
        });
    }

    if (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
            const conteudo = this.nextElementSibling;
            if (conteudo) {
                conteudo.style.display = this.classList.contains('active') ? 'block' : 'none';
            }
        });

        // Listener para fechar o dropdown ao perder o foco (Acessibilidade)
        dropdown.addEventListener('focusout', function () {
            setTimeout(() => {
                if (!this.nextElementSibling.contains(document.activeElement)) {
                    this.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    if (window.innerWidth <= 768) {
                        const conteudo = this.nextElementSibling;
                        if (conteudo) conteudo.style.display = 'none';
                    }
                }
            }, 50);
        });
    }

    // LÓGICA PARA FECHAR O MENU AO CLICAR EM UM LINK
    if (navUl && hamburger) {
        navUl.addEventListener('click', function (e) {
            // Verifica se o elemento clicado é um link (<a>)
            if (e.target.tagName === 'A') {
                // Fechar o menu (nav ul)
                navUl.classList.remove('is-open');

                // Resetar o botão hambúrguer para o ícone de barras
                hamburger.classList.remove('is-active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- INTERSECTION OBSERVER (ALERT) ---

    function setupIntersectionObserver() {
        const targetElement = document.getElementById('voluntario');
        if (!targetElement) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                // SUBSTITUÍDO o alert() invasivo pela função nativa para simplificar,
                // mas mantendo a lógica de exibição única.
                if (entry.isIntersecting && !alertShown) {
                    alert("Ei! Que ótimo ter você conosco! Não se esqueça de preencher o campo INTERESSE, ele é obrigatório para validar o CADASTRO!");
                    alertShown = true;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(targetElement);
    }

    // =========================================================================
    // INICIALIZAÇÃO DA APLICAÇÃO (FIM)
    // =========================================================================

    // 1. Ouve a mudança de hash na URL (navegação da SPA)
    window.addEventListener('hashchange', router);

    // 2. Carrega a página inicial ao carregar o DOM
    router();

    // 3. Aplica o modo de cor
    applySavedMode();

    // 4. Ouve o clique no botão de alternância
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleColorMode);
    }

}); // FIM DO DOMCONTENTLOADED