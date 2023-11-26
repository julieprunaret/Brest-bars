/**
 * Tag for Cards
 * @param {{ text: string, icon: string }} Tag
 * @returns {JSX.Element}
 */

function Tag({ text, icon }) {
  return (
    <p className="rounded-full px-4 font-semibold bg-[rgba(61,100,209,.3)] text-[rgb(61,101,209)]">
      {icon && <span className="pr-2">{icon}</span>}
      {text}
    </p>
  );
}

export default Tag;
