import Header from "./_components/layout/header";
import Sidebar from "./_components/layout/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background/50 flex h-screen flex-col backdrop-blur-sm">
      <Header />
      <div className="flex grow overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
