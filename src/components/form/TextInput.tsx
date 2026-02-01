interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TextInput({
  disabled = false,
  id,
  label,
  placeholder = 'Please fill out this field',
  required = true,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <input
        disabled={disabled}
        id={id}
        type="text"
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
