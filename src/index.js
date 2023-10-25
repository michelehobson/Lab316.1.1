// import "./styles.css";

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' }
];

let mainEL = document.querySelector( 'main' );
mainEL.style.backgroundColor = 'var(--main-bg)'

const h1 = document.querySelector( 'h1' );
// mainEL.innerHTML = h1.innerHTML;
mainEL.append( h1 );
mainEL.classList.add( 'flex-ctr' )


let topMenuEl = document.querySelector( '#top-menu' );
topMenuEl.classList.add('flex-around' )
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

for ( let link of menuLinks ) {
    let newlink = document.createElement( 'a' )
    newlink.textContent = link.text
    newlink.setAttribute( 'href', link.href )
    topMenuEl.append( newlink );
}
