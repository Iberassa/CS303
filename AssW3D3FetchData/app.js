const { Observable, from, of, fromEvent, Subject } = rxjs;
const { map, filter,delay } = rxjs.operators;


//Fetch data which is Asycnchronus
function fetchData() {
    const randomPP = fetch('https://randomuser.me/api/?results=10.')
        .then(res => res.json())
        .then(data => {
            personalData = data.results
            obs(personalData)
        });
}


//Assign Data name and location which is sycnchronus 
function obs(data) {
    let i = 1;
    from(data)
        .pipe(
            map(item => item)
        )
        .subscribe(personal => {
            document.querySelector('#list' + i).style.display = 'block'
            document.querySelector('#list' + i).textContent = `Name: ${personal.name.first} ${personal.name.last} and
           location: ${personal.location.street.number} ${personal.location.street.name}, ${personal.location.city}, 
           ${personal.location.country}`
            i++;
        })
}


// For button click
const cli = document.querySelector('#refresh');
const obs$ = fromEvent(cli, 'click');
obs$.subscribe(fetchData);

