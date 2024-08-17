import '@styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>

                <main className='flex min-h-screen items-center justify-center auth_main'>
                    <div className='bg-gray-900 relative flex flex-col rounded-xl bg-clip-border bg-opacity-60 p-4 sm:p-6 lg:p-8 w-full max-w-md'>
                        <Link href="/" className="flex items-center gap-2 mb-4 justify-center opacity-100">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Logo"
                                width={15}
                                height={15}
                                className="w-12 h-12  sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-16 lg:h-16"
                            />
                        </Link>
                        {children}
                        {/* <div className="w-full pt-5 px-4 mb-8 items-center ">
                            <div className="text-sm text-white py-1">
                                Made with <a className="text-white font-semibold" href="#" target="_blank">Material Tailwind</a> by <a href="#" className="text-white font-semibold" target="_blank"> Creative Tim</a>.
                            </div>
                        </div> */}
                    </div>
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
