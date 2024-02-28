type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

const btnVariant = {
  primary: 'px-4 py-2 bg-primary hover:bg-primary_hover ',
  secondary:
    'px-4 py-2 border-2 border-primary hover:border-primary_hover hover:bg-primary_hover',
  tertiary: 'text-zinc-900 hover:text-primary',
};

export default function Button({
  variant = 'tertiary',
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`text-base font-medium transition-colors ${btnVariant[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
