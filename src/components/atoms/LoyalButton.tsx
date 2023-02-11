type LoyalButtonProps = {
    text: string;
    buttonType: string;
};
  
const LoyalButton = ( props: LoyalButtonProps) => {
    const { text, buttonType} =  props;
    const primary =  'h-12 bg-gradient-to-r from-purple-from to-purple-to rounded-full py-1 px-2 hover:bg-gradient-to-l active:border-2 active:border-neutral-light-purple active:bg-primary-cyan';
    const secondary = 'h-12 rounded-full border-2 border-neutral-light-purple py-1 px-2 hover:bg-neutral-light-purple active:bg-primary-cyan';

    return <button className={ buttonType === 'primary' ? primary : secondary }> {text} </button>
};

export default LoyalButton;