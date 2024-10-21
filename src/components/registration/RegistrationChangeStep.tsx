type RegistrationChangeStepProps = {
    step: number;
    setStep: (step: number) => void;
}

const RegistrationChangeStep = ({step, setStep}: RegistrationChangeStepProps) => {
    const changeStep = (change: string) => {
        switch (change) {
            case "prev":
                if (step === 1) return;

                setStep((step - 1))

                break;
            case "next":
                if (step === 3) return;

                setStep((step + 1))
                break;
        }
    }

    return (
        <>
            <button onClick={() => changeStep("prev")} disabled={step === 1} className={`px-4 py-2 rounded ${step === 1 ? 'opacity-0' : 'text-zinc-400'}`}>Previous</button>
            <button type="submit" onClick={() => changeStep("next")} className="px-4 py-2 bg-purple-400 rounded text-white">{step === 3 ? 'Send' : 'Next'}</button>
        </>
    );
}

export default RegistrationChangeStep;