import AccountTypeInputs from "./AccountTypeInputs";
import NavStepForm from "./NavStepForm";
import PersonalInformationInput from "./PersonalInformationInput";
import ProfileDataInput from "./ProfileDataInput";

type StepFormProps = {
    currentStep: number;
    setCurrentStep: (currentStep: number) => void;
    credentials: any;
    setCredentials: (credentials: any) => void;
}

const StepForm = ({ currentStep, setCurrentStep, credentials, setCredentials } : StepFormProps) => {

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    const previousStep = () => {
        if(currentStep <= 1) return;

        setCurrentStep(currentStep - 1)
    }

    const handleChange = (e: any) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div>
                <NavStepForm currentStep={currentStep} />
            </div>
            <div className="mt-10">
                {currentStep === 1 && <AccountTypeInputs handleChange={handleChange} />}
                {currentStep === 2 && <PersonalInformationInput handleChange={handleChange} />}
                {currentStep === 3 && <ProfileDataInput handleChange={handleChange} />}
            </div>
            <div className="flex gap-4 mt-4">
                {currentStep > 1 && <button onClick={previousStep}>Previous</button>}
                <button onClick={nextStep}>
                    {currentStep < 3 ? 'Next' : 'Send'}
                </button>
            </div>
        </div>
    );
}

export default StepForm;