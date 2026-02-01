interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function NumberInput({
  disabled = false,
  id,
  label,
  placeholder = 'Please fill out this field',
  required = true,
  value,
  onChange,
}: NumberInputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        id={id}
        type="number"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        required={required}
        value={value}
      />
    </div>
  );
}
