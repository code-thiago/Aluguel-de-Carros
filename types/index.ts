import type { SearchParams } from "next/dist/server/request/search-params";
import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export const translations = {
  make: "Marca",
  model: "Modelo",
  year: "Ano",
  fuel_type: "Combustível",
  transmission: "Transmissão",
  city_mpg: "Consumo na cidade",
  highway_mpg: "Consumo na estrada",
  combination_mpg: "Consumo combinado",
  cylinders: "Cilindros",
  displacement: "Cilindrada",
  drive: "Tração",
  class: "Classe",
};

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: Promise<FilterProps>;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}