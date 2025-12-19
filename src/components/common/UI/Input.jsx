const Input = ({
  icon,
  placeholder = "",
  type = "text",
  inputClassNames = "",
  labelClassNames = "",
  ...props
}) => {
  return (
    <label
      className={`input flex items-center gap-2 w-full focus-within:outline-none
              focus-within:border-neutral-300 focus-within:shadow-sm ${labelClassNames}`}
    >
      {icon && <span className="">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`grow ${inputClassNames}`}
        {...props}
      />
    </label>
  );
};

export default Input;
