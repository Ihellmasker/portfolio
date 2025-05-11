import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
    return (
        <button className="relative uppercase p-5 decoration-0 inline-block before:content-[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-auto before:z-1 before:rounded-lg before:bg-violet-600 before:w-0 before:transition-all before:duration-200 hover:before:w-full hover:before:left-0 hover:before:right-auto">
            <span className="relative z-2">{children}</span>
        </button>
    );
}
