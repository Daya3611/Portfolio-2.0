import { Poppins  } from "next/font/google"
import "./globals.css";
import { Lora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"


const fontSans = Poppins ({
  subsets: ["latin"],
  weight: ['100' ,'200' ,'300', '400', '500' ,'600' ,'700', '800' ,'900'],
  variable: "--font-sans", });



export const metadata = {
  title: "Dayanand Gawade",
  description: "Devloper Portfolio of Dayanand Gawade",
  icons:{
    icon: ['./profile.png']
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      <Toaster />
      <body className={fontSans.className}>
        
        {children}
      
      
      </body>
      
    </html>
  );
}
