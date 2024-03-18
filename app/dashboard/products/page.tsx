import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const products = [
  {
    id: 1,
    title: 'Apple iPhone 15 (Green, 512 GB)',
    description: `Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.`,
    mrp: '$59.99',
    price: '$10.99',
    image: '/products/iPhone.png',
    rating: 4.5,
    ratingCount: 200,
  },
  {
    id: 2,
    title:
      'Apple 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A',
    description:
      'This Apple Macbook is powered by the Apple M1 chip and is easily portable so that you can carry it with you anywhere you want. This thin and light notebook is equipped with an 8-core CPU to handle all your tasks more efficiently. The 8-core GPU of this notebook takes graphic-intensive games and apps to a whole new level. It also comes with a 16-core Neural Engine to do machine learning tasks more effectively. Its fan-less design offers silent operations and has a long-lasting battery life which can last up to 18 hours on a single charge.',
    mrp: '$99.99',
    price: '$49.99',
    image: '/products/macBook.png',
    rating: 4.8,
    ratingCount: 150,
  },
  // Add more products as needed
];

export default function Product() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-primary mb-4 text-3xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <Link href={`/dashboard/products/${product.id}`} key={product.id}>
            <div className="block">
              <div className="flex justify-between rounded-lg p-4 shadow-md transition duration-300 hover:bg-gray-100">
                <div className="mr-4 flex h-full w-1/3 items-center justify-center">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-16 w-16">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex w-2/3 flex-col justify-between">
                  <h2 className="mb-2 text-xl font-semibold">
                    {product.title}
                  </h2>
                  <p className="mb-2 text-sm text-gray-600">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <p className="mr-auto font-semibold text-gray-800">
                      {product.price}
                      <span className="ml-1 text-xs text-gray-600 line-through">
                        {product.mrp}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <span className="mr-1 text-gray-600">Rating:</span>
                      <span className="text-yellow-400">{product.rating}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0l2.42 7.345h7.747L12.938 11.77l2.407 7.345L10 14.964l-5.345 4.153 2.407-7.345L0 7.345h7.753L10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-1 text-gray-600">
                        ({product.ratingCount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
