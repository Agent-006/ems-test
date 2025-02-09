/* eslint-disable react/prop-types */
export default function Button({ onClick, buttonText, className, type }) {
    return (
        <button onClick={onClick} type={`${type}`} className={`${className} border-[1px] border-zinc-700 px-3 py-2 rounded-lg text-sm text-zinc-100 font-medium bg-zinc-900 hover:bg-zinc-800 transition duration-2000`}>
            {buttonText}
        </button>
    );
}
