import { doc_width } from './js/main.js'

fetch('./page7_PKT.html')
.then(res => res.text())
.then(text => {

    if (doc_width > 770){
        var ele = document.getElementById("top");
        ele.style.display = "none";
    }
    else{
        var ele = document.getElementById("bottom");
        ele.style.display = "none";
    }
})