type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};

export default function Button({ disabled, onClick, children }: ButtonProps) {
  return (
    <button className={``} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
