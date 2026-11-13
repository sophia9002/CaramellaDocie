
// Minha conta

var abrirConta = document.getElementById("abrir-conta");
var fecharConta = document.getElementById("fechar-conta");
var overlayConta = document.getElementById("conta-overlay");
var formularioConta = document.getElementById("formulario-conta");
var botaoCriar = document.getElementById("criar-conta");

var modoCadastro = false;


// Abre a conta

if (abrirConta != null && overlayConta != null) {
    abrirConta.addEventListener("click", function () {
        overlayConta.classList.add("ativo");
        document.body.style.overflow = "hidden";
    });
}


// Fecha a conta

function fecharPopup() {
    if (overlayConta != null) {
        overlayConta.classList.remove("ativo");
    }

    document.body.style.overflow = "";
}

if (fecharConta != null) {
    fecharConta.addEventListener("click", fecharPopup);
}


// Fecha clicando fora

if (overlayConta != null) {
    overlayConta.addEventListener("click", function (event) {
        if (event.target == overlayConta) {
            fecharPopup();
        }
    });
}


// Abre o cadastro

var cadastroOverlay = document.getElementById("cadastro-overlay");

if (botaoCriar != null) {
    botaoCriar.addEventListener("click", function () {
        if (overlayConta != null) {
            overlayConta.classList.remove("ativo");
        }

        if (cadastroOverlay != null) {
            cadastroOverlay.classList.add("ativo");
            document.body.style.overflow = "hidden";
        }
    });
}


// Cadastro

var fecharCadastro = document.getElementById("fechar-cadastro");
var formularioCadastro = document.getElementById("formulario-cadastro");
var mensagemCadastro = document.getElementById("cadastro-mensagem");


// Fecha o cadastro

function fecharPopupCadastro() {
    if (cadastroOverlay != null) {
        cadastroOverlay.classList.remove("ativo");
    }

    document.body.style.overflow = "";
}

if (fecharCadastro != null) {
    fecharCadastro.addEventListener("click", fecharPopupCadastro);
}


// Fecha clicando fora

if (cadastroOverlay != null) {
    cadastroOverlay.addEventListener("click", function (event) {
        if (event.target == cadastroOverlay) {
            fecharPopupCadastro();
        }
    });
}


// Máscara do telefone

function mascara_telefone() {

    var telefone = document.getElementById("cadastro-telefone").value;

    telefone = telefone.replace(/\D/g, "");
    telefone = telefone.slice(0, 11);

    var telefone_formatado = "";

    if (telefone.length > 0) {
        telefone_formatado = "(" + telefone.slice(0, 2);
    }

    if (telefone.length >= 3) {
        telefone_formatado = "(" + telefone.slice(0, 2) + ") " + telefone.slice(2, 7);
    }

    if (telefone.length >= 8) {
        telefone_formatado = "(" + telefone.slice(0, 2) + ") " + telefone.slice(2, 7) + "-" + telefone.slice(7, 11);
    }

    document.getElementById("cadastro-telefone").value = telefone_formatado;

}

var campoTelefone = document.getElementById("cadastro-telefone");

if (campoTelefone != null) {
    campoTelefone.addEventListener("input", mascara_telefone);
}


// Máscara do CPF

function mascara_cpf() {

    var cpf = document.getElementById("cadastro-cpf").value;

    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.slice(0, 11);

    var cpf_formatado = "";

    if (cpf.length > 0) {
        cpf_formatado = cpf.slice(0, 3);
    }

    if (cpf.length >= 4) {
        cpf_formatado = cpf.slice(0, 3) + "." + cpf.slice(3, 6);
    }

    if (cpf.length >= 7) {
        cpf_formatado = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9);
    }

    if (cpf.length >= 10) {
        cpf_formatado = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11);
    }

    document.getElementById("cadastro-cpf").value = cpf_formatado;

}

var campoCPF = document.getElementById("cadastro-cpf");

if (campoCPF != null) {
    campoCPF.addEventListener("input", mascara_cpf);
}


// Verifica os dados do cadastro

if (formularioCadastro != null) {

    formularioCadastro.addEventListener("submit", function (event) {

        event.preventDefault();

        var nome = document.getElementById("cadastro-nome").value.trim();
        var email = document.getElementById("cadastro-email").value.trim();
        var telefone = document.getElementById("cadastro-telefone").value.replace(/\D/g, "");
        var cpf = document.getElementById("cadastro-cpf").value.replace(/\D/g, "");
        var senha = document.getElementById("cadastro-senha").value;
        var confirmarSenha = document.getElementById("cadastro-confirmar-senha").value;


        if (telefone.length != 11) {
            mensagemCadastro.textContent = "Digite um telefone válido.";
            return;
        }

        if (cpf.length != 11) {
            mensagemCadastro.textContent = "Digite um CPF válido.";
            return;
        }

        if (senha.length < 8) {
            mensagemCadastro.textContent = "A senha deve ter pelo menos 8 caracteres.";
            return;
        }

        if (senha != confirmarSenha) {
            mensagemCadastro.textContent = "As senhas não coincidem.";
            return;
        }

        mensagemCadastro.style.color = "#56804c";
        mensagemCadastro.textContent = "Dados preenchidos! Cadastro aguardando integração.";

        console.log("Cadastro preenchido:", nome, email, telefone, cpf);

    });

}


