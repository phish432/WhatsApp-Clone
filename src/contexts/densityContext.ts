import { createContext, useContext } from "react";

type DensityContextType = {
  isSpacious: boolean;
  setIsSpacious: React.Dispatch<React.SetStateAction<boolean>>;
};

const DensityContext = createContext<DensityContextType | null>(null);
const useDensityContext = () =>
  useContext(DensityContext) as DensityContextType;

export { DensityContext, useDensityContext };
