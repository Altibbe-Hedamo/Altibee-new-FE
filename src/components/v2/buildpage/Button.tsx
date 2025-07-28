// src/components/shared/Button.jsx
export default function Button({ children, href, variant = "primary" }) {
  const base = "px-4 py-2 rounded font-medium";
  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-black text-black hover:bg-gray-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}