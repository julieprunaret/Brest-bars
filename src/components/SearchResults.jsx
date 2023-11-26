import Button from "./Button";
import Card from "./Card";
import useFetch from "../utils/Hooks/useFetch";
import Loading from "./Loading";
import { useState } from "react";

function SearchResults() {
  const [maxDatas, setMaxDatas] = useState(10);

  const { data, isLoading, error } = useFetch(
    `https://api.brest.bar/items/bars`
  );

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  console.log(data);
  return (
    <div className="flex w-full flex-col gap-6 p-4 text-[color:var(--light-elements)] mb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold ">Explorer</h2>
        <Button title="Filter" icon="✍️" isReverse={true} />
      </div>
      <ul className="flex flex-col gap-6">
        {isLoading ? (
          <Loading />
        ) : (
          data.data &&
          data.data
            .slice(0, maxDatas)
            .map((bar, index) => (
              <Card
                adress={bar.adress}
                name={bar.name}
                type={bar.name.includes("Bar") ? "Bar" : "Non définie"}
                key={bar.id + "-" + index}
              />
            ))
        )}
        <button
          onClick={() => setMaxDatas(maxDatas + 5)}
          type="button"
          className="flex gap-2 rounded-[4px] px-4 py-2 bg-[#2c2c2c] text-sm font-bold text-[color:var(--light-elements)] transition-transform hover:scale-105 m-auto"
        >
          Voir plus ({maxDatas})
        </button>
      </ul>
    </div>
  );
}

export default SearchResults;
