type AccountTypeInputsProps = {
    handleChange: (e: any) => void;
}

const AccountTypeInputs = ({ handleChange }: AccountTypeInputsProps) => {
    return (
        <div>
            <label htmlFor="personal">Personal account</label>
            <input onChange={handleChange} type="radio" name="accountType" value="personal" id="personal" />
            <label htmlFor="business">Business account</label>
            <input onChange={handleChange} type="radio" name="accountType" value="business" id="business" />
        </div>
    );
}

export default AccountTypeInputs;