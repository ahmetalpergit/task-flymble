import Input from './Input';

function Form() {

    return (
        <form className="form" onSubmit={(e) => {e.preventDefault(); return false;}}>
            <Input 
                inputFor="inputName"
                name="inputName"
                value="Name"
                spanValue="*"
                placeholder="min. 3 letters"
                require={true}
                type="text"
                minLength="3"
            />
            <Input 
                inputFor="inputAddress"
                name="inputAddress"
                value="Address"
                spanValue="*"
                placeholder=" "
                require={true}
                type="text"
            />
            <Input 
                inputFor="inputNumber"
                name="inputNumber"
                value="Phone"
                spanValue="(+48)"
                placeholder="(enter 9-digits)"
                require={false}
                type="tel"
                pattern="[0-9]{9}"
            />
            <Input 
                inputFor="inputMail"
                name="inputMail"
                value="Email"
                spanValue="*"
                placeholder="user@email.com"
                require={true}
                type="email"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
            />
            <div className="form__input-box">
                <label htmlFor="selectShipping">Shipping options</label>
                <select name="selectShipping" id="shipping">
                    <option value="poczta polska">Poczta Polska</option>
                    <option value="ups">UPS</option>
                    <option value="dpd">DPD</option>
                    <option value="DHL">DHL</option>
                </select>
            </div>
            <button disabled type="submit" className="form__btn" onClick={(e) => {e.preventDefault(); return false}} onSubmit={(e) => {e.preventDefault(); return false}}>PAY</button>
        </form>
    )
}

export default Form
