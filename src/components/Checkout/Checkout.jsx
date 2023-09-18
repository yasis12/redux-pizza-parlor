import './Checkout.css';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';


//Material UI dialog box 
import Button from '@mui/material/Button';
import { Dialog, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector } from 'react-redux';




 function Checkout() {


    //
    const [open, setOpen] = useState(false); 

 

    //dispatch action 
    // const dispatch = useDispatch();
    const history = useHistory(); 


    const handleClickOpen = () => { 
        // sending order to server once checkout button is clicked. runs funtion. 
        // sendOrderToServer(); 

        setOpen(true); 

        //dispatach action to navigate back to home page
    }

    const handleClose = () => {
        setOpen(false);
      };
    

    //sending order to server 
    //   const sendOrderToServer = () => {
    //     console.log("Pizza order sent to server!");
    //   };



    //Navigating back to main page
    const handleRoute = () => {
        history.push('/')
        
    }



    return(
        <div id='checkoutInfo'>
            <h1> Step 3: Checkout </h1>

            {/*render customerInfo */}

            {/*render delivery status */}

             <h2> For: </h2>



            {/*render within table selected pizza and cost  */}
            <table id='orderData'>
                <thead> 
                    <tr> 
                        <th id='orderName'> Name </th> 
                        <th id='orderCost'> Cost </th> 
                    </tr>
                </thead> 

                <tbody>
                    <td> order one </td>
                    <td> order price </td> 
                </tbody>
            </table>





            {/*render total cost */}
            
            
            
            
            <Button  id='checkoutButton'  variant='outline' onClick={handleClickOpen}> Checkout </Button>

            <Dialog open={open} onClose={handleClose} PaperProps={{
                style: {
                    width: '1000px', 
                    height: '450px', 
                }, 
            }} >
                <Typography align='center' variant='h5' fontSize={'50px'} fontFamily={'sans-serif'} marginTop={'auto'}> ORDER SENT. THANK YOU! </Typography>
                <Button id='returnButton' variant='outline' onClick={handleRoute}> Return to Main </Button>
            </Dialog>
        
        
        
        
        
        
        
        </div>

    );



}; 

export default Checkout; 







//Notes: 
//installed npm install @mui/material @emotion/react @emotion/styled  on the main branch. 