class Creator {
    main = document.getElementById("main");
    defaultTitle = "Bookstore | ";
    
    setTitle(name) {
        document.title = this.defaultTitle + name;

        this.main.innerHTML = "";
    }

    allBooks(books) {
        let header = document.createElement('h1');
        header.classList.add('mb-4', 'text-center');
        header.innerHTML = "All Books";
        main.appendChild(header);

        let container = document.createElement('div');
        container.classList.add('items-table', 'row');
        
        books.forEach(book => {
            container.innerHTML += '<div class="col-lg-3 col-md-4 col-sm-6" onclick="publisher(\'http://127.0.0.1:8000/api/books/show/' + book.id + '\')"><div class="card text-white bg-dark mb-3" role="button"><a class="overflow-hidden"><img src="' + book.image + '" class="card-img-top " alt="' + book.name + '"></a><div class="card-body"><h5 class="card-title"><a class="link-warning">' + book.name + '</a></h5><p class="card-text">' + book.description + '</p></div><div class="card-footer"><small class="text-muted"> ' + book.cat_id.name + '</small></div></div></div>' 
        });
    
        this.main.appendChild(container);
    }

    viewBook(book) {
        this.main.innerHTML += '<div class="row"><div class="col-md-5 mb-4 order-md-2"><img class="img-max w-100" src="' + book.image + '" alt="' + book.name + '"></div><div class="col-md-7 mb-4 order-md-1"><div class="d-flex justify-content-between align-items-center flex-wrap"><h1>' + book.name + '</h1><h4 class="text-primary" role="button"><a class="text-decoration-none">(' + book.cat_id.name + ')</a></h4></div><p>By <strong>' + book.author + '</strong></p>' + book.description.replace("\r\n","<br>") + '<p></p><p>Created at: <small>' + book.created_at + '</small></p><p>Updated at: <small>' + book.updated_at + '</small></p><a onclick="publisher(\'http://127.0.0.1:8000/api/books\')"><button class="btn btn-primary">Back</button></a></div></div>'
    }

    run(url, data) {
        
        if(url === "http://127.0.0.1:8000/api/books") {
            this.setTitle("All Books");
            this.allBooks(data.data);
        }
        else if(url.includes("books/show/")) {
            this.setTitle(data.data.name + " Book");
            this.viewBook(data.data);
        }
    }
}