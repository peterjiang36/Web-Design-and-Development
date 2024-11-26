onload= async function()
{
    console.log("Select menu")
    let response = await fetch("./colours.json");
    let colours = await response.json();

    let select = document.getElementById("colours");

    console.log(colours.colours);

    for(let i of colours.colours)
    {
        let new_option = document.createElement("option");
        new_option.innerHTML = i;
        select.appendChild(new_option);
    }
}