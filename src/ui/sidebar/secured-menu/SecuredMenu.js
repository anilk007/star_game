import React from 'react';
import routes from '../../../shared/routes/Route';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



import { Link, useRouteMatch } from 'react-router-dom';
function ListItemLink(props) {
    const { icon, primary, to } = props;

    const CustomLink = React.useMemo(
        () =>
            React.forwardRef((linkProps, ref) => (
                <Link ref={ref} to={to} {...linkProps} />
            )),
        [to],
    );

    return (
        <li>
            <ListItem button component={CustomLink}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}



const SecuredMenu = () => {
    const { url } = useRouteMatch();
    return (<>
        <List>
            {routes.map((route, index) => (
                <ListItemLink key={route.title} icon={route.icon} primary={route.title} to={`${url}${route.path}`} />
            ))}
        </List>
    </>);
}

export default SecuredMenu;