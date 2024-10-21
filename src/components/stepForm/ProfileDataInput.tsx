type ProfileDataInputProps = {
    handleChange: (e: any) => void;
}

const ProfileDataInput = ({handleChange} : ProfileDataInputProps) => {
    return (
        <div>
            <input onChange={handleChange} type="number" name="age" placeholder="Age" />
            <input onChange={handleChange} type="text" name="interests" placeholder="Area of interests" />
            <input onChange={handleChange} type="text" name="description" placeholder="description" />
        </div>
    );
}

export default ProfileDataInput;