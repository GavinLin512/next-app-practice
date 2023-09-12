import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import StorefrontIcon from '@mui/icons-material/Storefront'
import GavelIcon from '@mui/icons-material/Gavel';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


export const menuConfig = [
    {
        icon: <PersonAddAlt1Icon />,
        title: '發起人預覽',
        to: '/client/applicant'
    },
    {
        icon: <PersonSearchIcon />,
        title: '部門主管預覽',
        to: '/client/manager'
    },
    {
        icon: <SupportAgentIcon />,
        title: '管理檢閱預覽',
        to: '/client/agent'
    },
    {
        icon: <StorefrontIcon />,
        title: '供應商填寫畫面預覽',
        items: [
            {
                icon: <GavelIcon />,
                title: '法人',
                to: '/supplier/supplier?type=1',
                level: 2
            },
            {
                icon: <EmojiPeopleIcon />,
                title: '自然人',
                to: '/supplier/supplier?type=2',
                level: 2
            },
        ]
    },
]