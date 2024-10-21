type PersonalInformationInputProps = {
    handleChange: (e: any) => void;
}

const PersonalInformationInput = ({ handleChange }: PersonalInformationInputProps) => {
    return (
        <div>
            <input onChange={handleChange} type="text" name="name" placeholder="Name" />
            <input onChange={handleChange} type="email" name="email" placeholder="Email" />
            <input onChange={handleChange} type="password" name="password" placeholder="password" />
        </div>
    );
}

export default PersonalInformationInput;