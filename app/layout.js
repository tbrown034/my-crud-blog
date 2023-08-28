import "./globals.css";

export const metadata = {
  title: "CRUD Blog",
  description:
    "A CRUD Fullstack blog created with NextJs by Trevor Brown. More at trevorthewebdeveloper.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
