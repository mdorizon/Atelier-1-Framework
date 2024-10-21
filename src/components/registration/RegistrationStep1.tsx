import { useState } from "react";
import { RegistrationType } from "../../types/registration";

type RegistrationStep1Props = {
    step: number;
    setStep: (step: number) => void;
}

const RegistrationStep1 = ({step, setStep}: RegistrationStep1Props) => {
    const [credentials, setCredentials] = useState<RegistrationType>({
        account_type: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (credentials['account_type'] == '') return;
        if (credentials['account_type'] != 'personal' || credentials['account_type'] != 'business') return;

        console.log(credentials)
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="radio" id="personal" name="account_type" value="personal" />
                <label htmlFor="personal">personal account</label>
                <br/>
                <input onChange={handleChange} type="radio" id="business" name="account_type" value="business" />
                <label htmlFor="business">business account</label>
                <div className="flex justify-end gap-2 mt-8">
                    <button type="submit" className="px-4 py-2 bg-purple-400 rounded text-white">{step === 3 ? 'Send' : 'Next'}</button>
                </div>
            </form>
        </>
    );
}

export default RegistrationStep1;