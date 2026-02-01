interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: { label: string; value: string; disabled?: boolean }[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RadioInput({
  disabled = false,
  label,
  id,
  options,
  required = true,
  value,
  onChange,
}: RadioInputProps) {
  return (
    <fieldset className="w-full grid grid-cols-1 gap2">
      <legend>{label}</legend>
      {options.map((option) => {
        const optionId = `${id}-${option.value}`;
        return (
          <label key={option.value} htmlFor={optionId}>
            <input
              id={optionId}
              type="radio"
              value={option.value}
              disabled={option.disabled || disabled}
              required={required}
              checked={value === option.value}
              onChange={(e) => {
                onChange(e);
              }}
            />{' '}
            {option.label}
          </label>
        );
      })}
    </fieldset>
  );
}
