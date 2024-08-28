import { NavLink } from "react-router-dom"

const Navlinks = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <NavLink to="/" className="mr-5 hover:text-gray-900">Home</NavLink>
    <NavLink to="/" className="mr-5 hover:text-gray-900">Category</NavLink>
    <NavLink to="/" className="mr-5 hover:text-gray-900">CreatePost</NavLink>
    {/* <NavLink to="/" className="mr-5 hover:text-gray-900"></NavLink> */}
  </nav>
  )
}

export default Navlinks