import { Link } from 'react-router-dom';

const Button = ({ to, children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md text-sm font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    text: 'text-gray-800 hover:text-blue-600',
  };

  return (
    <Link
      to={to}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;