import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-w-7xl max-w-7xl ml-auto mr-auto pl-6 pr-6">
        <h1 className="text-3xl font-bold text-center p-10">Welcome to Notes App</h1>
        {children}
    </div>
  );
}
