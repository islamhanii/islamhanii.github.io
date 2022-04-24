class Creator {
    main = document.getElementById("main");
    defaultTitle = "Bookstore | ";
    
    setTitle(name) {
        document.title = this.defaultTitle + name;

        this.main.innerHTML = "";
        let title = document.createElement('h1');
        title.classList.add('mb-4', 'text-center');
        title.innerHTML = name;
        main.appendChild(title);
    }

    allBooks(books) {
        let container = document.createElement('div');
        container.classList.add('items-table', 'row');
        
        books.forEach(book => {
            container.innerHTML+= '<div class="col-lg-3 col-md-4 col-sm-6" onclick="publisher(\'http://127.0.0.1:8000/api/books/show/' + book.id + '\')"><div class="card text-white bg-dark mb-3" role="button"><a class="overflow-hidden"><img src="' + book.image + '" class="card-img-top " alt="' + book.name + '"></a><div class="card-body"><h5 class="card-title"><a class="link-warning">' + book.name + '</a></h5><p class="card-text">' + book.description + '</p></div><div class="card-footer"><small class="text-muted"> ' + book.cat_id.name + '</small></div></div></div>' 
        });
    
        main.appendChild(container);
    }

    run(url, data) {
        if(url.includes("books/show")) {
            this.setTitle("Show " + data.data.name + " Book");
            this.allBooks(data.data);
        }
        else if(url.includes("books")) {
            this.setTitle("All Books");
            this.allBooks(data.data);
        }
    }
}