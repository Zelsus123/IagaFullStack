import {
    FaHome,
    FaEdit,
    FaPaperPlane,
    FaCalendarAlt,
    FaFolderOpen,
    FaPencilAlt,
    FaTachometerAlt,
    FaQuestion
} from 'react-icons/fa'

export const Links = [
    {
        to: '/panel',
        text: 'Inicio',
        icon: <FaHome/>,
    },
    {
        to: '/denuncias',
        text: 'Denuncias',
        icon: <FaEdit/>
    },
    {
        to: '/solicitudes',
        text: 'Solicitudes',
        icon: <FaPaperPlane/>
    },
    {
        to: '/agenda',
        text: 'Agenda',
        icon: <FaCalendarAlt/>
    },
    {
        to: '/inspecciones',
        text: 'Inspecciones',
        icon: <FaPencilAlt/>
    },
    {
        to: '/informes',
        text: 'Informes',
        icon: <FaFolderOpen/>
    },
    {
        to: '/configuracion',
        text: 'Configuracion',
        icon: <FaTachometerAlt/>
    },
    {
        to: '/faq',
        text: 'Preguntas Frecuentes',
        icon: <FaQuestion/>
    },
];