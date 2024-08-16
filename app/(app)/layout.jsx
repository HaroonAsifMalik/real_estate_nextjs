import '@styles/globals.css'
// import Provide from '@components/Provide'
import Nav from '@components/Nav'

export const metadata = {
    title: "Promtopia",
    description: "Promtopia is a platform for creating and sharing promposals"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                    
                </main>
            </body>
        </html>
    )
}

export default RootLayout;