import React from "react";

export default function features() {
  return (
    
    <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Menu Section */}
                    <div>
                        <h3 className=" mb-4">Menu</h3>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Recently Viewed</a></li>
                            <li><a href="#">Popular This Week</a></li>
                            <li><a href="#">All Products</a></li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div>
                        <h3 className=" mb-4">Categories</h3>
                        <ul>
                            <li><a href="#">Crockery</a></li>
                            <li><a href="#">Furniture</a></li>
                            <li><a href="#">Homeware</a></li>
                            <li><a href="#">Plant Pots</a></li>
                            <li><a href="#">Chains</a></li>
                            <li><a href="#">Crockery</a></li>
                        </ul>
                    </div>

                    {/* Our Company Section */}
                    <div>
                        <h3 className=" mb-4">Our Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Vacancies</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Returns Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className=" mb-4">Join Our Mailing List</h3>
                        <form>
                            <input type="email" placeholder="your@email.com" className="w-[200px] bg-[#2A254B] border border-gray-700 p-2 mb-4" />
                            <button type="submit" className="bg-white text-black py-2 px-4 transition duration-300 easein-out hover:bg-gray-500 hover:scale-110">Sign Up</button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-start mt-8">
                    <p>&copy; 2022 Avion LTD</p>
                    
                </div>
            </div>
        </footer>
  )
}