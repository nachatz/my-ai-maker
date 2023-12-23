import React, {
  createContext,
  useContext,
  type ReactNode,
  useState,
} from "react";

interface ModelLayoutContextProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
  code: { id: string; userId: string };
  setCode: React.Dispatch<React.SetStateAction<{ id: string; userId: string }>>;
}

const ModelLayoutContext = createContext<ModelLayoutContextProps | undefined>(
  undefined,
);

export const useModelLayoutContext = (): ModelLayoutContextProps => {
  const context = useContext(ModelLayoutContext);
  if (!context) {
    throw new Error(
      "useModelLayoutContext must be used within a ModelLayoutProvider",
    );
  }
  return context;
};

interface ModelLayoutProviderProps {
  children: ReactNode;
}

function ModelLayoutProvider({
  children,
}: ModelLayoutProviderProps): JSX.Element {
  const [view, setView] = useState("current");
  const [code, setCode] = useState<{ id: string; userId: string }>({
    id: "",
    userId: "",
  });

  const contextValue: ModelLayoutContextProps = {
    view,
    setView,
    code,
    setCode,
  };

  return (
    <ModelLayoutContext.Provider value={contextValue}>
      {children}
    </ModelLayoutContext.Provider>
  );
}

export default ModelLayoutProvider;
