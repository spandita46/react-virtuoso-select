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
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Example of React Virtuoso Select.
          </h1>
          <title>
            The option list in the below react-select component is virtualised
            using the react-virtuoso.
          </title>
          <div className="h-[144px] w-[434px]">
            <ReactVirtuSelect
              options={data.accounts}
              getOptionLabel={(option) => option.asset_name}
            />
          </div>
        </header>
      </div>
    </div>
  );
}
