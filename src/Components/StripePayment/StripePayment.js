
import React, { useContext, useState } from 'react';
import {
    CardCvcElement,
    CardElement,
    CardExpiryElement,
    CardNumberElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const StripePayment = ({setStripeId}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handlePayment = async data => {
        console.log("clicked first");
        if (!stripe || !elements) {
       

            return;
        }
        const loading = toast.loading('Payment is processing  Please wait ...!');


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });
        toast.dismiss(loading);
        toast.success('Successfully paid!')
        setStripeId(paymentMethod.id);

        if (error) {
            toast.dismiss(loading);

            return swal("Failed!", error.message, "error", { dangerMode: true });
            setPaymentError(error.message);
            setPaymentSuccess(null);
            console.log(true);


        }

    }

    return (
        <div>

            <form onSubmit={handleSubmit(handlePayment)} >
                <div  >
                    <label for="inputEmail4" class="form-label">Card Number</label>
                    <CardNumberElement className="form-control" />

                </div>
                <div  >
                    <label for="inputEmail4" class="form-label"> Expiration Date</label>
                    <CardExpiryElement className="form-control" />


                </div>
                <div  >
                    <label for="inputEmail4" class="form-label">CVC</label>
                    <CardCvcElement className="form-control" />


                </div>
                <div class="modal-footer">
              
                <button type="button" class="btn btn-secondary" type="submit" data-bs-dismiss="modal">Make Payment</button>
                </div>
            </form>
           
        </div>
    );
};

export default StripePayment;