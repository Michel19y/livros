
📚 Livros – Livraria Caronte

Um aplicativo mobile feito com React Native que consome a API do Google Books para exibir e explorar livros de diversas categorias. A Livraria Caronte oferece uma interface amigável, rápida e funcional, permitindo ao usuário navegar entre categorias e visualizar detalhes completos dos livros disponíveis.

---

📌 Funcionalidades

✅ Tela inicial com categorias de livros (ex: Fantasia, Romance, Autoajuda)
📖 Listagem de livros por categoria diretamente da API do Google Books
🔍 Detalhamento completo de cada livro (título, autor, descrição, imagem, etc)
📱 Interface mobile responsiva e estilizada com design escuro refinado
🚀 Navegação fluida entre telas utilizando React Navigation

---

📁 Estrutura de Diretórios

```
livros/
├── assets/             # Imagens e ícones
├── components/         # Componentes reutilizáveis (CardLivro, CategoriaItem, etc)
├── screens/            # Telas principais (HomeScreen, DetalhesScreen)
├── services/           # Requisições para a API do Google Books
├── App.js              # Componente principal com navegação
├── package.json        # Dependências do projeto
└── README.md           # Documentação do projeto
```

---

🛠️ Tecnologias Utilizadas

* React Native (Expo)
* React Navigation (Stack Navigator)
* Axios (requisições HTTP)
* Google Books API (fonte de dados)
* JavaScript (ES6+)
* Estilização com estilo escuro e minimalista

---

 🚀 Como Rodar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/Michel19y/livros.git
cd livros
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto com Expo**

```bash
npx expo start
```

4. **Abra no dispositivo ou emulador**

* Escaneie o QR code com o app do **Expo Go** no celular, ou
* Use o emulador Android/iOS no próprio computador

---

 🧠 Observações

* Os dados dos livros são consumidos em tempo real da **Google Books API**, sem necessidade de backend próprio.
* A home exibe categorias fixas, que são usadas como termos de pesquisa na API.
* A navegação entre telas é feita com `createStackNavigator`.
* O design foi pensado para ser limpo, escuro e de fácil leitura.

---

 📸 Captura de Tela

  ![image](https://github.com/user-attachments/assets/530b3262-4c46-4f18-a06b-e52a5b22a63e)


---

## 🔗 API Utilizada

* [Google Books API](https://developers.google.com/books)

---

## ✍️ Autor

Desenvolvido por Michel
GitHub: [@Michel19y](https://github.com/Michel19y)

---


