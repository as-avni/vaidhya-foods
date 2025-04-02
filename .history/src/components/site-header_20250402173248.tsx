

<header className="relative bg-white bg-opacity-80 backdrop-blur-md shadow-lg sticky md:fixed top-0 md:top-3 left-0 md:left-10 w-[98%] md:w-[95%] mx-auto rounded-xl z-50">
  {/* Logo Container */}
  <div className="absolute top-0 left-4 md:left-10 transform -translate-y-1/2 bg-white shadow-md px-4 py-2 rounded-full">
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image src="https://drive.google.com/uc?export=view&id=1Qz3RdEXLgXk0V_xjMcnYZeFiTkE36xif" alt="Logo" width={40} height={40} className="h-10 w-auto" />
        <span className="text-xl font-bold text-black font-sriracha hidden md:block">Vaidhya Foods</span>
      </div>
    </Link>
  </div>

  <div className="mx-auto px-4 py-4 flex items-center justify-between pt-8 md:pt-4">
    {/* Desktop Navigation */}
    <nav className="hidden md:flex gap-6 text-sm font-sriracha">
      <Link href="/" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
        Home
      </Link>
      <Link href="/#about" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
        About Us
      </Link>
      <Link href="/#products" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
        Our Products
      </Link>
      <Link href="/#contact" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
        Contact Us
      </Link>
    </nav>

    {/* Desktop Button */}
    <Link href="tel:+917566645359" className="relative text-gray-600 text-lg font-semibold">
      <Button className="bg-black font-sriracha hover:bg-green-600 text-white px-4 py-2 rounded-full hidden md:block">Call Us</Button>
    </Link>

    {/* Mobile Menu Button */}
    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 focus:outline-none">
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden bg-green-50 py-4 px-4 shadow-lg">
      <nav className="absolute top-16 left-0 w-full bg-green-50 shadow-lg py-4 flex flex-col items-center gap-4 md:hidden">
        <Link href="/" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
          Home
        </Link>
        <Link href="/#about" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
          About Us
        </Link>
        <Link href="/#products" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
          Our Products
        </Link>
        <Link href="/#contact" className="relative text-black hover:text-green-600 text-base/[30px] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
          Contact Us
        </Link>
        <Link href="tel:+917566645359" className="w-full relative text-black text-lg font-semibold">
          <Button className="w-full bg-black hover:bg-green-600 text-white rounded-full">Call Us</Button>
        </Link>
      </nav>
    </div>
  )}
</header>
