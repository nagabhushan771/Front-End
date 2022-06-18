const toggles = document.querySelectorAll('.toggle');

const good = document.querySelector('#good');
const fast = document.querySelector('#fast');
const cheap = document.querySelector('#cheap');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    transformFunc(e.target);
}))

function transformFunc(theClickedOne){
    if(good.checked && fast.checked && cheap.checked){
        if(theClickedOne == good)
            fast.checked = false;
        if(theClickedOne ==fast)
            cheap.checked = false;
        if(theClickedOne == cheap)
            good.checked = false
    }
}