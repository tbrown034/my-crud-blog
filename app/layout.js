import "./globals.css";
import { Courier_Prime } from "next/font/google";

export const metadata = {
  title: "CRUD Blog",
  description:
    "A CRUD Fullstack blog created with NextJs by Trevor Brown. More at trevorthewebdeveloper.com",
};

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={courierPrime.className}>
      <body>{children}</body>
    </html>
  );
}
