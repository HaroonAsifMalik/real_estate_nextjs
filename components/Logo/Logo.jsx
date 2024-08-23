import Image from "next/image";
import Link from "next/link";

const Logo = ({ src, alt, text }) => (
    <Link href="/" className="flex items-center gap-2">
        <Image src={src} className="object-contain" width={30} height={30} alt={alt} />
        <p className="text-xl font-semibold">{text}</p>
    </Link>
);

export default Logo;