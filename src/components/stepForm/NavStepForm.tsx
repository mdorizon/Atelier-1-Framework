const navItemElements = [
    {
        stepNumber: "1",
        label: "Account Type"
    },
    {
        stepNumber: "2",
        label: "Personal Information"
    },
    {
        stepNumber: "3",
        label: "Profile Data"
    }
]

type NavStepFormProps = {
    currentStep: number;
}

const NavStepForm = ({currentStep} : NavStepFormProps) => {
    return (
        <ul className="flex gap-10">
            {navItemElements.map(item => (
                <li className="flex flex-col items-center text-slate-400">
                    <div className={`text-2xl border-2 rounded-full h-10 w-10 flex items-center justify-center ${currentStep}`}>
                        {item.stepNumber}
                    </div>
                    <div className="mt-2">
                        {item.label}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default NavStepForm;