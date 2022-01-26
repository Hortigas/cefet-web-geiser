import express from 'express';
import path from 'path';

const PORT = 3000;
const db = {};
const app = express();
const __dirname = path.resolve();

app.use(express.static(`${__dirname}/client`));
const server = app.listen(PORT, () => console.log(`Servidor inicializado na porta ${PORT}`));

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json (~3 linhas)

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter ~15 linhas de código

// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código

// abrir servidor na porta 3000 (constante PORT)
// dica: 1-3 linhas de código
