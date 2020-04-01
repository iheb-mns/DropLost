import React, {Component} from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import image from "assets/img/bg7.jpg";
import axios from "axios";
import {makeStyles} from '@material-ui/core/styles';

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default class LoginPage extends Component {
    constructor(props) {

        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }

        this.classes = {
            useStyles
        }

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks/>}
                    props

                />
                <div className={this.classes.pageHeader}
                     style={{
                         backgroundImage: "url(" + image + ")",
                         backgroundSize: "cover",
                         backgroundPosition: "top center"
                     }}
                >
                    <div className={this.classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card>
                                    <form onSubmit={this.onSubmit}>
                                        <CardHeader color="primary">
                                            <h4>Login</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <input type="text"
                                                   required
                                                   className="form-control"
                                                   value={this.state.username}
                                                   onChange={this.onChangeUsername}
                                            />
                                        </CardBody>
                                        <CardFooter className={this.classes.cardFooter}>
                                            <input type="submit" value="Create User" className="btn btn-primary"/>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont/>
                </div>
            </div>
        );
    }
}
