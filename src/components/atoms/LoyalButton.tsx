type LoyalButtonProps = {
    text: string;
    buttonType: string;
};
  
const LoyalButton = ( props: LoyalButtonProps) => {
    const { text, buttonType} =  props;
    const primary =  'bg-neutral-light-purple rounded-full py-1 px-2';
    const secondary = 'rounded-full border-2 border-neutral-light-purple py-1 px-2';

    return <button className={ buttonType === 'primary' ? primary : secondary }> {text} </button>
};

export default LoyalButton;