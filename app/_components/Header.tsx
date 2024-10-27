import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import MobileSidebarMenu from "./SideMenu";
import AccountLink from "./AccountLink";

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
        <MobileSidebarMenu accountLink={<AccountLink />} />
      </div>
    </header>
  );
}

export default Header;
