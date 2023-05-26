import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Search from '../Search/search';
import { getnavigationMenu } from '@/lib/shopify';


  

const Menu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await getnavigationMenu();
      setMenu(res);
      console.log(res)
    }

    fetchProducts();
  }, []);

  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-white">
   <Link
      href="/"
      className="block md:inline-block px-3 py-2 rounded-md text-white focus:outline-none focus:text-white hover:bg-orange-300 focus:bg-orange-500"
    >
      Home
    </Link>
   <Link
      href="/product"
      className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-orange-300 focus:outline-none focus:text-white focus:bg-orange-500"
    >
      Products
    </Link>

    {
      menu.map((item, index) => (
        <Link
        href="/product"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-orange-300 focus:outline-none focus:text-white focus:bg-orange-500"
      >
        {item.title}
      </Link>
      ))
    }
   
  </div>
}

export default Menu;