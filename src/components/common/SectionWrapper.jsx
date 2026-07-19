// components/common/SectionWrapper.jsx
export default function SectionWrapper({ 
  children, 
  className = '', 
  bg = 'white',
  ...props 
}) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-bg-light',
    green: 'bg-bg-green',
    primary: 'bg-primary',
    transparent: 'bg-transparent',
  };

  return (
    <section className={`py-20 md:py-28 ${bgClasses[bg] || bgClasses.white} ${className}`} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}