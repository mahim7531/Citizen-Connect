import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          CitizenConnect
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Login */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <MobileMenu open={open} setOpen={setOpen} />

    </header>
  );
};

export default Navbar;