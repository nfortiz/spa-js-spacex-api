function Header() {

    function responsiveMenu() {
        const menu = document.querySelector('nav');
        const menuItems = menu.querySelectorAll('li a');
        const burgerButton = document.querySelector('.burger-button');

        function hideShow(){
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');
            }else {
                menu.classList.add('is-active');
            }      
        }

        //
        const ipad = window.matchMedia('screen and (max-width: 768px)');
        ipad.addListener(validation);

        function validation(event){
            if(event.matches){
                burgerButton.addEventListener('click', hideShow);
                menuItems.forEach(item => item.addEventListener('click',hideShow));
            }else {
                burgerButton.removeEventListener('click', hideShow);
                menuItems.forEach(item => item.removeEventListener('click',hideShow));

            }     
        }
        validation(ipad);
    }

    Header.didMount = () => responsiveMenu();

    return `
        <i class='burger-button'>
            <svg  fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M0 11H24V13H0zM0 2H24V4H0zM0 20H24V22H0z"/></svg>
        </i>
        <nav>
            <ul>
                <li><a href='#/'>Home</a></li>
                <li><a href='#/launches'>Launches</a></li>
                <li><a href='#/rockets'>Rockets</a></li>
                <li><a href='/'>About Me</a></li>
            </ul>
        </nav>
    `;
}

export default Header;