// Formulário de login

if (formularioConta != null) {

    formularioConta.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("Login aguardando integração com C#.");

    });

}


// Carrinho

var abrirCarrinho = document.getElementById("abrir-carrinho");
var fecharCarrinho = document.getElementById("fechar-carrinho");
var overlayCarrinho = document.getElementById("carrinho-overlay");

var produtosCarrinho = document.getElementById("carrinho-produtos");
var totalCarrinho = document.getElementById("carrinho-total");

var botaoCupom = document.getElementById("aplicar-cupom");
var campoCupom = document.getElementById("codigo-cupom");
var mensagemCupom = document.getElementById("mensagem-cupom");

var botaoComprar = document.getElementById("carrinho-comprar");

var descontoCupom = 0;


// Abre o carrinho

if (abrirCarrinho != null && overlayCarrinho != null) {

    abrirCarrinho.addEventListener("click", function () {

        overlayCarrinho.classList.add("ativo");
        document.body.style.overflow = "hidden";

        atualizarCarrinho();

    });

}


// Fecha o carrinho

function fecharPopupCarrinho() {

    if (overlayCarrinho != null) {
        overlayCarrinho.classList.remove("ativo");
    }

    document.body.style.overflow = "";

}

if (fecharCarrinho != null) {
    fecharCarrinho.addEventListener("click", fecharPopupCarrinho);
}


// Fecha clicando fora

if (overlayCarrinho != null) {

    overlayCarrinho.addEventListener("click", function (event) {

        if (event.target == overlayCarrinho) {
            fecharPopupCarrinho();
        }

    });

}


// Atualiza os valores do carrinho

function atualizarCarrinho() {

    if (produtosCarrinho == null || totalCarrinho == null) {
        return;
    }

    var produtos = produtosCarrinho.querySelectorAll(".carrinho-produto");

    var total = 0;

    produtos.forEach(function (produto) {

        var preco = Number(produto.dataset.preco);

        var quantidade = Number(produto.querySelector(".quantidade").textContent);

        total = total + (preco * quantidade);

    });


    if (produtos.length == 0) {

        produtosCarrinho.innerHTML = `
            <div class="carrinho-vazio">
                Seu carrinho está vazio.
            </div>
        `;

    }

    total = total - (total * descontoCupom);

    totalCarrinho.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


// Aumenta, diminui ou remove produtos

if (produtosCarrinho != null) {

    produtosCarrinho.addEventListener("click", function (event) {

        var produto = event.target.closest(".carrinho-produto");

        if (produto == null) {
            return;
        }

        var quantidadeElemento = produto.querySelector(".quantidade");

        var quantidade = Number(quantidadeElemento.textContent);


        if (event.target.classList.contains("quantidade-mais")) {

            quantidade++;

            quantidadeElemento.textContent = quantidade;

        }


        if (event.target.classList.contains("quantidade-menos")) {

            if (quantidade > 1) {

                quantidade--;

                quantidadeElemento.textContent = quantidade;

            }

        }


        if (
            event.target.classList.contains("carrinho-remover") ||
            event.target.classList.contains("produto-remover-icone")
        ) {

            produto.remove();

        }

        atualizarCarrinho();

    });

}


// Aplica o cupom

if (botaoCupom != null) {

    botaoCupom.addEventListener("click", function () {

        var codigo = campoCupom.value.trim().toUpperCase();

        if (codigo == "DOCIE10") {

            descontoCupom = 0.10;

            mensagemCupom.textContent = "Cupom de demonstração aplicado: 10% de desconto!";

            mensagemCupom.style.color = "#56804c";

        } else {

            descontoCupom = 0;

            mensagemCupom.textContent = "Cupom inválido.";

            mensagemCupom.style.color = "#a33b3b";

        }

        atualizarCarrinho();

    });

}


// Botão de comprar

if (botaoComprar != null) {

    botaoComprar.addEventListener("click", function () {

        var produtos = produtosCarrinho
            ? produtosCarrinho.querySelectorAll(".carrinho-produto")
            : [];

        if (produtos.length == 0) {

            alert("Seu carrinho está vazio!");

            return;

        }

        alert("Carrinho pronto! A finalização da compra será integrada posteriormente.");

    });

}




// Calcula o valor inicial

atualizarCarrinho();






// Tema claro e escuro

var botaoTema = document.getElementById("alternar-tema");

// Verifica o tema salvo

if (localStorage.getItem("tema") == "escuro") {
    document.body.classList.add("tema-escuro");
}

// Alterna o tema

if (botaoTema != null) {

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀";
    }

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("tema-escuro");

        if (document.body.classList.contains("tema-escuro")) {

            localStorage.setItem("tema", "escuro");
            botaoTema.textContent = "☀";

        } else {

            localStorage.setItem("tema", "claro");
            botaoTema.textContent = "☾";

        }

    });

}




