
interface NavItemProps {
    name : string,
    url : string,
};


// cons

export const NavItems : NavItemProps[] = [
    {
        name : 'Home',
        url : '/'
    },
    {
        name : 'About',
        url : '/about'
    },
    {
        name : 'Projects',
        url : '/projects'
    },
    {
        name : 'Contact',
        url : '/contact'
    },
]