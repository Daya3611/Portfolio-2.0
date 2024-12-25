import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Bricolage_Grotesque } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Header from "./components/Header";
import Footer from "./components/footer";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" >
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
        <NextTopLoader
        color="hsl(var(--primary))"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={400}
        shadow="0 0 10px hsl(var(--primary)),0 0 5px hsl(var(--primary))"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
        />
      <body className={bricolage_grotesque.className}>
      <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system" disableTransitionOnChange>
        <Header/>
        
        {children}
        
        
      
          <Footer/>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
