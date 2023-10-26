// DECLARATIONS
const menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' }
        ]
    },
];

let mainEL = document.querySelector( 'main' );
mainEL.style.backgroundColor = 'var(--main-bg)'
const h1 = document.querySelector( 'h1' );
mainEL.append( h1 );
mainEL.classList.add( 'flex-ctr' );

let topMenuEl = document.querySelector( '#top-menu' );
topMenuEl.classList.add( 'flex-around' );
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

let subMenuEl = document.querySelector( '#sub-menu' );
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg';
subMenuEl.classList.add( 'flex-around' );
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0'

const aboutH1 = document.createElement( 'h1' );

let active = '';

let topMenuLinks = loadMainMenu();
active = concatClasses();

// FUNCTIONS
let buildSubmenu = ( ...arr ) => {
    subMenuEl.innerHTML = '';
    let i = 0;
    for ( const objs in arr[ 0 ] ) {
        let sl = document.createElement( 'a' );
        sl.textContent = arr[ 0 ][ i ].text;
        sl.setAttribute( 'href', arr[ 0 ][ i ].href );
        subMenuEl.append( sl )
        i++;
    }
}

function concatClasses() {
    let nav = document.querySelector( '#top-menu' );
    let classesToAdd = [ 'nav', 'a.active' ]

    classesToAdd.forEach( function ( token, index ) {
        active += index + " " + token
    } )
    return active;
}

function loadMainMenu() {
    for ( let link of menuLinks ) {
        let newlink = document.createElement( 'a' );
        newlink.textContent = link.text;
        newlink.setAttribute( 'href', link.href );
        topMenuEl.append( newlink );
    }
    return topMenuEl;
}

// EVENT LISTENERS
subMenuEl.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    if ( e.target.tagName !== 'A' ) {
        return;
    }
    subMenuEl.style.top = '0';
    h1.innerText = e.target.text;
    let menuLinks2 = document.querySelectorAll( 'a' )
    for ( let link2 of menuLinks2 ) {
        if ( link2.classList.contains( 'active' ) ) {
            link2.classList.remove( 'active' );
            subMenuEl.style.top = '0';
        }
    }
    console.log( e.target )  //REQUIREMENT OF #5
} )

topMenuLinks.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    if ( e.target.tagName !== 'A' ) {
        return;
    }

    if ( e.target.text === 'about' && !e.target.classList.contains( 'active' )) {
        aboutH1.innerText = 'About'
        topMenuLinks.insertAdjacentElement( 'afterend', aboutH1 )
    } else {
        aboutH1.remove();
    }

    console.log( e.target )  //REQUIREMENT OF #4
    e.target.classList.toggle( 'active' );
    if ( !e.target.classList.contains( 'active' ) ) {
        subMenuEl.style.top = '0';
    }

    let menuLinks2 = document.querySelectorAll( 'a' )
    let i = 0;
    for ( let link2 of menuLinks2 ) {
        if ( e.target !== link2 && link2.classList.contains( 'active' ) ) {
            link2.classList.remove( 'active' );
            subMenuEl.style.top = '0';
        }
        if ( link2.classList.contains( 'active' ) && e.target.text !== 'about' ) {
            subMenuEl.style.top = '100%';
            buildSubmenu( menuLinks[ i ].subLinks );
        }
        i++;
    }
} )
