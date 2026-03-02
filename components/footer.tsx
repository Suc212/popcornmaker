export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">MINI POPCORN</h3>
            <p className="text-sm leading-relaxed">Your lifestyle upgrade for moments of pure leisure and healthy snacking.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 Mini Popcorn Maker. All rights reserved.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">𝕏</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">f</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">in</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
