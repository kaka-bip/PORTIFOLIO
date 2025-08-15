 // URL da API do GitHub para pegar seus repositórios públicos
    fetch("https://api.github.com/users/kaka-bip/repos")
        .then(res => res.json())
        .then(projetos => {
            const container = document.querySelector(".projetos");

            // Remove qualquer conteúdo inicial
            container.innerHTML = "<h1>Projetos</h1>";

            // Cria um card para cada projeto
            projetos.forEach(p => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <div class="card-img"></div>
                    <div class="card-content">
                        <h2>${p.name}</h2>
                        <p>${p.description || "Sem descrição"}</p>
                        <span>Linguagem: ${p.language || "Desconhecida"}</span><br>
                        <a href="${p.html_url}" target="_blank">Ver no GitHub</a>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(err => {
            console.error("Erro ao carregar projetos:", err);
            document.querySelector(".projetos").innerHTML += "<p>Erro ao carregar projetos 😢</p>";
        });