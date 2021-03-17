import Form from './Form';

function Payment() {
    return (
        <div className="payment">
            <h1 className="payment__heading">Shipping Details</h1>
            <p className="payment__description">Please complete the form with your shipping details</p>
            <Form />
        </div>
    )
}

export default Payment
