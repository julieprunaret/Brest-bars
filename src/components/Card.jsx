import Tag from "./Tag";

/**
 * Cards
 * @param {{ adress: string, name: string, type: string }} Card
 * @returns {JSX.Element}
 */

function Card({ adress, name, type }) {
  return (
    <li className="flex flex-col gap-4 rounded-2xl bg-[#2c2c2c] p-6 text-[color:var(--light-elements)]">
      <div className="flex items-center justify-between">
        <div className="flex w-4/5 flex-col">
          <p className="font-bold uppercase text-[color:var(--primary-color)]">
            {type}
          </p>
          <h2 className="text-2xl font-bold text-[color:var(--light-elements)]">
            {name}
          </h2>
          <p className="relative truncate text-[color:var(--primary-color)]">
            🏃‍♂️ <strong className="uppercase">a km </strong> {adress}
          </p>
        </div>
        <button className="aspect-square rounded-full bg-[color:var(--primary-color)] p-4">
          👁️
        </button>
      </div>
      <div className="flex items-center gap-3">
        <Tag text="tag" />
      </div>
    </li>
  );
}

export default Card;
