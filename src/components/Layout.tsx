import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-secondary">
        <AppSidebar />
        <div className="flex-1 flex flex-col w-full">
          <Header />
          <main className="flex-1 relative">
            <SidebarTrigger className="absolute top-4 left-4 z-10" />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
