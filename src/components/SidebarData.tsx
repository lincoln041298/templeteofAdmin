import { icon } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/dashboard',
        icon:    <FontAwesomeIcon icon={faHouse} />,
        subNav: [
            {
                title: 'Overview1',
                icon:   <FontAwesomeIcon icon={faWaveSquare} />
            },
            {
                title: 'Overview2',
                icon:   <FontAwesomeIcon icon={faWaveSquare} />
            },
            {
                title: 'Overview3',
                icon:   <FontAwesomeIcon icon={faWaveSquare} />
            },
            {
                title: 'Overview4',
                icon:   <FontAwesomeIcon icon={faWaveSquare} />
            }
        ]
    },
    {
        title: 'Menu Layout',
        path: '/dashboard',
        icon:    <FontAwesomeIcon icon={faHouse} />
    },
    {
        title: 'E-Commerce',
        path: '/dashboard',
        icon:    <FontAwesomeIcon icon={faHouse} />
    },
    {
        title: 'Inbox',
        path: '/dashboard',
        icon:    <FontAwesomeIcon icon={faHouse} />
    },
    {
        title: 'File Manager',
        path: '/dashboard',
        icon:    <FontAwesomeIcon icon={faHouse} />
    },
]