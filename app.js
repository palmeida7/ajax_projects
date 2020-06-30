const addNames=(response)=>{
    console.log(JSON.parse(request.response))
        
        let names = JSON.parse(request.response)
        let doc = document.querySelector("body")
        let list = document.createElement("ul")
        doc.append(list)
        names.forEach(name => {
            let listItems = document.createElement("li")
            list.append(listItems)
            listItems.append(name.name)
            
            let details = document.createElement("div")
            details.append(name.eye_color, name.height, name.mass)
            listItems.append(details)


            //let nameDom = document.createElement("div")
        });
   
}

const request = new XMLHttpRequest();
request.onreadystatechange =() => {
    if(request.readyState === 4 && request.status ===200){
        
        addNames(request.response)
        console.log(JSON.parse(request.response))
        
        let names = JSON.parse(request.response)
        let doc = document.querySelector("body")
        let list = document.createElement("ul")
        
        let listItems = document.createElement("li")

        // names.forEach(name => {
        let nameDom = document.createElement("div")
        nameDom.innerHTML = name.name;
            // doc.append(nameDom)



         
    }
};
request.open("GET", "./starwars_names.json");
request.send();