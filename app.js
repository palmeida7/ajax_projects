const request = new XMLHttpRequest();
request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status ===200){
        console.log(JSON.parse(request.response))
        let names = JSON.parse(request.response)
        let doc = document.querySelector("body")
        let list = document.createElement("ul")
            console.log(list)

        names.forEach(name => {
            let nameDom = document.createElement("div")
            nameDom.innerHTML = name.name;
            doc.append(nameDom)
        });
        
    }
};
request.open("GET", "./starwars_names.json");
request.send();