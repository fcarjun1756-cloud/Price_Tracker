import { useState } from "react";
import {
  Search,
  Bell,
  TrendingDown,
  TrendingUp,
  Heart,
  ShoppingBag,
  BarChart3,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Apple iPhone 15",
      category: "Smartphone",
      price: "₹62,999",
      oldPrice: "₹69,900",
      change: "-10%",
      image:
        "https://images.unsplash.com/photo-1696446702183-cbd0f3a4df7a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: "₹24,990",
      oldPrice: "₹29,990",
      change: "-17%",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Apple MacBook Air",
      category: "Laptop",
      price: "₹89,990",
      oldPrice: "₹99,900",
      change: "-10%",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* NAVBAR */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl">
              <TrendingDown size={24} />
            </div>

            <h1 className="text-2xl font-bold">
              Price<span className="text-blue-500">Tracker</span>
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#products" className="hover:text-white">
              Products
            </a>

            <a href="#watchlist" className="hover:text-white">
              Watchlist
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-slate-800 rounded-lg">
              <Bell size={20} />
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold">
              Login
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-slate-300">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#watchlist">Watchlist</a>
            <a href="#about">About</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full text-blue-400 mb-6">
            <TrendingDown size={18} />
            Track prices. Save money.
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Never Overpay
            <br />

            <span className="text-blue-500">
              Again.
            </span>
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Track product prices across different platforms and get notified
            when prices drop.
          </p>

          {/* SEARCH BAR */}

          <div className="max-w-2xl mx-auto mt-10">

            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-2xl p-2 shadow-xl">

              <Search className="ml-3 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search for a product..."
                className="flex-1 bg-transparent outline-none px-4 py-3 text-white"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
                Search
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <StatCard
            icon={<ShoppingBag />}
            title="Products Tracked"
            value="1,250+"
          />

          <StatCard
            icon={<TrendingDown />}
            title="Price Drops"
            value="320"
          />

          <StatCard
            icon={<DollarSign />}
            title="Money Saved"
            value="₹2.5L+"
          />

          <StatCard
            icon={<BarChart3 />}
            title="Active Users"
            value="850+"
          />

        </div>

      </section>


      {/* PRODUCTS */}

      <section
        id="products"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-3xl font-bold">
              Trending Products
            </h2>

            <p className="text-slate-400 mt-2">
              Products with the latest price drops
            </p>
          </div>

          <button className="text-blue-400 hover:text-blue-300">
            View All →
          </button>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300"
            >

              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <button className="absolute top-4 right-4 bg-slate-950/70 p-3 rounded-full hover:text-red-500">
                  <Heart size={20} />
                </button>

              </div>


              <div className="p-6">

                <p className="text-blue-400 text-sm">
                  {product.category}
                </p>

                <h3 className="text-xl font-bold mt-2">
                  {product.name}
                </h3>


                <div className="flex items-center justify-between mt-5">

                  <div>

                    <p className="text-2xl font-bold">
                      {product.price}
                    </p>

                    <p className="text-slate-500 line-through">
                      {product.oldPrice}
                    </p>

                  </div>


                  <div className="bg-green-500/10 text-green-400 px-3 py-2 rounded-lg font-semibold">
                    {product.change}
                  </div>

                </div>


                <button className="w-full mt-6 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white py-3 rounded-xl transition">
                  Track Price
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="bg-slate-900/50 border-y border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              How It Works
            </h2>

            <p className="text-slate-400 mt-4">
              Save money in three simple steps
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <Step
              number="01"
              title="Search Product"
              description="Search for the product you want to buy."
            />

            <Step
              number="02"
              title="Track Price"
              description="Add the product to your watchlist."
            />

            <Step
              number="03"
              title="Get Alert"
              description="Get notified when the price drops."
            />

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Start Saving Money Today
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Track your favorite products and never miss a price drop.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Start Tracking
          </button>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="font-bold text-xl">
            Price<span className="text-blue-500">Tracker</span>
          </h2>

          <p className="text-slate-500 text-sm">
            © 2026 PriceTracker. Built for smarter shopping.
          </p>

        </div>

      </footer>

    </div>
  );
}


function StatCard({ icon, title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition">

      <div className="text-blue-500 mb-4">
        {icon}
      </div>

      <h3 className="text-slate-400 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}


function Step({ number, title, description }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">

      <p className="text-blue-500 font-bold text-xl">
        {number}
      </p>

      <h3 className="text-2xl font-bold mt-5">
        {title}
      </h3>

      <p className="text-slate-400 mt-3">
        {description}
      </p>

    </div>
  );
}


export default App;