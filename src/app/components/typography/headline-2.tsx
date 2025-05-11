import { ReactNode } from "react";

export default function Headline2({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={`font-inter text-6xl font-[100] mb-2 ${className ?? ""}`}
        >
            {children}
        </h2>
    );
}
