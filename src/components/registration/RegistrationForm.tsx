import { useState } from "react";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationProgress from "./RegistrationProgress";

const RegistrationForm = () => {
    const [step, setStep] = useState<number>(1)

    return ( 
        <div style={{backgroundImage: `url('Registration-Background.png')`}} className="font-poppins h-screen bg-cover bg-no-repeat flex justify-center items-center">
            <div className="bg-slate-50 flex flex-col p-8 rounded-lg gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-zinc-800 font-semibold text-3xl text-center">Registration Form</h1>
                    <p className="text-zinc-400 text-sm">Please fill out this form with the required information</p>
                </div>
                <RegistrationProgress actualStep={step} />
                <div>
                    {(() => { 
                        switch (step) {
                            case 1:
                                return <RegistrationStep1 step={step} setStep={setStep} />;
                                break;
                            case 2:
                                return <h1>Formulaire 2</h1>;
                                break;
                            case 3:
                                return <h1>Formulaire 3</h1>;
                                break;
                            default:
                                break;
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;