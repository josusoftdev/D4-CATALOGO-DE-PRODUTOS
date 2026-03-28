import {NavLink} from '../ui/nav-link';
import {Home, Package, Settings} from 'lucide-react';

export function Sidebar() {
    return(
    <aside>
        <h1>SaaS Core</h1>
        <nav>
            <NavLink href="/">
                <Home size = {20}/>
                Dashboard
            </NavLink>
            <NavLink href = "/products">
                <Package size = {20}/>
                Produtos
            </NavLink>
            <NavLink href = "/settings">   
                <Settings size = {20}/>  
                Configurações
            </NavLink>
        </nav>
    </aside>
    );
}
