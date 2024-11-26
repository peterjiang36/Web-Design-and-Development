onload=async function(){
    const request = await this.fetch("./items.json");
    const shop_items = await request.json();

    let shop_div = document.getElementById("shop");

    for(let i of shop_items.items){
        let div = document.createElement("div");
        let name = document.createElement("h2");
        let price = document.createElement("p");

        name.innerHTML = i.name;
        price.innerHTML = "$"+i.price;

        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(document.createElement("hr"));

        shop_div.appendChild(div);
    }
}