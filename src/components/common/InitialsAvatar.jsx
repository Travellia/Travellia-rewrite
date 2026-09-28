const InitialsAvatar = ({ name = "", className = "w-12 h-12" }) => {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <div
      aria-hidden="true"
      className={`${className} rounded-full bg-ink text-gold font-semibold flex items-center justify-center shrink-0`}
    >
      {initials}
    </div>
  );
};

export default InitialsAvatar;
