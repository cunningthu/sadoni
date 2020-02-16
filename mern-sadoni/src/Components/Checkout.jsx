import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
      <StripeProvider apiKey='pk_test_Nt3LIdOgx1IrOurrG4JI2z5E00F4jyGcOD'>
        <Elements>
          <CheckoutForm selectedProduct={selectedProduct} history={history} />
        </Elements>
      </StripeProvider>
    );
}

export default Checkout