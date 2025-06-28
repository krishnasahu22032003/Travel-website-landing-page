import { NAV_LINKS } from "../../constant"


const Navbar = () => {
  return (
<nav className=" flexBetween max-container padding-container relative z-30 py-10 px-10">
<a href="/">
<img src="/images/logo.png" alt="logo" className="w-[100px] h-[70px] top-0 px-5 " />
</a>
<ul className="hidden h-full gap-12 lg:flex" >
{NAV_LINKS.map((link)=>(
<a href={link.href} key={link.key} className="cursor-pointer flexCenter regular-16 text-gray-400 pb-1.5 transition-all hover:font-bold "  >
{link.label}

</a>

))}
</ul>

</nav>
  )
}

export default Navbar
