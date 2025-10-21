// ABRINDO LISTENER DE CARREGAMENTO DO DOM
document.addEventListener('DOMContentLoaded', function () {

    // =========================================================================
    // TEMPLATES JAVASCRIPT E LÓGICA SPA (SINGLE PAGE APPLICATION)
    // =========================================================================

    // CONTAINER PRINCIPAL DA APLICAÇÃO
    const appContentContainer = document.getElementById('app-content-container');

    // Mapeamento dos Templates (Conteúdos das Páginas - Templates JavaScript)
    const routes = {
        // Template Inicial (index.html)
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

        // Templates Missão, Equipe e Contato (Páginas simples)
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

        // Template Projetos Sociais (projetos-sociais.html)
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

        // Template Cadastro (cadastro.html) - Inclui placeholders para erros
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

    // Função de Roteamento SPA (DOM Manipulation)
    function router() {
        // Pega o hash da URL (ex: #cadastro, #missao). Usa #inicial como padrão.
        const path = window.location.hash || '#inicial';
        const template = routes[path];

        if (template && appContentContainer) {
            // Injeta o novo conteúdo
            appContentContainer.innerHTML = template;

            // Garante que a página inicie no topo após o carregamento
            window.scrollTo(0, 0);

            // Atualiza o título da página
            const pageTitle = path.substring(1).split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            document.title = `ONG Inclusão IA - ${pageTitle || 'Inicial'}`;

            // Se a rota for o '#cadastro', inicializa a lógica específica do formulário
            if (path === '#cadastro') {
                initializeFormLogic();
            }
        } else if (appContentContainer) {
            // Rota não encontrada (404)
            appContentContainer.innerHTML = `
                <section id="erro-404" style="text-align: center; padding: 50px;">
                    <h2>Erro 404 - Página Não Encontrada</h2>
                    <p>A página que você está procurando não existe. Tente voltar para a <a href="#inicial">Página Inicial</a>.</p>
                </section>
            `;
            document.title = 'ONG Inclusão IA - 404';
        }
    }

    // Ouve a mudança de hash na URL (navegação da SPA)
    window.addEventListener('hashchange', router);

    // Carrega a página inicial ao carregar o DOM
    router();

    // =========================================================================
    // FUNÇÕES DE UTILIDADE E VALIDAÇÃO
    // =========================================================================

    // Função para validar CPF (Algoritmo básico)
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

    // Função para aplicar máscara de CPF (XXX.XXX.XXX-XX)
    function maskCPF(value) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return value;
    }

    // Função para aplicar máscara de Telefone ((XX) XXXX-XXXX ou (XX) XXXXX-XXXX)
    function maskTelefone(value) {
        value = value.replace(/\D/g, "");
        if (value.length > 11) value = value.substring(0, 11);
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        if (value.length > 9) {
            value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        }
        return value;
    }


    // =========================================================================
    // SISTEMA DE VERIFICAÇÃO DE CONSISTÊNCIA DE DADOS EM FORMULÁRIOS
    // =========================================================================

    // Objeto para armazenar as referências do formulário
    let formElements = {};

    function setupValidationListeners() {
        const { formulario, cpfInput, telefoneInput, inputs } = formElements;

        if (!formulario) return;

        // Adiciona a máscara e validação em tempo real aos campos
        cpfInput.addEventListener('input', (e) => {
            e.target.value = maskCPF(e.target.value);
            validateField(e.target);
        });

        telefoneInput.addEventListener('input', (e) => {
            e.target.value = maskTelefone(e.target.value);
            validateField(e.target);
        });

        const allFields = [...inputs, formElements.interesseInput]; // Inclui o select

        allFields.forEach(input => {
            // Valida ao sair do campo (blur)
            input.addEventListener('blur', (e) => {
                validateField(e.target);
            });
            // Limpa o erro ao digitar (input)
            input.addEventListener('input', (e) => {
                clearError(e.target.id);
            });
        });

        // Evento de SUBMIT principal do formulário
        formulario.addEventListener('submit', handleFormSubmit);
    }

    // Função de Exibição de Erro (DOM Manipulation)
    function displayError(fieldId, message) {
        const errorElement = document.getElementById(`erro-${fieldId}`);
        const inputElement = document.getElementById(fieldId);

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('active'); // Adiciona classe para mostrar no CSS
        }
        if (inputElement) {
            inputElement.classList.add('input-error'); // Adiciona estilo de erro ao input
        }
    }

    // Função de Limpeza de Erro (DOM Manipulation)
    function clearError(fieldId) {
        const errorElement = document.getElementById(`erro-${fieldId}`);
        const inputElement = document.getElementById(fieldId);

        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('active');
        }
        if (inputElement) {
            inputElement.classList.remove('input-error');
        }
    }

    // Função principal de validação de campo
    function validateField(input) {
        clearError(input.id);
        const value = input.value.trim();
        const fieldName = input.id;
        let isValid = true;
        let errorMessage = '';

        // Validação de Campo Obrigatório
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório.';
        }

        // Validação Específica (apenas se não estiver vazio)
        if (isValid && value) {
            switch (fieldName) {
                case 'nome':
                    if (value.length < 3) {
                        isValid = false;
                        errorMessage = 'O nome deve ter no mínimo 3 caracteres.';
                    }
                    break;
                case 'email':
                    // Regex simples para validação de email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'O e-mail informado é inválido.';
                    }
                    break;
                case 'telefone':
                    // Verifica se o telefone está no formato de máscara esperado (10 ou 11 dígitos)
                    const phoneLength = value.replace(/\D/g, "").length;
                    if (phoneLength < 10 || phoneLength > 11) {
                        isValid = false;
                        errorMessage = 'Telefone inválido. Use o formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX.';
                    }
                    break;
                case 'cpf':
                    if (!validarCPF(value)) {
                        isValid = false;
                        errorMessage = 'O CPF informado é inválido.';
                    }
                    break;
                case 'interesse':
                    if (value === '') {
                        isValid = false;
                        errorMessage = 'Selecione uma opção de interesse.';
                    }
                    break;
            }
        }

        if (!isValid) {
            displayError(fieldName, errorMessage);
        }
        return isValid;
    }

    // Função para validar TODOS os campos
    function validateAllFields() {
        let isFormValid = true;
        const allFields = [
            formElements.nomeInput,
            formElements.emailInput,
            formElements.telefoneInput,
            formElements.cpfInput,
            formElements.interesseInput
        ];

        allFields.forEach(input => {
            // A função validateField já exibe o aviso de preenchimento incorreto
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    // Função de tratamento de SUBMIT
    function handleFormSubmit(e) {
        e.preventDefault(); // Evita o envio padrão da página

        if (validateAllFields()) {
            // Se o formulário for válido, simula o envio e mostra o toast
            console.log('Formulário Válido. Simulação de envio...');
            formElements.formulario.reset();
            mostrarToast();

        } else {
            console.log('Formulário Inválido. Corrija os erros.');
            // Rola para o primeiro campo com erro
            const firstErrorInput = document.querySelector('.input-error');
            if (firstErrorInput) {
                firstErrorInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // =========================================================================
    // INICIALIZAÇÃO DE FORMULÁRIO E OUTROS (DOM Manipulation)
    // =========================================================================

    function initializeFormLogic() {
        // Redefine as referências do DOM para o novo conteúdo injetado
        formElements.formulario = document.getElementById('formulario');
        formElements.toast = document.getElementById('toast-sucesso');
        formElements.modal = document.getElementById('modal-confirmacao');
        formElements.btnConfirmar = document.getElementById('btnConfirmarLimpeza');
        formElements.btnCancelar = document.getElementById('btnCancelarLimpeza');
        formElements.fecharModalTop = document.getElementById('fechar-modal-top');
        formElements.btnLimpar = document.getElementById('btnLimpar'); // Botão dentro do template
        formElements.targetElement = document.getElementById('voluntario');

        // Campos do Formulário
        formElements.nomeInput = document.getElementById('nome');
        formElements.emailInput = document.getElementById('email');
        formElements.telefoneInput = document.getElementById('telefone');
        formElements.cpfInput = document.getElementById('cpf');
        formElements.interesseInput = document.getElementById('interesse');

        // Coletar todos os inputs para validação
        formElements.inputs = [formElements.nomeInput, formElements.emailInput, formElements.telefoneInput, formElements.cpfInput];

        // Chama o setup de listeners de validação e máscaras
        setupValidationListeners();

        // Configura o Modal
        setupModalListeners();

        // Configura o Observer (Alert) - Aviso para o campo "Interesse"
        setupIntersectionObserver();
    }

    // =========================================================================
    // FUNÇÕES DE COMPONENTES EXISTENTES (TOAST, MODAL, MENU e OBSERVER)
    // =========================================================================

    // --- Toast de Sucesso ---
    function mostrarToast() {
        const toast = document.getElementById('toast-sucesso');
        if (toast) {
            toast.classList.remove('toast-escondido');
            toast.classList.add('toast-visivel');
            setTimeout(() => {
                toast.classList.remove('toast-visivel');
                toast.classList.add('toast-escondido');
            }, 5000);
        }
    }

    // --- Lógica do Modal ---
    function mostrarModal() {
        const modal = document.getElementById('modal-confirmacao');
        if (modal) {
            modal.classList.remove('modal-escondido');
            modal.classList.add('modal-visivel');
        }
    }

    function esconderModal() {
        const modal = document.getElementById('modal-confirmacao');
        if (modal) {
            modal.classList.remove('modal-visivel');
            modal.classList.add('modal-escondido');
        }
    }

    function limparFormulario() {
        if (formElements.formulario) {
            formElements.formulario.reset();
            // Limpa todos os erros visuais
            const errorMessages = document.querySelectorAll('#cadastro .erro-mensagem.active');
            errorMessages.forEach(el => el.classList.remove('active'));
            const errorInputs = document.querySelectorAll('#cadastro .input-error');
            errorInputs.forEach(el => el.classList.remove('input-error'));
        }
        esconderModal();
    }

    // Configura os listeners do modal, que está estático no index.html
    function setupModalListeners() {
        const modal = document.getElementById('modal-confirmacao');
        const btnLimpar = document.getElementById('btnLimpar'); // Referência do botão de limpeza do form na rota #cadastro

        if (modal) {
            // Reatacha os listeners estáticos do modal (botões de confirmação/cancelamento)
            const btnConfirmar = document.getElementById('btnConfirmarLimpeza');
            const btnCancelar = document.getElementById('btnCancelarLimpeza');
            const fecharModalTop = document.getElementById('fechar-modal-top');

            if (btnConfirmar && btnCancelar && fecharModalTop) {
                btnConfirmar.onclick = limparFormulario;
                btnCancelar.onclick = esconderModal;
                fecharModalTop.onclick = esconderModal;
            }

            // Ouve o clique no botão "Limpar" do formulário para abrir o modal
            if (btnLimpar) {
                btnLimpar.onclick = mostrarModal;
            }

            // Fechar o modal clicando fora dele
            window.onclick = function (event) {
                if (event.target == modal) {
                    esconderModal();
                }
            }
        }
    }


    // --- MENU RESPONSIVO ---
    const hamburger = document.getElementById('hamburger-menu');
    const menuLista = document.getElementById('menu-lista');

    if (hamburger && menuLista) {
        hamburger.addEventListener('click', function () {
            menuLista.classList.toggle('active');
            hamburger.classList.toggle('is-active');
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.setAttribute('aria-label', !isExpanded ? 'Fechar menu' : 'Abrir menu');
        });

        const links = menuLista.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Fechar o menu ao clicar em um link (apenas em mobile)
                if (window.innerWidth <= 768) {
                    menuLista.classList.remove('active');
                    hamburger.classList.remove('is-active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.setAttribute('aria-label', 'Abrir menu');
                }
            });
        });
    }

    // --- INTERSECTION OBSERVER (ALERT) ---
    let alertShown = false; // Variável de controle global

    function setupIntersectionObserver() {
        const targetElement = document.getElementById('voluntario');
        if (!targetElement) return; // Só configura se o elemento alvo estiver presente na página (ou seja, na rota #cadastro)

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !alertShown) {
                    alert("Ei! Que ótimo ter você conosco! Não se esqueça de preencher o campo INTERESSE, ele é obrigatório para validar o CADASTRO!");
                    alertShown = true;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(targetElement);
    }

}); // FIM DO DOMCONTENTLOADED