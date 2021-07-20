
function getData() {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            const html= data.results.map(ele=>{
              return `
              <div class="post"> 
              <img src="${ele.picture.large}"/>
              <p id='name' >${ele.name.first} ${ele.name.last}</p>
              <p id='phone'>Phone: ${ele.phone}</p>
              <p id='email'>Email: ${ele.email}</P>
              </div>
              <hr>
              `  
            }).join("");
                posts.innerHTML=html
        })
}


getData()
document.getElementById('refresh').addEventListener('click',getData)