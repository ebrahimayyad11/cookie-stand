'use strict';

function list (location){
    let total = 0;
    let div = document.createElement('div');
    document.body.appendChild(div);
    let h3 = document.createElement('h3');
    div.appendChild(h3);
    h3.innerText = location;
    h3.setAttribute('id' , 'h3');
    let ul = document.createElement('ul');
    h3.appendChild(ul);
    let time = 0;
    let a = 6;
    while(time <= 1){
        if (a <= 12 && time == 0){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = seattle.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'am: '+Cookies+' cookies';
            a += 1;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = seattle.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
        }else {
            a = 1;
            time += 1;
        }

        if (time == 2){
            let li1 = document.createElement('li');
            ul.appendChild(li1);
            li1.innerText = 'total: '+total;
        }
    }
}

let seattle = {
    name : 'seattle',
    min : 23 ,
    max : 65 ,
    avg : 6.3 ,

    numOfCookies : function() {
        let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
        return Math.floor(random * this.avg);
    }
};



let tokyo = {
    name : 'tokyo',
    min : 3 ,
    max : 24 ,
    avg : 1.2 ,
    numOfCookies : function() {
        let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
        return Math.floor(random * this.avg);
    }
};




let dubai = {
    name : 'dubai',
    min : 11 ,
    max : 38 ,
    avg : 3.7 ,
    numOfCookies : function() {
        let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
        return Math.floor(random * this.avg);
    }
};



let paris = {
    name : 'paris',
    min : 20 ,
    max : 38 ,
    avg : 2.3 ,
    numOfCookies : function() {
        let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
        return Math.floor(random * this.avg);
    }
};



let lima = {
    name : 'lima',
    min : 2 ,
    max : 16 ,
    avg : 4.6 ,
    numOfCookies : function() {
        let random = Math.floor(Math.random() * (this.max - this.min))+this.min;
        return Math.floor(random * this.avg);
    }
};



list(seattle.name);
list(tokyo.name);
list(dubai.name);
list(paris.name);
list(lima.name);