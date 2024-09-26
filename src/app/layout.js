import "./globals.css";

export const metadata = {
  title: "Saikats Next App",
  description: "An Application With Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
