fetch('../ui/header2.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
