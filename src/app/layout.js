import { Poppins  } from "next/font/google"
import "./globals.css";
import { Lora } from "next/font/google";

const fontSans = Poppins ({
  subsets: ["latin"],
  weight: ['100' ,'200' ,'300', '400', '500' ,'600' ,'700', '800' ,'900'],
  variable: "--font-sans", });



export const metadata = {
  title: "Dayanand Gawade",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={fontSans.className}>{children}
      
      <div class="absolute inset-0 top-0 -z-10 h-full w-full bg-white flex items-center justify-center"><div class="h-[300px] absolute top-0 right-0 w-[300px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div><div class="h-[300px] absolute bottom-0 left-0 w-[300px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div></div>
      </body>
    </html>
  );
}
