import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title:string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
} 

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (menufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class:string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive:string;
  fuel_type:string;
  highway_mpg: number;
  make:string;
  model:string;
  transmission:string;
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
    manufacturer: string;
    year: number;
    fuel: string; 
    limit: number;
    model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

