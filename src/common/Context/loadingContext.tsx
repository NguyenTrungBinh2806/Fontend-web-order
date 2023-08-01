import { useState, createContext, useContext } from 'react';

const LoadingContext = createContext<any>(null);

export const useContextLoading = () => {
    const context = useContext(LoadingContext);
    return context;
}

export const LoadingContextProvider = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    const [value, setValue] = useState(false);

    return <LoadingContext.Provider value={{ value, setValue }}>{children}</LoadingContext.Provider>;
}