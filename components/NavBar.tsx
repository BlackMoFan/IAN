import { AiOutlineGithub } from "react-icons/ai";

const NavBar = () => {
    return (
        <div className="h-10 bg-white navbar">
            <div className="flex-1">
                <a href="/" className="text-xl normal-case btn btn-ghost">IAN</a>
            </div>
            <div className="flex-none">
                <ul className="px-1 menu menu-horizontal">
                    {/* <li>
                        <a>Item 1</a>
                    </li> */}
                    <li tabIndex={0}>
                        <a>
                            About
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-gray-light">
                            <li><a>Group</a></li>
                            <li><a>Paper</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><AiOutlineGithub /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;