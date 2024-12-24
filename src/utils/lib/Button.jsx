/* eslint-disable react/prop-types */
export default function Button({ buttonText }) {
    return (
        <button className="border-[1px] border-zinc-700 px-3 py-2 rounded-lg text-sm font-medium bg-zinc-900 hover:bg-zinc-800 transition duration-2000">
            {buttonText}
        </button>
    );
}
