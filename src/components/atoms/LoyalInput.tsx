type LoyalInputProps = {
    inputType: string;
    placeholder: string;
    icon?: string;
};

const LoyalInput = (props: LoyalInputProps) => {
    const { icon, inputType, placeholder } = props
    if ( icon ) {
    return <div className="w-auto border rounded p-1 flex items-center gap-x-2"> { icon && (<img src={icon} alt="input-icon"/>)} <input type={inputType} placeholder={placeholder} className="bg-transparent placeholder:text-white w-full focus:outline-none" /> </div>
    }
    return <input type={inputType} placeholder={placeholder} className="bg-transparent border placeholder:text-white rounded p-1" />
}

export default LoyalInput;