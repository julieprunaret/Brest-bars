/**
 * Button with options
 * @param {{ icon: string, title: string, isReverse: boolean  }} Button
 * @returns {JSX.Element}
 */

function Button({ icon, title, isReverse }) {
  return (
    <button
      type="button"
      className={`flex gap-2 rounded-[4px] px-4 py-2 bg-[color:var(--primary-color)] text-sm font-bold text-white transition-transform hover:scale-105 ${
        isReverse && "flex-row-reverse"
      }`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default Button;
