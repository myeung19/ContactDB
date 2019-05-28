import React, { Component } from 'react';
import styles from "./style";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.app }>
                <div className={ classes.content }>
                    <h1>Contact Database</h1>
                    <div className={ classes.buttons }>
                        <Button
                            variant="contained"
                            color="primary"
                            className={ classes.button }
                            to="/register"
                            component={ Link }
                        >
                            Register
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            className={ classes.button }
                            to="/signin"
                            component={ Link }
                        >
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);