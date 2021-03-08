'use strict';
let hourTotal = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function list (location){
    let total = 0;
    
    let time = ['6:00am','7:00am','8:00am','9:00am','11:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00om','4:00pm','5:00pm','6:00pm','7:00pm','Daily Location Total'];
    
    let div = document.createElement('dev');
    document.body.appendChild(div);
    div.setAttribute('id' , 'dd');
    let table = document.createElement('table');
    div.appendChild(table);
    table.setAttribute('id' , 'table');

    let header = document.createElement('thead');
    table.appendChild(header);
    let title = document.createElement('tr');
    header.appendChild(title);
    let empty = document.createElement(th);
    empty.setAttribute ('width' , '65px');
    
    let body = document.createElement('tbody');
    table.appendChild(body);


    if(location == 'seattle'){

        title.appendChild(empty);
    empty.innerText = ' ';
    for(let i = 0;i < time.length ; i++){
        let hour = document.createElement('td');
        title.appendChild(hour);
        hour.innerText = time[i];
        hour.setAttribute('width' , '65px');
    }



        
        let total = 0;
        let arr_seattle = [];
    var tr = document.createElement('tr');
    body.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('width' , '65px');
    tr.appendChild(th);
    th.innerText =  location;
    for (let i =0;i <= 14;i++){
        if(i < 14){
        arr_seattle[i] = seattle.numOfCookies();
        let td = document.createElement('td');
        td.setAttribute('width' , '65px');
        td.setAttribute('class' , 'td');
        tr.appendChild(td);
        td.innerText =  arr_seattle[i]; 
            total += arr_seattle[i];
            hourTotal[i] += arr_seattle[i];
        }else{
            let tt = document.createElement('td');
            tt.setAttribute('width' , '65px');
            tt.setAttribute('class' , 'td');
    tt.innerText = total;
    tr.appendChild(tt);
     hourTotal[14] += parseInt( total);
        }
    }
    
        
}else if (location == 'tokyo'){
    let arr_tokyo = [];
    var tr = document.createElement('tr');
    body.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('width' , '65px');
    tr.appendChild(th);
    th.innerText =  location;
    for (let i =0;i <= 14;i++){
        if(i < 14){
        arr_tokyo.push(tokyo.numOfCookies());
        let td = document.createElement('td');
        td.setAttribute('width' , '65px');
        td.setAttribute('class' , 'td');
        tr.appendChild(td);
        td.innerText =  arr_tokyo[i]; 
            total += arr_tokyo[i];
            hourTotal[i] += arr_tokyo[i];
        }else{
            let tt = document.createElement('td');
            tt.setAttribute('width' , '65px');
            tt.setAttribute('class' , 'td');
    tt.innerText = total;
    tr.appendChild(tt);
    hourTotal[14] += total;
        }
    } 
    
}else if (location == 'dubai'){
    let arr_dubai = [];
    var tr = document.createElement('tr');
    body.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('width' , '65px');
    tr.appendChild(th);
    th.innerText =  location;
    for (let i =0;i <= 14;i++){
        if (i < 14){
        arr_dubai.push(dubai.numOfCookies());
        let td = document.createElement('td');
        td.setAttribute('width' , '65px');
        td.setAttribute('class' , 'td');
        tr.appendChild(td);
        td.innerText =  arr_dubai[i]; 
        total += arr_dubai[i];
        hourTotal[i] += arr_dubai[i];
    }else{
        let tt = document.createElement('td');
        tt.setAttribute('width' , '65px');
        tt.setAttribute('class' , 'td');
tt.innerText = total;
tr.appendChild(tt);
hourTotal[14] += total;
    }
    } 
}else if(location == 'paris'){
    let arr_paris = [];
    var tr = document.createElement('tr');
    body.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('width' , '65px');
    tr.appendChild(th);
    th.innerText =  location;
    for (let i =0;i <= 14;i++){
        if (i < 14){
        arr_paris.push(paris.numOfCookies());
        let td = document.createElement('td');
        td.setAttribute('width' , '65px');
        td.setAttribute('class' , 'td');
        tr.appendChild(td);
        td.innerText =  arr_paris[i]; 
            total += arr_paris[i];
            hourTotal[i] += arr_paris[i];
        }else{
            let tt = document.createElement('td');
            tt.setAttribute('width' , '65px');
            tt.setAttribute('class' , 'td');
    tt.innerText = total;
    tr.appendChild(tt);
    hourTotal[14] += total;
        }
    } 
}else {
    let arr_lima = [];
    var tr = document.createElement('tr');
    body.appendChild(tr);
    var th = document.createElement('th');
    th.setAttribute('width' , '65px');
    tr.appendChild(th);
    th.innerText =  location;
    for (let i =0;i <= 14;i++){
        if(i < 14){
        arr_lima.push(lima.numOfCookies());
        let td = document.createElement('td');
        td.setAttribute('width' , '65px');
        td.setAttribute('class' , 'td');
        tr.appendChild(td);
        td.innerText =  arr_lima[i]; 
            total += arr_lima[i];
            hourTotal[i] += arr_lima[i];
    }else{
        let tt = document.createElement('td');
        tt.setAttribute('width' , '65px');
        tt.setAttribute('class' , 'td');
tt.innerText = total;
tr.appendChild(tt);
hourTotal[14] += total;
    } 
}

let footer = document.createElement('tfoot');
table.appendChild(footer);
let finalR = document.createElement('tr');
footer.appendChild(finalR);
let totalTH = document.createElement('th');
finalR.appendChild(totalTH);
totalTH.innerText = 'Totals';
for(let i = 0;i < hourTotal.length ; i++){
    let totalll = document.createElement('td');
    totalll.setAttribute('class' , 'td');
    finalR.appendChild(totalll);
    totalll.innerText = hourTotal[i];
}

    
}
}

function town(name,min,max,avg){
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
}

town.prototype.numOfCookies = function(){
    let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
    return Math.floor(random * this.avg);
};

let seattle = new town('seattle',23,65,6.3);
 
let tokyo = new town('tokyo',3,24,1.2);

let dubai = new town('dubai',11,38,3.7);

let paris = new town('paris',20,38,2.3);

let lima = new town('lima',2,16,4.6);






list(seattle.name);
list(tokyo.name);
list(dubai.name);
list(paris.name);
list(lima.name);