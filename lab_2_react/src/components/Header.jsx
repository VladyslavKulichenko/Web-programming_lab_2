export function Header() {
    return (
        <header className="text-center mb-6">
            <h1 className="font-bold text-[2.5rem] mb-2.5 text-white">Vladyslav Kulichenko</h1>
            <address className="text-[0.95rem] text-txt1">
                Email: <a className="
                    text-addrFg no-underline transition-colors duration-200 ease-in-out hover:text-addrFg_hover hover:underline
                " href="mailto:Kulichenko.Vladyslav.V@gmail.com">Kulichenko.Vladyslav.V@gmail.com</a> | 
                Phone: (067) 652-0449 | 
                GitHub: <a className="
                    text-addrFg no-underline transition-colors duration-200 ease-in-out hover:text-addrFg_hover hover:underline
                " href="https://github.com/VladyslavKulichenko">Vladyslav Kulichenko</a>
            </address>
        </header>
    );
}