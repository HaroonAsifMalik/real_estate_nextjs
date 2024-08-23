import '@styles/globals.css'
import Nav from '@components/Nav'

import Footer from '@components/Footer'
export const metadata = {
    title: "Promtopia",
    description: "Promtopia is a platform for creating and sharing promposals"
}


const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
              <body className="bg-[#f9f9f9] opacity-100 bg-[radial-gradient(#08ff00_1.3px,transparent_1.3px),radial-gradient(#08ff00_1.3px,#f9f9f9_1.3px)] bg-[length:52px_52px] bg-[position:0_0,26px_26px]">
                <div className="min-h-screen flex flex-col">
                    <Nav />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default RootLayout;