// ========================================
// POP-UPS DAS CATEGORIAS DO MENU
// ========================================


// Seleciona os cartões das categorias

var categoriasMenu = document.querySelectorAll(".menu-card");


// Abre o pop-up da categoria clicada

categoriasMenu.forEach(function (categoria) {

    categoria.addEventListener("click", function () {

        var nomeCategoria = categoria.dataset.categoria;

        var popup = document.getElementById("popup-" + nomeCategoria);

        if (popup != null) {

            popup.classList.add("ativo");

            document.body.style.overflow = "hidden";

        }

    });

});


// Fecha os pop-ups das categorias

function fecharPopupProdutos(popup) {

    if (popup != null) {

        popup.classList.remove("ativo");

    }

    document.body.style.overflow = "";

}


// Botões de fechar

var botoesFecharProdutos = document.querySelectorAll("[data-fechar-popup]");

botoesFecharProdutos.forEach(function (botao) {

    botao.addEventListener("click", function () {

        var popup = botao.closest(".produtos-overlay");

        fecharPopupProdutos(popup);

    });

});


// Fecha clicando fora da janela

var overlaysProdutos = document.querySelectorAll(".produtos-overlay");

overlaysProdutos.forEach(function (overlay) {

    overlay.addEventListener("click", function (event) {

        if (event.target == overlay) {

            fecharPopupProdutos(overlay);

        }

    });

});


// Fecha apertando ESC

document.addEventListener("keydown", function (event) {

    if (event.key == "Escape") {

        overlaysProdutos.forEach(function (overlay) {

            fecharPopupProdutos(overlay);

        });

    }

});



// ========================================
// ADICIONAR PRODUTOS AO CARRINHO
// ========================================


var botoesAdicionar = document.querySelectorAll(".produto-adicionar");


botoesAdicionar.forEach(function (botao) {

    botao.addEventListener("click", function () {

        var nomeProduto = botao.dataset.produto;

        var precoProduto = Number(botao.dataset.preco);

        var cardProduto = botao.closest(".produto-item");

        var imagemProduto = cardProduto.querySelector("img").getAttribute("src");

        var produtoExistente = null;


        // Verifica se o produto já está no carrinho

        if (produtosCarrinho != null) {

            var produtos = produtosCarrinho.querySelectorAll(".carrinho-produto");

            produtos.forEach(function (produto) {

                var nome = produto.querySelector("h3").textContent;

                if (nome == nomeProduto) {

                    produtoExistente = produto;

                }

            });

        }


        // Se já existe, aumenta a quantidade

        if (produtoExistente != null) {

            var quantidade = produtoExistente.querySelector(".quantidade");

            quantidade.textContent = Number(quantidade.textContent) + 1;

        }


        // Se não existe, cria um novo produto

        else if (produtosCarrinho != null) {

            var novoProduto = document.createElement("article");

            novoProduto.classList.add("carrinho-produto");

            novoProduto.dataset.preco = precoProduto;


            novoProduto.innerHTML = `

                <div class="carrinho-produto-imagem">

                    <img src="${imagemProduto}" alt="${nomeProduto}">

                </div>


                <div class="carrinho-produto-detalhes">

                    <button
                        type="button"
                        class="carrinho-remover"
                        aria-label="Remover produto"
                    >
                        ×
                    </button>

                    <h3>${nomeProduto}</h3>

                    <p class="produto-variacao">1 un</p>

                    <p class="produto-preco">
                        ${precoProduto.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </p>

                    <div class="produto-controles">

                        <button
                            type="button"
                            class="quantidade-menos"
                            aria-label="Diminuir quantidade"
                        >
                            -
                        </button>

                        <span class="quantidade">1</span>

                        <button
                            type="button"
                            class="quantidade-mais"
                            aria-label="Aumentar quantidade"
                        >
                            +
                        </button>

                        <button
                            type="button"
                            class="produto-remover-icone"
                            aria-label="Excluir produto"
                        >
                            ♙
                        </button>

                    </div>

                </div>

            `;


            // Adiciona o produto ao carrinho

            produtosCarrinho.appendChild(novoProduto);

        }


        // Atualiza o total

        atualizarCarrinho();


        // Mostra que o produto foi adicionado

        var textoOriginal = botao.textContent;

        botao.textContent = "ADICIONADO!";

        setTimeout(function () {

            botao.textContent = textoOriginal;

        }, 1200);

    });

});


