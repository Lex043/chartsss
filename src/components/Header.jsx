const Header = () => {
    return (
        <header className="flex flex-col py-6 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-pink text-[32px] lg:text-[48px] font-Arapey font-bold">
                Chartssss<span className="text-black">.</span>
            </h1>
            <p className="font-bold text-[15px] text-purple">
                Discover music charts from all over the world
            </p>
        </header>
    );
};

export default Header;
