import webpackLogo from "../assets/images/webpack.png";

const greeting = ( name = "none" ) => {
    const app = document.getElementById("app")
    app.classList.add("app");
    const h2 = document.createElement('h2');
    h2.innerText = `Hello ${ name }`;    

    // Image
    const image = document.createElement('img');
    image.src = webpackLogo;
    image.classList.add("logo");
    app.append( image );
    app.append( h2 );
};

export {
    greeting
};