interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string; disabled?: boolean }[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function SelectInput({
  disabled = false,
  label,
  id,
  options,
  required = true,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      <label htmlFor={id}>{label}</label>
      <select
        disabled={disabled}
        id={id}
        required={required}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      >
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled || false}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
