

// 코드 패키징

const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll(".codePackaging section article");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        activation(i , btns);
        activation(i , boxs);
    })
}

function activation(index , list) {
    for(let el of list) {
        el.classList.remove("on");
    }

    list[index].classList.add ("on");
}
/*
const link = document.querySelector ("a");
const link_href = link.getAttribute ("href");
console.log (link_href);
*/
const link = document.querySelector ("a");
const new_href = "http://www.daum.net";
link.setAttribute ("href" , new_href);

const ver = navigator.userAgent;
console.log (ver);
