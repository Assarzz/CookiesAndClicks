function increment(e){

    console.log(e);
    let temp = Number(document.getElementById("count").innerHTML)+1;
    document.cookie = "clickCount="+ temp+ "; expires=Sun";
    e.target.innerHTML = Number(e.target.innerHTML) +1;


    
}

window.onload = new function(){

    if (document.cookie.includes("clickCount")){
        console.log(document.cookie);
        let temp = document.cookie.split("=");
        document.getElementById("count").innerHTML = Number(temp[1]);

    }
    else{
        document.cookie = "clickCount=0; expires=Sun"
        document.getElementById("count").innerHTML = 0;
    }
}
