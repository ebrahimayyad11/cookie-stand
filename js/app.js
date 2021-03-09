'use strict';

let hourTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let time = ['6:00am','7:00am','8:00am','9:00am','11:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00om','4:00pm','5:00pm','6:00pm','7:00pm'];
let table = document.getElementById('table');

function town(name,min,max,avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.totalCookiesPerDay = 0;
    this.totalCookiesPerHour = [];
}

town.prototype.numOfCookies = function(){
    let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
    this.totalCookiesPerHour.push(Math.floor(random * this.avg));
};

town.prototype.totalPerDay = function(){
    for(let i = 0;i< this.cookies.length;i++){
        this.totalCookiesPerDay += this.cookies[i];
    }
}



town.prototype.createRow = function(){

}




let seattle = new town('seattle',23,65,6.3);
 
let tokyo = new town('tokyo',3,24,1.2);

let dubai = new town('dubai',11,38,3.7);

let paris = new town('paris',20,38,2.3);

let lima = new town('lima',2,16,4.6);

let locations = [seattle,tokyo,dubai,paris,lima];


function cookiesPerHour(){
    let hour = [];
    for (let i = 0;i< time;){
        for(let j = 0;j<locations.length;i++){
            hour[i] = locations[j].totalCookiesPerHour[i];
        }
    }
    return hour;
}


function totalOfTotals(){
    let total = 0;
    for (let i = 0;i < locations.length;i++){
        total += locations[i].totalCookiesPerDay;
    }
    return total;
}

(function addTHead (){
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
})();


(function addTFoot (){
    let hour = cookiesPerHour();
    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');
    tfoot.appendChild(tr);
    let empty = document.createElement('td');
    empty.innerText = 'Totals';
    tr.appendChild(empty);
    for (let i = 0;i<hour.length;i++){
        let td = document.createElement('td');
        td.innerText = hour[i];
        tr.appendChild(td);
    }
    let total = document.createElement('td');
    total.innerText =totalOfTotals();
    tr.appendChild(total);

    table.appendChild(tfoot);
})();


