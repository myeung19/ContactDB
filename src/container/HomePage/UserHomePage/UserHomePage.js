import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import store from "../../../stores/store";
import axios from "../../../util/Util";
import { logout } from "../../../actions/action";
import { connect } from "react-redux";
import styles from "./style";
import { withStyles } from "@material-ui/core"
import ProgressBar from "../../../component/ProgressBar/ProgressBar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ProfileIcon from '@material-ui/icons/PermIdentity';
import ContactIcon from '@material-ui/icons/Contacts';
import GalleryIcon from '@material-ui/icons/InsertPhoto';
import SettingIcon from '@material-ui/icons/Settings';
import AdminIcon from '@material-ui/icons/SupervisorAccount'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import ProfilePage from "../../ProfilePage/ProfilePage";
import ContactPage from "../../ContactPage/ContactPage";
import GalleryPage from "../../GalleryPage/GalleryPage";
import SettingPage from "../../SettingPage/SettingPage";
import AdminPage from "../../AdminPage/AdminPage";

const list = [{
    name: "Profile",
    icon: <ProfileIcon />,
}, {
    name: "Contact",
    icon: <ContactIcon />
}, {
    name: "Gallery",
    icon: <GalleryIcon />
}, {
    name: "Setting",
    icon: <SettingIcon />
}];

class UserHomePage extends Component {
    state = {
        data: null,
        currentPage: "Profile"
    };

    componentDidMount() {
        const cred = store.getState().cred;
        console.log(cred);
        const { username } = this.props.match.params;
        axios.get("/user/" + username.toString(), {
            auth: cred
        }).then(res => {
            console.log(res.data);
            this.setState({
                data: res.data,
                roles: res.data.roles
            })
        })
    }

    pageItemOnClick = (page) => {
        this.setState({
            currentPage: page
        });
    };

    render() {
        const { data, roles, currentPage } = this.state;
        const { classes } = this.props;

        if (store.getState().isLogin === false) {
            return <Redirect to="/" />
        }

        if (!data) {
            return <ProgressBar />;
        }

        let mainContent = null;
        switch (currentPage) {
            case "Profile":
                mainContent = <ProfilePage data={ data } />;
                break;
            case "Contact":
                mainContent = <ContactPage data={ data.contacts } />;
                break;
            case "Gallery":
                mainContent = <GalleryPage />;
                break;
            case "Setting":
                mainContent = <SettingPage />;
                break;
            case "Admin":
                mainContent = <AdminPage />;
                break;
        }

        return (
            <div className={ classes.root }>
                { !data ? (
                        <div className={ classes.progressBar }>
                            <ProgressBar />
                        </div>) :
                    (
                        <>
                            <AppBar position="fixed" className={ classes.appBar }>
                                <Toolbar>
                                    <Typography variant="h6" noWrap>
                                        { `${ data.username }'s database` }
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                className={ classes.drawer }
                                variant="permanent"
                                classes={ {
                                    paper: classes.drawerPaper,
                                } }
                            >
                                <div className={ classes.toolbar } />
                                <List>
                                    { list.map((el, index) => (
                                        <ListItem
                                            button
                                            key={ index }
                                            onClick={ () => this.pageItemOnClick(el.name) }
                                        >
                                            <ListItemIcon>
                                                { el.icon }
                                            </ListItemIcon>
                                            <ListItemText primary={ el.name } />
                                        </ListItem>
                                    )) }
                                    { roles.includes("ADMIN") ? (
                                        <ListItem
                                            button
                                            key={ 5 }
                                            onClick={ () => this.pageItemOnClick("Admin") }
                                        >
                                            <ListItemIcon>
                                                <AdminIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Admin" />
                                        </ListItem>
                                    ) : null }
                                    <ListItem
                                        button
                                        key={ 6 }
                                        onClick={ () => {
                                            this.props.logout();
                                            this.setState({ data: null })
                                        } }
                                    >
                                        <ListItemIcon>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Logout" />
                                    </ListItem>
                                </List>
                            </Drawer>
                            <main className={ classes.content } style={ { marginTop: 50 } }>
                                { mainContent }
                            </main>
                        </>
                    )
                }
            </div>

        );
    }
}

const mapDispatchToProps = {
    logout
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(UserHomePage));