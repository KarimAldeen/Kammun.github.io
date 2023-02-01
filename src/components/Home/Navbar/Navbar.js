import { LazyLoadImage } from "react-lazy-load-image-component";
import img from '../../../images/KammunLogo.svg';
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        function stickNavbar() {
            if (window.scrollY > 100) {
                document.getElementById("Navbar").classList.add("stickNavbar")
            }
            if (window.scrollY === 1307 || window.scrollY === 0 || window.scrollY === 610) {
                document.getElementById("Navbar").classList.remove("stickNavbar")
            }
        }

        window.addEventListener('scroll', stickNavbar);

    }, []);
    return (
        <div className="Navbar" id="Navbar">
            <div className="nav_logo">
                <span>كمّون</span>
                <span>
                    <LazyLoadImage className='Logo' alt='' src={img} />

                </span>
            </div>
            <div className="nav_items">
                {['الرئيسية', 'الميزات', 'لمحة عامة', "تواصل معنا"].map((I) => (
                    <a className='Link' key={I} href={"#" + I}>{I}</a>
                ))}
            </div>

        </div>
    );
}
    ;

export default Navbar;