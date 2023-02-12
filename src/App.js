import { Outlet } from 'react-router-dom';
import Nav from './Nav';
export default function App() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}