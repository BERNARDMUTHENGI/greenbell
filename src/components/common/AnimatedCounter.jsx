import { useCounter } from '../../hooks/useCounter';

export default function AnimatedCounter({ value, suffix = '', label }) {
  const { count, ref } = useCounter(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-green-300">{suffix}</span>
      </div>
      <p className="text-white/70 text-sm md:text-base font-medium">{label}</p>
    </div>
  );
}
