import { FormControl, FormHelperText, Input, InputLabel, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import ActionWrapper from "./wrapper/action-wrapper";
// import { Form } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



export default function CreateQuestion(props) {
    const classes = useStyles();

    return <ActionWrapper>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                onKeyDown={
                    (event) => {
                        event.preventDefault()
                        console.log(event.target);
                    }
                }
                size="medium"
                label="Pergunta"
                defaultValue="Quanto é 2 + 2?"
                helperText="Escreva algo pequeno"
                style={{ flexGrow: 1 }}
            // variant="outlined"
            />
        </form>
    </ActionWrapper>
}