import type { MetaFunction } from "@remix-run/node";
import ReactVirtuSelect from "~/components/react-virtuoso-select";
import data from "../../db.json";

export const meta: MetaFunction = () => {
  return [
    { title: "React Virtuoso Select" },
    {
      name: "description",
      content: "Example App to demonstrate usage of react-virtuoso-select",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Example of React Virtuoso Select.
          </h1>
          <desc className="text-gray-100 gap-9">
            The option list in the below react-select component is virtualized
            using the react-virtuoso.
          </desc>
        </header>
        <div>
          <ReactVirtuSelect
            className="text-red-900"
            options={data.accounts}
            getOptionLabel={(option) => option.asset_name}
            getOptionValue={(option) => option.asset_id.toString()}
          />
        </div>
      </div>
    </div>
  );
}
