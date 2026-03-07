export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
}) {
    const baseStyles = "px-6 py-3 font-heading uppercase tracking-widest text-sm font-bold transition-all duration-300 rounded-sm";

    const variants = {
        primary: "bg-primary text-background hover:bg-white hover:text-black",
        secondary: "bg-white text-black hover:bg-gray-200",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-background",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
