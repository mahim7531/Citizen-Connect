import NavLinks from "./NavLinks";

const MobileMenu = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="md:hidden bg-white shadow-lg border-t">
      <div className="p-5">

        <NavLinks mobile />

        <button
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg"
          onClick={() => setOpen(false)}
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default MobileMenu;