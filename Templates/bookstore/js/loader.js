class Loader {
    myRequest = new XMLHttpRequest();
    pageURL = "";

    dataLoader(url = this.pageURL) {
        if(url !== this.pageURL) {
            this.pageURL = url;
            this.myRequest.onreadystatechange = function() {
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
}