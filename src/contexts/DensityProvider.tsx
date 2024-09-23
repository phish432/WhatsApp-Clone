import React, { useState } from "react";
import { DensityContext } from "./densityContext";

type Props = { children?: React.ReactNode };

const DensityProvider = (props: Props) => {
  const { children } = props;

  const [isSpacious, setIsSpacious] = useState<boolean>(true);

  return (
    <DensityContext.Provider value={{ isSpacious, setIsSpacious }}>
      {children}
    </DensityContext.Provider>
  );
};

export default DensityProvider;
