const container = document.getElementById("projetos-container");
const loadMoreBtn = document.getElementById("load-more");

let page = 1;
const perPage = 4;
const username = "kaka-bip"; // seu GitHub

async function carregarProjetos() {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
  const repos = await res.json();

  repos.forEach(repo => {
    const card = document.createElement("div");
    card.classList.add("projeto");

    card.innerHTML = `
      <img src="https://opengraph.githubassets.com/1/${username}/${repo.name}" alt="${repo.name}" />
      <h2>${repo.name}</h2>
    `;

    container.appendChild(card);
  });

  if (repos.length < perPage) {
    loadMoreBtn.style.display = "none";
  }

  page++;
}

loadMoreBtn.addEventListener("click", carregarProjetos);

// Carregar os primeiros projetos automaticamente
carregarProjetos();
