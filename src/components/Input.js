function Input({
    inputFor,
    name,
    value,
    spanValue,
    placeholder,
    require,
    type,
    minLength,
    pattern,
    check
}) {
    return (
        <div className="form__input-box">
            <label htmlFor={inputFor}>{value} <span style={{fontWeight: 100, fontSize: '1.4rem'}}>{spanValue}</span></label>
            {require ? 
            <input required type={type} minLength={minLength} name={name} placeholder={placeholder} pattern={pattern} onKeyUp={check} /> 
            : 
            <input type={type} minLength={minLength} name={name} placeholder={placeholder} pattern={pattern} onKeyUp={check} />}
        </div>
    )
}

export default Input