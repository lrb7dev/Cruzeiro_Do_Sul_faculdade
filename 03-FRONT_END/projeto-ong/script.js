//MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const menuLista = document.getElementById('menu-lista');

    hamburger.addEventListener('click', function () {
        // Alterna a classe 'active' para mostrar/esconder o menu
        menuLista.classList.toggle('active');

        // Alterna a classe 'is-active' para animar o botão hambúrguer
        hamburger.classList.toggle('is-active');

        // Alterna o atributo aria-expanded para acessibilidade
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
        hamburger.setAttribute('aria-label', !isExpanded ? 'Fechar menu' : 'Abrir menu');
    });

    // Adiciona funcionalidade de fechar o menu ao clicar em um link
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
});

//CADASTRO
function mascaraCPF(campo) {
    // Remove tudo que não é número
    let cpf = campo.value.replace(/\D/g, '');

    // Aplica a máscara
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    campo.value = cpf;
}

// Validação do CPF (usando algoritmo oficial)
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    //processa os 9 primeiros digitos do cpf
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    //valida os dois digitos verificadores do CPF
    //Verifica matematicamente se o CPF é válido através do algoritmo oficial dos dígitos verificadores.
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Adicionar validação ao formulário
document.querySelector('form').addEventListener('submit', function (e) {
    const cpfInput = document.getElementById('cpf');
    if (!validarCPF(cpfInput.value)) {
        e.preventDefault();
        alert('CPF inválido!');
        cpfInput.focus();
    }
});

//Função: Máscara Telefone
function mascaraTelefoneInteligente(campo) {
    let telefone = campo.value.replace(/\D/g, '');

    // Detecta se é celular (11 dígitos) ou fixo (10 dígitos)
    if (telefone.length === 11) {
        // Formato celular: (00) 00000-0000
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length === 10) {
        // Formato fixo: (00) 0000-0000
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        // Aplica máscara básica enquanto digita
        telefone = telefone.replace(/(\d{2})(\d)/, '($1) $2');
        telefone = telefone.replace(/(\d{4})(\d)/, '$1-$2');
    }

    campo.value = telefone;
}

//Função: Máscara CEP
function mascaraCEP(campo) {
    // Remove tudo que não é número
    let cep = campo.value.replace(/\D/g, '');

    // Aplica a máscara: 00000-000
    if (cep.length <= 8) {
        cep = cep.replace(/(\d{5})(\d)/, '$1-$2');
    }

    campo.value = cep;
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário e o botão
    const formulario = document.getElementById('formulario');
    const btnEnviar = document.getElementById('btnEnviar');

    /**
     * Função que verifica a validade de todos os campos obrigatórios do formulário.
     * Ela usa o método checkValidity() nativo do HTML5.
     */
    function verificarFormularioCompleto() {
        // O método checkValidity() retorna true se todos os campos obrigatórios
        // (com o atributo 'required') estiverem preenchidos e válidos.
        const estaValido = formulario.checkValidity();

        // Controla o estado do botão
        if (estaValido) {
            // Se o formulário estiver válido, remove o atributo 'disabled'
            btnEnviar.removeAttribute('disabled');
        } else {
            // Se não estiver válido (campos faltando), adiciona o atributo 'disabled'
            btnEnviar.setAttribute('disabled', 'disabled');
        }
    }

    // Adiciona ouvintes de evento (Listeners)

    // Ouve qualquer evento de mudança (input, select, etc.) dentro do formulário.
    // O evento 'input' é disparado a cada tecla digitada.
    // O evento 'change' é disparado ao sair de um campo ou mudar um <select>.
    formulario.addEventListener('input', verificarFormularioCompleto);
    formulario.addEventListener('change', verificarFormularioCompleto);

    // Verificação logo que a página carrega,
    // caso os navegadores preencham automaticamente alguns campos.
    verificarFormularioCompleto();
});