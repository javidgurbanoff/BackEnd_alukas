import React from 'react';
import { PiGreaterThanThin } from "react-icons/pi";

const News = () => {
  return (
    <div className='w-full'>
      <div className='justify-center text-center mt-10'>
        <h1 className='text-[45px] font-medium font-jost'>News</h1>
        <div className="flex justify-center items-center gap-2 text-gray-600 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <PiGreaterThanThin />
          <span className='text-[#222222]'>News</span>
        </div>
      </div>

      <div className='flex justify-between px-12 py-12'>
        
        <div className='w-[30%] pl-[35px]'>
          <h2 className='text-[22px] font-bold mb-6 border-b-2 pb-2'>Popular Posts</h2>
          <div className="space-y-9">
            <div className="flex items-center gap-4">
              <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533" alt="Post 1" className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-semibold text-[16px]">Jewelry Horoscope Autumn</h3>
                <p className="text-sm text-gray-500">Mar 09 2024</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533" alt="Post 2" className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-semibold text-[16px]">The Wasteland Bracelet</h3>
                <p className="text-sm text-gray-500">Mar 06 2024</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533" alt="Post 3" className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-semibold text-[16px]">The North Earrings Bronze</h3>
                <p className="text-sm text-gray-500">Mar 06 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[65%] grid grid-cols-2 gap-6'>
          <div className='border border-gray-200 p-4'>
  <div className="relative">
    <img 
      src="https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533" 
      alt="Jewelry Horoscope Autumn" 
      className="w-[468px] h-[298px] object-cover mb-4" 
    />
    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
  </div>
  <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 09 2024</p>
  <h3 className="text-[26px] font-semibold mb-2">Jewelry Horoscope Autumn</h3>
  <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
  <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
  </div>


          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533" 
                alt="The Wasteland Bracelet" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 06 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">The Wasteland Bracelet</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533" 
                alt="The North Earrings Bronze" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 06 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">The North Earrings Bronze</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/14.jpg?v=1711695388&width=533" 
                alt="Vintage Charm Bracelet" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 12 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">Vintage Charm Bracelet</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>
        </div>
      </div>

      <div className='flex justify-between px-12 py-4'>
        <div className='w-[30%] pl-[35px]'>
          <h2 className='text-[22px] font-bold mb-6 border-b-2 pb-2'>Category</h2>
          <ul className='text-[18px]'>
            <li>News</li>
            <li>Accessories</li>
            <li>Collection</li>
            <li>Fashion</li>
            <li>Jewelry</li>
          </ul>
        </div>

        <div className='w-[65%] grid grid-cols-2 gap-6'>
          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/9.jpg?v=1711695256&width=533" 
                alt="Jewelry Horoscope Autumn" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 09 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">Jewelry Horoscope Autumn</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/8.jpg?v=1711695344&width=533" 
                alt="The Wasteland Bracelet" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 06 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">The Wasteland Bracelet</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

        
        </div>
      </div>

      <div className='flex justify-between px-12 py-4'>
        <div className='w-[30%] pl-[35px]'>
          <h2 className='text-[18px] font-medium mb-6 border-b-3 pb-2'>Tags</h2>
          <div className='flex flex-wrap gap-2'>
            <a href="#" className='text-[#555555] px-3 py-1 text-sm font-medium hover:bg-[#222222] hover:text-[#fff] border border-gray-300'>Accessories</a>
            <a href="#" className='text-[#555555] px-3 py-1 text-sm font-medium hover:bg-[#222222] hover:text-[#fff] border border-gray-300'>Collection</a>
            <a href="#" className='text-[#555555] px-3 py-1 text-sm font-medium hover:bg-[#222222] hover:text-[#fff] border border-gray-300 flex-grow flex-shrink-0'>Fashion</a>
            <a href="#" className='text-[#555555] px-3 py-1 text-sm font-medium hover:bg-[#222222] hover:text-[#fff] border border-gray-300'>Jewelry</a>
            <a href="#" className='text-[#555555] px-3 py-1 text-sm font-medium hover:bg-[#222222] hover:text-[#fff] border border-gray-300'>Trends</a>
          </div>
          <img src="https://demo-alukas.myshopify.com/cdn/shop/files/1_cfa07896-8a09-4ba5-ab76-257dd1c39520.jpg?v=1709716954&width=1000" alt="Tag Image" className="mt-4 w-full h-auto cursor-pointer" />
        </div>

        <div className='w-[65%] grid grid-cols-2 gap-6'>
          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/4.jpg?v=1711695367&width=533" 
                alt="Jewelry Horoscope Autumn" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 09 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">Jewelry Horoscope Autumn</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

          <div className='border border-gray-200 p-4'>
            <div className="relative">
              <img 
                src="https://demo-alukas.myshopify.com/cdn/shop/articles/5.jpg?v=1711695279&width=533" 
                alt="The Wasteland Bracelet" 
                className="w-[468px] h-[298px] object-cover mb-4" 
              />
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEWS</span>
            </div>
            <p className="text-sm text-gray-500">POST BY ALUKAS SHOPIFY - MAR 06 2024</p>
            <h3 className="text-[26px] font-semibold mb-2">The Wasteland Bracelet</h3>
            <p className="text-sm text-gray-500">Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key</p>
            <a href="#" style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }} className="text-[#222222] text-[18px] hover:underline mt-2 inline-block">Continue Reading</a>
            </div>

      

          
        </div>
      </div>
    </div>
  );
}

export default News;
