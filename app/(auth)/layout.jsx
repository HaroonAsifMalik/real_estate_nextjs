import '@styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <main className='flex items-center justify-center min-h-screen auth_main '>
                    <div className='bg-gray-800 w-1/3 h-3/5 p-6 rounded-lg shadow-lg bg-opacity-25'>
                        <Link href="/" className="flex items-center gap-2 mb-4 justify-center">
                            <Image
                                src="/assets/images/logo.svg"
                                width={30}
                                height={30}
                                alt="Logo"
                                className='flex w-2/12 items-center gap-2 ml-auto mr-auto justify-center '
                            />
                        </Link>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}

export default RootLayout;
