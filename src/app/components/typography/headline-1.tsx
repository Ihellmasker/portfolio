import { ReactNode } from "react";

export default function Headline1({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <h1 className={`font-inter text-8xl mb-2 ${className ?? ""}`}>
            {children}
        </h1>
    );
}
