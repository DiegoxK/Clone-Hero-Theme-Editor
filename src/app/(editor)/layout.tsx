import Header from "./_components/layout/header";
import Sidebar from "./_components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex grow overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
