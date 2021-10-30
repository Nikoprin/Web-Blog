import React from 'react'
import MyButton from '../../../UI/Buttons/Button';
import MyInput from '../../../UI/Input/MyInput';
import NewsletterIcon from './../../../Images/Newsletter.png';
import classes from './Newsletter.module.css';
export default function Newsletter() {
    return (
        <div className={classes.newsletter}>
            <h3>Newsletter</h3>
            <div>
                <img src={NewsletterIcon} alt="Newsletter" />
            </div>
            <div>
                <p>Subscribe to the newsletter</p>
            </div>
            <div>
                <form action="/">
                    <MyInput placeholder="Type your name here" type="text"/>
                    <MyInput placeholder="Type your email here" type="email"/>
                    <MyButton>Subscribe</MyButton>
                </form>
            </div>
        </div>
    )
}
