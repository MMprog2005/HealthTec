//form
window.addEventListener('load', function () {
    const form = document.getElementById('form');
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cancelarBtn = document.getElementById('cancelarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const modal = document.querySelector("dialog");


    cadastrarBtn.addEventListener('click', function () {
        if (form.checkValidity()) {
            const nomeCompleto = document.getElementById('nomeCompleto').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;
            const dataNascimento = document.getElementById('dataNascimento').value;
            const nomeUsuario = document.getElementById('nomeUsuario').value;
            const senha = document.getElementById('senha').value;
            modal.showModal()

            resultadoDiv.innerHTML = `

                <h2>Dados Cadastrados <i class="fa-solid fa-circle-check" style="color: #008040;"></i></h2>
                <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
                <p><strong>Nome de Usuário:</strong> ${nomeUsuario}</p>
                <p><strong>Senha:</strong> ${senha}</p>
                <button class = "confirm"><a href="home.html">Confirmar</a></button>
                <button class = "close" id="closeBtn">Fechar</button>

            `;
            const fechar = document.getElementById('closeBtn');
            fechar.addEventListener('click', function () {
                modal.close();
            })
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });



    cancelarBtn.addEventListener('click', function () {
        form.reset();
        resultadoDiv.innerHTML = '';
    });
});
