import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Bricolage_Grotesque } from "next/font/google";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});


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
      <head>
         <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
              });
            `,
          }}
        />
      </head>
      
      <Toaster />
      <body className={bricolage_grotesque.className}>
        
        {children}
      
      
      </body>
      
    </html>
  );
}
