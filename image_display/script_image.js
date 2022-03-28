

function img(){
    fetch('https://picsum.photos/200/300').then((data)=>{
        console.log(data.url)
        let t=data.url
        let b = document.getElementById('img_display');

            b.setAttribute('src',t);
    });
}
