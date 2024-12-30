'use client';

interface IButtonProps {
  text: string;
  //   onClick: () => void;
  //   styleType?: 'primary' | 'secondary';
}

const Button: React.FC<IButtonProps> = ({
  text,
  //   onClick,
  //   styleType = 'primary',
}) => {
  return (
    <>
      <div className="flex items-center justify-center py-20">
        <button
          // onClick={onClick}
          className="flex items-center rounded-xl px-74 py-16 bg-MainColor text-White text-18 font-light"
        >
          {text}
        </button>
      </div>
    </>
  );
};
export default Button;
