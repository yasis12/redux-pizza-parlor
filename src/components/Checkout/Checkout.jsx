import './Checkout.css';
import React from 'react';

//Material UI dialog box 
import { Dialog } from '@mui/material';
import DialogContentText from '@mui/material';
import DialogTitle from '@mui/material';
import DialogActions from '@mui/material';
import DialogContent from '@mui/material';
import Button from '@mui/material';

// import { useSelector } from 'react-redux';

function Checkout(){

    const [open, setOpen] = React.useState(false);
 
    const handleClickToOpen = () => {
        setOpen(true);
    };
 
    const handleToClose = () => {
        setOpen(false);
    };








    return(
        <div> 
        <h1> Step 3: Checkout </h1>

        <div stlye={{}}>
            <Button variant="outlined" color="primary"
                onClick={handleClickToOpen}>
                    Checkout
            </Button>

            <Dialog open={open} onClose={handleToClose}>

                <DialogTitle>{"Confirm"}</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                       pizza
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        confirm
                    </Button>
                </DialogActions>

            </Dialog>

        </div>

        </div>
    


    );



}; 

export default Checkout; 





//Notes: 
//installed npm install @mui/material @emotion/react @emotion/styled  on the main branch. 