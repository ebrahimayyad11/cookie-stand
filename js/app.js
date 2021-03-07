'use strict';

function list (location){
    let total = 0;
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.setAttribute('class' , 'sales');
    let p = document.createElement('p');
    div.appendChild(p);
    p.innerText = location;
    p.setAttribute('id' , 'p');
    let ul = document.createElement('ul');
    p.appendChild(ul);
    if(location == 'seattle'){
        let arr_seattle = [];
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
            arr_seattle += Cookies;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = seattle.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
            arr_seattle += Cookies;
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
}else if (location == 'tokyo'){
    let arr_tokyo = [];
    let time = 0;
    let a = 6;
    while(time <= 1){
        if (a <= 12 && time == 0){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = tokyo.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'am: '+Cookies+' cookies';
            a += 1;
            arr_tokyo += Cookies;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = tokyo.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
            arr_tokyo += Cookies;
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

}else if (location == 'dubai'){
    let arr_dubai = [];
    let time = 0;
    let a = 6;
    while(time <= 1){
        if (a <= 12 && time == 0){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = dubai.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'am: '+Cookies+' cookies';
            a += 1;
            arr_dubai += Cookies;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = dubai.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
            arr_dubai += Cookies;
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
}else if(location == 'paris'){
    let arr_paris = [];
    let time = 0;
    let a = 6;
    while(time <= 1){
        if (a <= 12 && time == 0){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = paris.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'am: '+Cookies+' cookies';
            a += 1;
            arr_paris += Cookies;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = paris.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
            arr_paris += Cookies;
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
}else {
    let arr_lima = [];
    let time = 0;
    let a = 6;
    while(time <= 1){
        if (a <= 12 && time == 0){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = lima.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'am: '+Cookies+' cookies';
            a += 1;
            arr_lima += Cookies;
        }else if (a <= 7 && time == 1){
            var li = document.createElement('li');
            ul.appendChild(li);
            let Cookies = lima.numOfCookies();
            total += Cookies;
            li.innerHTML = li.innerHTML+a+'pm: '+Cookies+' cookies';
            a += 1;
            arr_lima += Cookies;
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