function _load(){
  
  let element = document.getElementById("main");
  
  element.innerHTML = "<h1>wőrld</h1>";
  element.innerHTML += "<h2>európa</h2>";
  
  element.insertAdjacentHTML("beforeend", "<h3>wow,text</h3>");
  
  element.insertAdjacentHTML("beforeend", `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium recusandae iure voluptate et illo magni? Error, quod voluptas? Optio quas saepe, explicabo mollitia odit quod cumque placeat iste debitis.
    </p>
  `);

  //Ezzel az egesz elemet kitoroljuk vagy felul irjuk, sajat magat is beleertve.
  //element.outerHTML = "";
  
  //Ezt sem erdemes hasznalni, a css-nek a css-ben a helye.
  //element.style.padding = "80px";

  //Ezt nem erdemes hasznalni
  //element.className = "rootClass";
  //element.className += " welcomeClass";

  element.classList.add("rootClass");
  element.classList.add("welcomeClass");
  element.classList.add("tempClass");

  element.classList.remove("tempClass");  

  
}

//ez igy nem fog betoltodni.
//element.innerHTML = "<h1>wőrld</h1>";

//igy sem erdemes csinalni
//window.onload = _load();


window.addEventListener("load", _load);