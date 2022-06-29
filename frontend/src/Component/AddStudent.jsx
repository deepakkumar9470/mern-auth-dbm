import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    firstName : '',
lastName : '',
subjects : '',
dob : '',
address : ''
   
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstName, lastName,subjects,dob, address } = user;
    const classes = useStyles();
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        const res = await addUser(user);
        console.log(res)
        history.push('/');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Memory</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">FirstName</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='firstName' value={firstName} id="my-input" />
            </FormControl>
           
            <FormControl>
                <InputLabel htmlFor="my-input">LastName</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='lastName' value={lastName} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Subject</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='subjects' value={subjects} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">DOB</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='dob' value={dob} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Memory</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;