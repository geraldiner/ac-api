import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./styles/globals.css";

export const metadata = {
  title: "Animal Crossing API by Geraldine Ragsac",
  description: "A reboot of a free RESTful API for furniture, critters, fossils, art, music and villagers from Animal Crossing: New Horizons.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main className="w-full md:max-w-5xl mx-auto min-h-screen grow p-6">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
