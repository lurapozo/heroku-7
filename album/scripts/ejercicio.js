let ejecutarCodigo = () => {
    //window.alert('Hola, mundo!')
    let titulo = document.getElementById('titulo1');
    titulo.textContent = "Album de fotos";
    let texto = document.getElementsByClassName('text-muted');
    elemento = texto[1];
    elemento.innerHTML =  `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`;
    let par = document.getElementsByTagName('p');
    par[2].setAttribute('class', 'd-none');
    let listIMG = [ { url:"https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "camino"}, { url:"https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "energia"}, { url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt: "papá"}, {url:"https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:""}, {url:"https://images.unsplash.com/photo-1654026633377-d8d55a494481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", alt:""}, {url:"https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:""}, {url:"https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:""}, {url:"https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:""}, {url:"https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", alt:""} ];
    for(i in listIMG){
        let img = document.createElement('img');
        let iterable = document.getElementsByTagName('svg')[1];
        console.log(i);
        img.src = listIMG[i].url;
        img.alt = listIMG[i].alt;
        iterable.replaceWith(img);
    }

};

ejecutarCodigo();
