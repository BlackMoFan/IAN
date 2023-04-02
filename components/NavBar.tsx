import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="h-10 bg-white navbar">
            <div className="flex-1">
                <a href="/" className="text-xl normal-case btn btn-ghost">IAN</a>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    {/* <li>
                        <Link>Item 1</Link>
                    </li> */}
                    <li tabIndex={0}>
                        <Link href="">
                            About
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                        <ul className="p-2 bg-gray-light">
                            <li><Link  href="">Group</Link></li>
                            <li><Link  href="">Paper</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link  href="https://github.com/BlackMoFan/IAN"><AiOutlineGithub /></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;