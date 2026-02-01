interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, type, onClick }: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      className="mt-10 px-6 py-3 bg-green-500 text-white rounded-full hover:cursor-pointer hover:bg-green-600"
      {...(onClick && { onClick })}
    >
      {label}
    </button>
  );
}
