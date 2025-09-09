// const button=document.getElementById('button');
// let value=''; 'duogh'
// const ul=document.getElementById('ul')

// button.addEventListener('click',function(){
//     value = document.getElementById('input').value;
//     console.log(value,'inputvalues')

//     const li=document.createElement('li');
//     li.textContent = value;
//     ul.appendChild(li)
// })

const input = document.getElementById('input');
const wrapper = document.getElementById('items');

function addtask() {
    if (input.value === '') {
        alert('You must write something!');
    } else {
        let div = document.createElement('div');
        div.className = 'item';

        let p = document.createElement('p');
        p.innerText = input.value;
        div.appendChild(p);


        let span = document.createElement('span')
        span.innerText='X'
        div.appendChild(span)

        wrapper.appendChild(div);
        span.onclick = function(){
            wrapper.removeChild(div)
        }
    }
    input.value = '';
}

