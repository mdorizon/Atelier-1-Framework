type ProgressProps = {
    actualStep: number;
}

const RegistrationProgress = ({actualStep}: ProgressProps) => {
    return (
        <>
            <p>{actualStep}</p>
        </>
    );
}

export default RegistrationProgress;