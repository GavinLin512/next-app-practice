// in src/MyMenu.js
import { Menu } from 'react-admin';
import React, {useState} from "react";
import {Collapse, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {menuConfig} from "@/components/menu/MenuConfig";
import {Box} from "@mui/system";

export function hasChildren(item) {
    const { items: children } = item;

    if (children === undefined) {
        return false;
    }

    if (children.constructor !== Array) {
        return false;
    }

    return children.length !== 0;
}

const MenuItem = ({ item }) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
    return (
        !item.level?
        <Menu.Item to={item.to} primaryText={item.title} leftIcon={item.icon} />
            :
            <Menu.Item sx={{ paddingLeft: 4 }} to={item.to} primaryText={item.title} leftIcon={item.icon} />
        // <ListItem button>
        //     <ListItemIcon>{item.icon}</ListItemIcon>
        //     <ListItemText primary={item.title} />
        // </ListItem>
    );
};

const MultiLevel = ({ item }) => {
    const { items: children } = item;
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault(); // 避免展開選單第一層執行畫面轉導
        setOpen((prev) => !prev);
    };

    return (
        <React.Fragment>
            {/* 展開選單 to 預設#，若預設空白則會 active */}
            <Menu.Item button onClick={handleClick} to={item.to??'#'} primaryText={item.title} leftIcon={open ? <ExpandMoreIcon /> : item.icon} />
            {/*<ListItem button onClick={handleClick}>*/}
            {/*    <ListItemIcon>{open ? <ExpandMoreIcon /> : item.icon}</ListItemIcon>*/}
            {/*    <ListItemText primary={item.title} />*/}
            {/*</ListItem>*/}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children.map((child, key) => (
                        <MenuItem key={key} item={child} />
                    ))}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

// export const MyMenu = () => (
//     <Menu>
//         <Menu.Item to="/client/applicant" primaryText="Miscellaneous" leftIcon={<LabelIcon />}/>
//         <Menu.Item to="/client/manager" primaryText="posts" leftIcon={<LabelIcon />}/>
//         <Menu.Item to="/client/agent" primaryText="comments" leftIcon={<LabelIcon />}/>
//         <Menu.Item to="/asd" primaryText="users" leftIcon={<LabelIcon />}/>
//     </Menu>
// );

function MyMenuMap() {
    return menuConfig.map((item, key) =>  <MenuItem key={key} item={item} />);
}

export const MyMenu = () => (
    <>
        <Box sx={{
            paddingTop: 0
        }}></Box>
        <MyMenuMap></MyMenuMap>
    </>
)