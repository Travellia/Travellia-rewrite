export default function ContentLayoutWrapper({ children, className }) {
  return (
    <div className={`w-[100vw] md:w-[90vw] lg:w-[60vw] mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
}