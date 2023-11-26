import FilterItem from "./FilterItems";

function Filter() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-2xl font-semibold text-[color:var(--light-elements)] ">
        Où boire à Brest ?
      </h2>
      <ul className="flex items-center gap-8">
        <FilterItem title="Cave" icon="🍷" />
        <FilterItem title="Brasserie" icon="🍺" />
        <FilterItem title="Bar" icon="🍹" />
      </ul>
    </div>
  );
}

export default Filter;
