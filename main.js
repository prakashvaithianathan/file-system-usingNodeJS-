const container = document.querySelector('.container');
const ul = document.querySelector('.ul');
const cDrive = document.querySelector('#c');
const dDrive = document.querySelector('#d');
const eDrive = document.querySelector('#e')


cDrive.addEventListener('click',filesAndFolder);
dDrive.addEventListener('click',filesAndFolder);
eDrive.addEventListener('click',filesAndFolder);



function filesAndFolder(){
    let drive = this.id;

    while (ul.hasChildNodes()) {  
        ul.removeChild(ul.firstChild);
      }
   

const url = `http://b2667f6b77f1.ngrok.io/${drive}:`;



fetch(url).
then(data =>{
    return data.json()
}).
then(data=>{
    
   const result = data;

   result.forEach(data=>{
    const div = document.createElement('div');
    div.setAttribute('class', 'div')
    ul.appendChild(div);

    if(data.includes(".txt")){
         const icon = document.createElement('i');
         icon.style.color = 'black';
         icon.setAttribute('class','fas fa-file-alt')
         const li = document.createElement('li');
         li.setAttribute('class','li')
         li.innerHTML = data;
         div.appendChild(icon);
         div.appendChild(li);
    }else if(data.includes(".mp4")){
        const icon = document.createElement('i');
        icon.style.color = 'green';
        icon.setAttribute('class','fas fa-file-video')
        const li = document.createElement('li');
        li.setAttribute('class','li')
        li.innerHTML = data;
        div.appendChild(icon);
        div.appendChild(li);
    }
    else if(data.includes(".sys")){
        const icon = document.createElement('img');
        icon.style.color = 'green';
        icon.setAttribute('src','sys.png');
        icon.style.width="15px";
        const li = document.createElement('li');
        li.setAttribute('class','li')
        li.innerHTML = data;
        div.appendChild(icon);
        div.appendChild(li);
    }
    
    else{
        const icon = document.createElement('i');
        icon.style.color = 'rgb(211,159,9)';
        icon.setAttribute('class','fas fa-folder')
        const li = document.createElement('li');
        li.setAttribute('class','li')
        li.innerHTML = data;
        div.appendChild(icon);
        div.appendChild(li);
    }
    
    
   
   })
   
   
})
.catch(err=>{console.log(err)})

}