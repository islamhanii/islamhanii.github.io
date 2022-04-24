class Loader {
    myRequest = new XMLHttpRequest();
    pageURL = "http://127.0.0.1:8000/api/books";

    dataLoader(url = this.pageURL) {
        this.myRequest.onreadystatechange = function() {
            console.log(url);
            if(this.readyState === 4 && this.status === 200) {
                let pageCreator = new Creator();
                let data = JSON.parse(this.responseText);
                pageCreator.run(url, data);
            }
        };
    
        this.myRequest.open(
            'GET',
            url,
            true);
        
        this.myRequest.send();
    }
}