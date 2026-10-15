import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Math Step — Find x, one step at a time',description:'Learn linear equations at three levels. Get hints, check your answer, and ask for AI help.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
