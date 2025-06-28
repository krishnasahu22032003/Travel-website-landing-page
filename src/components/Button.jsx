

const Button = ({ type = "button", title, icon, variant, full }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
    >
      {icon && (
        <img src={icon} alt={title} width={24} height={24} />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
