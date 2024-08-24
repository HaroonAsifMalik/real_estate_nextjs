const Button = ({ href, onClick, children, className }) => (
  <button type="button" href={href} onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
