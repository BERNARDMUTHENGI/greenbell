import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  ...props
}) {
  // Base styles
  const baseClasses = `
    relative inline-flex
    items-center justify-center
    gap-2
    overflow-hidden
    whitespace-nowrap
    select-none

    font-semibold
    tracking-wide
    leading-none

    transition-all duration-300 ease-out

    cursor-pointer

    focus:outline-none
    focus:ring-4
    focus:ring-primary/20

    disabled:opacity-50
    disabled:pointer-events-none
  `;

  // Button sizes
 const sizes = {
  sm: 'h-11 min-w-[140px] px-6 text-sm rounded-full',
  default: 'h-14 min-w-[190px] px-8 text-base rounded-full',
  lg: 'h-16 min-w-[220px] px-10 text-lg rounded-full',
  xl: 'h-18 min-w-[260px] px-12 text-xl rounded-full',
};

  // Button variants
  const variants = {
    primary: `
      bg-primary
      text-white
      shadow-lg shadow-primary/20
      hover:bg-primary-light
      hover:shadow-2xl hover:shadow-primary/30
      hover:-translate-y-1
      active:translate-y-0
    `,

    secondary: `
      bg-white
      text-primary
      border border-gray-200
      shadow-lg shadow-black/10
      hover:bg-gray-50
      hover:shadow-xl
      hover:-translate-y-1
    `,

    outline: `
      bg-transparent
      border-2 border-primary
      text-primary
      hover:bg-primary
      hover:text-white
      hover:shadow-lg hover:shadow-primary/20
      hover:-translate-y-1
    `,

    outlineWhite: `
      bg-transparent
      border-2 border-white
      text-white
      hover:bg-white
      hover:text-primary
      hover:shadow-lg
      hover:-translate-y-1
    `,

    ghost: `
      bg-transparent
      text-primary
      hover:bg-primary/10
    `,

    ghostWhite: `
      bg-transparent
      text-white
      hover:bg-white/10
    `,

    success: `
      bg-green-600
      text-white
      shadow-lg shadow-green-600/20
      hover:bg-green-700
      hover:shadow-green-600/30
      hover:-translate-y-1
    `,

    danger: `
      bg-red-600
      text-white
      shadow-lg shadow-red-600/20
      hover:bg-red-700
      hover:shadow-red-600/30
      hover:-translate-y-1
    `,
  };

  const classes = `
    group
    ${baseClasses}
    ${sizes[size] || sizes.default}
    ${variants[variant] || variants.primary}
    ${className}
  `;

  const motionProps = {
    whileHover: disabled
      ? {}
      : {
          scale: 1.03,
          y: -2,
        },
    whileTap: disabled
      ? {}
      : {
          scale: 0.97,
          y: 0,
        },
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  };

  // Shine Effect (Primary only)
  const Shine = () =>
    variant === 'primary' ? (
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-700
          pointer-events-none
        "
      />
    ) : null;

  // Content
  const Content = () => (
    <>
      <Shine />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  // Internal Link
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          to={to}
          className={classes}
          aria-disabled={disabled}
          {...props}
        >
          <Content />
        </Link>
      </motion.div>
    );
  }

  // External Link
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        <Content />
      </motion.a>
    );
  }

  // Regular Button
  return (
    <motion.button
      className={classes}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      <Content />
    </motion.button>
  );
}