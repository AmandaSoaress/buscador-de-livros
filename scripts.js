function buscador() {
    var valorDoInput = document.getElementById('opcaoBooks').value;
    var livroDoAutorDigitado = buscaPorAutor(valorDoInput)

    document.getElementById('divResposta').innerHTML = ""

    if (livroDoAutorDigitado.length) {

        for(livro of livroDoAutorDigitado) {
            document.getElementById("divResposta").innerHTML += `${livro.title} </br>`
        }

    } else {
        document.getElementById('divResposta').innerHTML = "Não tem livro deste autor!"
    }
}

// [{ titulo: 'livro 1', 'author': 'david' }, { titulo: 'livro 2', 'authot': 'amanda' }]
// { titulo: 'livro 1', 'author': 'david' }



// { categoria: 'riqueza'}
// { categoria: 'int emocional'}
// [ { categoria: 'riqueza'}, { categoria: 'int emocional'} ]


// { categoria: 'riqueza', livros: [{ titulo: 'livro 1', 'author': 'david' }, { titulo: 'livro 2', 'authot': 'amanda' }] }
// { categoria: 'int emocional', livros: [{ titulo: 'livro 2', 'author': 'david' }, { titulo: 'livro 3', 'authot': 'amanda' }] }
// [{ categoria: 'int emocional', livros: [{ titulo: 'livro 2', 'author': 'david' }, { titulo: 'livro 3', 'authot': 'amanda' }] }, { categoria: 'int emocional', livros: [{ titulo: 'livro 2', 'author': 'david' }, { titulo: 'livro 3', 'authot': 'amanda' }] } ]
const LivrosCategorias = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function meusArquivos() {
    const totalCategorias = LivrosCategorias.length;
    let todosAutoresSemRepetir = []

    var livrosDoAugusto = []

    for (let Categoria of LivrosCategorias) {
        console.log(`Total de livros da categoria ${Categoria.category}: ${Categoria.books.length}`);
        const livros = Categoria.books

        for (let livro of livros) {

            let jaTemEsteAuthor = todosAutoresSemRepetir.includes(livro.author)
            if (jaTemEsteAuthor === false) {
                todosAutoresSemRepetir.push(livro.author);
            }

            // verificar livros do Augusto Cury
            if (livro.author == 'Augusto Cury') {
                livrosDoAugusto.push(livro);
            }

        }

    }

    console.log('Total de autores ', todosAutoresSemRepetir.length);
    console.log('Livros do Augusto Cury são', livrosDoAugusto);
}

function buscaPorAutor(autor) {
    let livrosPorAutor = []

    for (let Categoria of LivrosCategorias) {
        const livros = Categoria.books

        for (let livro of livros) {

            // verificar livros do Augusto Cury
            if (livro.author == autor) {
                livrosPorAutor.push(livro);
            }

        }

    }

    //  console.log(`Livros do ${autor} são`, livrosPorAutor);
    return livrosPorAutor
}
// // executa a funcao automaticamente
// meusArquivos()