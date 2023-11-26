import Button from "./Button";
import Card from "./Card";

function SearchResults() {
  return (
    <div className="flex w-full flex-col gap-6 p-4 text-[color:var(--light-elements)] mb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold ">Explorer</h2>
        <Button title="Filter" icon="✍️" isReverse={true} />
      </div>
      <ul className="flex flex-col gap-6">
        <Card
          adress="28 Rue Mathieu Donnart, 29200 Brest, France"
          name="Nom du bar"
          type="Bar"
        />
        <Card
          adress="28 Rue Mathieu Donnart, 29200 Brest, France"
          name="Nom du bar"
          type="Bar"
        />
        <Card
          adress="28 Rue Mathieu Donnart, 29200 Brest, France"
          name="Nom du bar"
          type="Bar"
        />
        <Card
          adress="28 Rue Mathieu Donnart, 29200 Brest, France"
          name="Nom du bar"
          type="Bar"
        />
      </ul>
    </div>
  );
}

export default SearchResults;
