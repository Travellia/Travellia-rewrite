export default function ContentLayoutWrapper({ children , className}) {
    return (
      <div className={`w-[60vw] mx-auto p-4 ${className}`}>
        {children}
      </div>
    );
  }