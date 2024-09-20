import React from "react";
import Select, { GroupBase, Props } from "react-select";

export type DefaultOptionType = {
  value: string;
  label: string;
};

export interface IReactSelectWrapperProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, "options"> {
  options: Option[];
}

const ReactSelectWrapper = <T extends {}>(
  props: IReactSelectWrapperProps<T>
) => {
  return (
    <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 0 })} />
  );
};

export default ReactSelectWrapper;
