import React from "react";
import ReactSelect, { IReactSelectProps } from "./react-select-wrapper";

export interface IReactVirtualizedSelectProps<Option>
  extends IReactSelectProps<Option> {
  options: Option[];
}

const ReactVirtualizedSelect = <T extends {}>({
  options,
  ...props
}: IReactVirtualizedSelectProps<T>) => {
  return <ReactSelect options={options} {...props} />;
};

export default ReactVirtualizedSelect;
