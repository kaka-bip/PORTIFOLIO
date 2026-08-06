const user = "kaka-bip";
const grid = document.getElementById('project');

// Nome exato do repo -> imagem de capa (a API do GitHub não fornece isso pronto)
const projetosInfo = {
  "Pok-din": { imagem: "assets/img/Nuve.jpg" },
  "API-NODE":   { imagem: "assets/img/Nuve.jpg" },
  "typescript": {imagem: "assets/img/Nuve.jpg"}
};

const destaque = Object.keys(projetosInfo);
const imagemPadrao = "assets/img/projetos/placeholder.png";

fetch(`https://api.github.com/users/${user}/repos?sort=updated`)
  .then(resposta => resposta.json())
  .then(repos => {
    repos.forEach(repo => {
      if (repo.fork) return;
      if (!destaque.includes(repo.name)) return;

      const imagem = projetosInfo[repo.name]?.imagem || imagemPadrao;

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <img src="${imagem}" alt="${repo.name}">
        <div class="project-card-body">
          <h3>${repo.name}</h3>
          <p>${repo.description ? repo.description : "Sem descrição"}</p>
          <div class="project-tags">
            ${repo.language ? `<span class="tag">${repo.language}</span>` : ""}
          </div>
          <div class="project-footer">
            <a class="view-details" href="${repo.html_url}" target="_blank">View Details</a>
            <a class="icon-btn" href="${repo.html_url}" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            ${repo.homepage ? `
            <a class="icon-btn" href="${repo.homepage}" target="_blank">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>` : ""}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
  })
  .catch(erro => console.log("Erro ao buscar repositórios: ", erro));