
import Link from 'next/link';

const AuthLinks = () => (
  <div className="flex items-center justify-between">
    <Link href="/forgot-password">
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        Forgot Password?
      </a>
    </Link>
    <div className="text-center mt-4">
      Don't have an account?
      <Link href="/signup">
        <a className="text-blue-500 font-bold">Sign Up</a>
      </Link>
    </div>
  </div>
);

export default AuthLinks;
