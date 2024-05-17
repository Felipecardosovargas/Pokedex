## ⛳ Sobre o Desafio ⛳
O desafio consiste em expandir o código fornecido previamente durante o curso, que foi inicialmente desenvolvido pelo expert [Renan Johannsen](https://github.com/RenanJPaula) e bifurcado diretamente do repositório [js-developer-pokedex](https://github.com/digitalinnovationone/js-developer-pokedex). O objetivo é adicionar a funcionalidade de exibir os detalhes do pokémon selecionado.

### ⚙ Sobre o Projeto


O propósito final é criar um aplicativo semelhante à Pokedex (cujo design foi inspirado [neste dribbble](https://dribbble.com/shots/6540871-Pokedex-App)), um dispositivo presente no universo Pokémon que exibe informações sobre os "pokémons". Para isso, além do HTML, CSS e JS inicialmente fornecidos pelo expert, foi utilizada a [PokeAPI](https://pokeapi.co/), que disponibiliza diversas informações sobre pokémons por meio da URL: `https://pokeapi.co/api/v2/pokemon/<numero do pokemon>`.

No entanto, uma única chamada à API não é suficiente para obter todas as informações necessárias para as telas, especialmente para a aba "Evoluções". Portanto, foi necessário recorrer a outros dois endpoints da PokeAPI:
- `https://pokeapi.co/api/v2/pokemon-species/<numero do pokemon>` - este endpoint permite consultar a "Evolution Chain" de um determinado pokémon, fornecendo a URL de outro endpoint que fornece as informações das evoluções do pokémon.
- `https://pokeapi.co/api/v2/evolution-chain/<id da evolution chain>` - este endpoint, que não depende do id/número/nome do pokémon, apresenta os nomes das evoluções do pokémon, se existirem. Com essas informações, foi necessário fazer novas chamadas ao primeiro endpoint para obter as imagens das evoluções.

Como consequência, além de ter sido desafiador populating a aba de evoluções (já que o resultado estava chegando antes da resolução da promise, por algum motivo não identificado), a performance do aplicativo ficou comprometida, com as imagens de alguns pokémons na aba de evolução frequentemente não carregando.

## 🛠 Tecnologias Utilizadas
![HTML5](https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=264CE4)
![JavaScript](https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript)
