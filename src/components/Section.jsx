export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
