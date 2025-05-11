export default function Mouse() {
    return (
        <>
            <div className="mx-auto relative border-3 border-white w-6 h-10 rounded-2xl bg-white/5 shadow before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1.5 before:w-1 before:h-1.5 before:rounded-md before:bg-white before:shadow"></div>
            <div className="absolute inline-block left-1/2 -bottom-3.5 -translate-x-1/2 -rotate-45 p-1.5 shadow-[3px_-3px_0_0_inset] shadow-violet-400 rounded-sm animate-[mouse-scroll-down_3s_infinite]"></div>
        </>
    );
}
