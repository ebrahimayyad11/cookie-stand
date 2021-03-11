'use strict';



let hourTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let time = ['6:00am','7:00am','8:00am','9:00am','11:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00om','4:00pm','5:00pm','6:00pm','7:00pm'];
let table = document.getElementById('table');

function town(name,min,max,avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    let cookies = [];
    this.totalCookiesPerDay = 0;
    this.totalCookiesPerHour = [];
}

town.prototype.numOfCookies = function(){
    let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
    return Math.floor(random * this.avg);
};



town.prototype.createRow = function(){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
        td1.innerText = this.name;
        td1.setAttribute('class','cookiesborder');
    tr.appendChild(td1);
  
    for(let i = 0;i < time.length;i++){
        let cookie = this.numOfCookies();
        let td = document.createElement('td');
        td.innerText = cookie;
        td.setAttribute('class','cookiesborder');
        tr.appendChild(td);

        this.totalCookiesPerHour.push(cookie);
        this.totalCookiesPerDay += cookie;
    }

    let td2 = document.createElement('td');
    td2.innerText = this.totalCookiesPerDay;
    td2.setAttribute('class','cookiesborder');
    tr.appendChild(td2);

    table.appendChild(tr);
}






let seattle = new town('seattle',23,65,6.3);
 
let tokyo = new town('tokyo',3,24,1.2);

let dubai = new town('dubai',11,38,3.7);

let paris = new town('paris',20,38,2.3);

let lima = new town('lima',2,16,4.6);

let locations = [seattle,tokyo,dubai,paris,lima];

let form = document.getElementById('addNewLocation');

form.addEventListener('submit' , function(event){
    event.preventDefault();
    table.innerHTML = "";
    

    let name = event.target.name.value;
    let min = parseInt(event.target.min.value);
    let max = parseInt(event.target.max.value);
    let avg = parseInt(event.target.avg.value);

    let locationNew = new town(name,min,max,avg);

    locations.push(locationNew);

    for(let i = 0;i < locations.length;i++){
        locations[i].totalCookiesPerDay = 0;
    }


    verify(locations);

    let perHour1 = [];
    
    cookiesPerHour(perHour1);

    totalOfTotals(locations);

    addTHead();
    
    addTFoot(perHour1);

})





function verify (locations){
    for (let i = 0;i < locations.length;i++){
        locations[i].createRow();
        
        
    }
}

verify(locations);



let perHour = [];
function cookiesPerHour(perHour){
    let h = 0;
    for (let i = 0;i< time.length;i++){
        for(let j = 0;j<locations.length;j++){
            h += locations[j].totalCookiesPerHour[i];
        }
        perHour.push(h);
        h = 0;
    }
}

cookiesPerHour(perHour);



function totalOfTotals(locations){
    let total = 0;
    for(let i = 0;i < locations.length;i++){
        total += locations[i].totalCookiesPerDay;
    }
    return total;
}

function addTHead (){
    let thead = document.createElement('thead');
    let empty = document.createElement('th');
    empty.innerText = " ";
    thead.appendChild(empty);
    for (let i = 0;i<time.length;i++){
        let th = document.createElement('th');
        th.innerText = time[i];
        thead.appendChild(th);
    }
    let total = document.createElement('th');
    total.innerText ='Daily Location Total';
    thead.appendChild(total);

    table.appendChild(thead);
}

addTHead();



function addTFoot (perHour){
    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');
    tfoot.appendChild(tr);
    let empty = document.createElement('td');
    empty.innerText = 'Totals';
    empty.setAttribute('class','cookiesborder');
    tr.appendChild(empty);
    for (let i = 0;i<perHour.length;i++){
        let td = document.createElement('td');
        td.innerText = perHour[i];
        td.setAttribute('class','cookiesborder');
        tr.appendChild(td);
    }
    let total = document.createElement('td');
    total.innerText =totalOfTotals(locations);
    total.setAttribute('class','cookiesborder');
    tr.appendChild(total);
    table.appendChild(tfoot);
}
addTFoot(perHour);



