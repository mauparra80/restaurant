
const clear = function() 
{
    const content = document.querySelector(".content");

    content.innerHTML = "";


    const box1 = document.createElement("div");
    box1.id="box1";
    const box2 = document.createElement("div");
    box2.id="box2";
    content.appendChild(box1);
    content.appendChild(box2);
}

export default clear;