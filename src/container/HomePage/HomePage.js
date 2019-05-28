import React, { Component } from 'react';
import styles from "./style";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core";

class HomePage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.app }>
                <div className={classes.content}>
                    <h1>Contact Database</h1>
                    <div className={ classes.buttons }>
                        <Button variant="contained" color="primary" className={ classes.button } onClick={() => this.props.history.push('/register')}>
                            Register
                        </Button>
                        <Button variant="contained" color="primary" className={ classes.button } href="">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HomePage);