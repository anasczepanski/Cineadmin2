import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://jlasoxuykhoeqkezkmum.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsYXNveHV5a2hvZXFrZXprbXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0ODk0NzQsImV4cCI6MjAyNTA2NTQ3NH0.HziNF0d85aDXr-DzHkqLJm5x1pRR1yb0BOOu4SkvMwg';
const supabase = createClient(supabaseUrl, supabaseKey);

// Adicionar event listener para o formulário de pesquisa
const formPesquisa = document.getElementById('formPesquisa');
formPesquisa.addEventListener('submit', async function(event) {
  event.preventDefault();
  const campoPesquisa = document.getElementById('campoPesquisa').value;

  // Chamar a função para pesquisar filmes com base no termo de pesquisa
  await pesquisarFilmes(campoPesquisa);
});

// Função para fazer a pesquisa na tabela de filmes
async function pesquisarFilmes(consulta) {
  try {
    // Consultar dados da tabela 'filmes' com base na consulta
    const { data, error } = a
      .from('filmes')
      .select('*')
      .ilike('titulo', `%${consulta}%`); // Consulta usando ILIKE para pesquisa case-insensitive

    // Verificar erros
    if (error) {
      throw error;
    }

    // Exibir os resultados na página HTML
    exibirResultados(data);

  } catch (error) {
    console.error('Erro ao pesquisar filmes:', error.message);
  }
}

// Função para exibir os resultados da pesquisa na página HTML
function exibirResultados(resultados) {
  const listaFilmes = document.getElementById('listaFilmes');
  listaFilmes.innerHTML = '';

  // Verificar se houve resultados
  if (resultados.length === 0) {
    listaFilmes.innerHTML = '<p>Nenhum filme encontrado.</p>';
    return;
  }

  // Iterar sobre os resultados e exibir na página HTML
  resultados.forEach(filme => {
    const filmeItem = document.createElement('div');
    filmeItem.innerHTML = `
      <p><strong>Título:</strong> ${filme.titulo}</p>
      <p><strong>Diretor:</strong> ${filme.diretor}</p>
      <p><strong>Ano:</strong> ${filme.ano}</p>
      <hr>
    `;
    listaFilmes.appendChild(filmeItem);
  });
}
