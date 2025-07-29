import Header from "./_components/layout/header";
import Sidebar from "./_components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[25%_auto]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
