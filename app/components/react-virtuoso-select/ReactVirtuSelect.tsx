import React from "react";
import ReactSelect, { IReactSelectProps } from "./react-select-wrapped";

export interface IReactVirtuSelectProps<Option>
  extends IReactSelectProps<Option> {
  options: Option[];
}

const ReactVirtuSelect = <T extends {}>({
  options,
}: IReactVirtuSelectProps<T>) => {
  return <ReactSelect options={options} />;
};

export default ReactVirtuSelect;
