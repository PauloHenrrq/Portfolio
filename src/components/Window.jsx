export default function Window ({ children, margin }) {
    return(
        <section style={{ marginTop: margin }} className='mx-12 py-5 px-10 pb-10 mb-14 bg-indigo-950 bg-opacity-[0.6] rounded-2xl shadow-[inset_0px_0px_5px_0.1px_rgba(0,0,0,0.5)] shadow-purple-600 animate-shadowPulse max-lg:m-0 max-lg:mb-3 max-lg:p-5'>
            {children}
        </section>
    )
}