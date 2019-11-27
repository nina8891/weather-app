import React from 'react'
import classes from './form.module.css'

const Form = props =>(
    <form 
        className={classes.Form}
        onSubmit={props.weatherMethod}
    >
        <input type="text" name="city" placeholder="City..." />
        <button>Get forecast</button>
    </form>
)

export default Form