// ABRINDO LISTENER DE CARREGAMENTO DO DOM
document.addEventListener('DOMContentLoaded', function () {

    // =========================================================================
    // REFERÊNCIAS GLOBAIS DO DOM
    // =========================================================================
    // Declaração de todas as referências de elementos
    const formulario = document.getElementById('formulario');
    const btnEnviar = document.getElementById('btnEnviar');

    // Referências do Toast
    const toast = document.getElementById('toast-sucesso');

    // Referências do Modal
    const btnLimpar = document.getElementById('btnLimpar');
    const modal = document.getElementById('modal-confirmacao');
    const btnConfirmar = document.getElementById('btnConfirmarLimpeza');
    const btnCancelar = document.getElementById('btnCancelarLimpeza');
    const fecharModalTop = document.getElementById('fechar-modal-top');

    // Variável de controle do Alert
    const targetElement = document.getElementById('voluntario');
    let alertShown = false;

    // =========================================================================
    // MENU RESPONSIVO
    // =========================================================================
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
                if (window.innerWidth <= 768) {
                    menuLista.classList.remove('active');
                    hamburger.classList.remove('is-active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    hamburger.setAttribute('aria-label', 'Abrir menu');
                }
            });
        });
    }

    // =========================================================================
    // FUNÇÕES DE MÁSCARA E VALIDAÇÃO
    // =========================================================================
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            const cpfInput = document.getElementById('cpf');
            // Assumindo que a função validarCPF está acessível (global ou definida aqui)
            if (cpfInput && !validarCPF(cpfInput.value)) {
                e.preventDefault();
                alert('CPF inválido!');
                cpfInput.focus();
            }
        });
    }


    // =========================================================================
    // ATIVAÇÃO DO BOTÃO ENVIAR
    // =========================================================================
    if (formulario && btnEnviar) {
        /**
         * Função que verifica a validade de todos os campos obrigatórios.
         */
        function verificarFormularioCompleto() {
            // O método checkValidity() retorna true se todos os campos obrigatórios
            // estiverem preenchidos e válidos.
            const estaValido = formulario.checkValidity();

            // Controla o estado do botão
            if (estaValido) {
                btnEnviar.removeAttribute('disabled');
            } else {
                btnEnviar.setAttribute('disabled', 'disabled');
            }
        }

        // Adiciona ouvintes de evento para verificar a validade
        formulario.addEventListener('input', verificarFormularioCompleto);
        formulario.addEventListener('change', verificarFormularioCompleto);

        // Verificação inicial
        verificarFormularioCompleto();
    }

    // =========================================================================
    // TOAST
    // =========================================================================
    if (toast) {
        // Implementa o estado inicial do toast
        if (!toast.classList.contains('toast-visivel')) {
            toast.classList.add('toast-escondido');
        }
    }

    // Cria a função que exibe o Toast
    function mostrarToast() {
        if (!toast) return; // Proteção
        toast.classList.remove('toast-escondido');
        toast.classList.add('toast-visivel');

        setTimeout(() => {
            toast.classList.remove('toast-visivel');
            toast.classList.add('toast-escondido');
        }, 5000);
    }

    // Adiciona o Listener para o evento de SUBMIT do formulário
    if (formulario) {
        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();

            console.log('Formulário enviado. Exibindo Toast...');

            mostrarToast();

            // Limpa o formulário após o envio bem-sucedido
            formulario.reset();

            // Re-desabilita o botão após o reset
            if (btnEnviar) {
                btnEnviar.setAttribute('disabled', 'disabled');
            }
        });
    }


    // =========================================================================
    // MODAL 
    // =========================================================================
    // --- Funções do Modal ---
    function mostrarModal() {
        if (!modal) return; // Proteção
        modal.classList.add('modal-visivel');
        modal.style.display = 'block';
    }

    function esconderModal() {
        if (!modal) return; // Proteção
        modal.classList.remove('modal-visivel');
        modal.style.display = 'none';
    }

    function limparFormulario() {
        if (!formulario) return; // Proteção
        formulario.reset();
        esconderModal();

        // Re-desabilita o botão após o reset, pois os campos estarão vazios
        if (btnEnviar) {
            btnEnviar.setAttribute('disabled', 'disabled');
        }
    }

    // --- Event Listeners ---
    if (btnLimpar && btnConfirmar && btnCancelar && fecharModalTop) {
        btnLimpar.addEventListener('click', mostrarModal);
        btnConfirmar.addEventListener('click', limparFormulario);
        btnCancelar.addEventListener('click', esconderModal);
        fecharModalTop.addEventListener('click', esconderModal);
    }

    // Fechar o modal clicando fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            esconderModal();
        }
    });

    // =========================================================================
    // ALERT (Intersection Observer)
    // =========================================================================
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

    if (targetElement) {
        observer.observe(targetElement);
    }

}); // FECHANDO O LISTENER DE CARREGAMENTO DO DOM