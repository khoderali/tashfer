let text = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

text.addEventListener("input", ()=>{
    add();
});
select.addEventListener("change", ()=>{
    add();
})
function add(){
    if (select.value == "decode"){
        result.value = window.atob(text.value);

    }else {
        result.value = window.btoa(text.value);

    }
};