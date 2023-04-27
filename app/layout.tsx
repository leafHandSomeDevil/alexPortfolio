import "./globals.css";
import Nav from "./Nav";
import Homepage from ".././app/homepage/page";
import Footer from ".././app/footer/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-[rgb(36,36,36)] text-white h-screen pb-12">
        <Homepage />

        {children}
      </body>
    </html>
  );
}
