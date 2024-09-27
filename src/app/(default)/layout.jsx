import Navbar from "@/components/pages/shared/navbar";
import NextTopLoader from 'nextjs-toploader';
import "../globals.css";

export const metadata = {
  title: "Saikats Next App",
  description: "An Application With Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
