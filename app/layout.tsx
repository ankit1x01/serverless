import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "AWS Skill Course",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-[#fefefe] text-black font-sans font-bold tracking-wide">
        <Sidebar />
        <main className="flex-1 p-6 bg-[#fefefe] text-black overflow-y-auto shadow-[8px_8px_0_0_#000] border-l-4 border-black">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
