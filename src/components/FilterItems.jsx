/**
 * Items for the filter
 * @param {{ icon: string, title: string  }} Button
 * @returns {JSX.Element}
 */

function FilterItem({ icon, title }) {
  return (
    <button className="flex w-[30%] flex-col items-center gap-2 font-medium">
      <span className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#2c2c2c] text-4xl">
        {icon}
      </span>
      <p className="text-[color:var(--light-elements)]">{title}</p>
    </button>
  );
}

export default FilterItem;
