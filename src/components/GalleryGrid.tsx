import Image from 'next/image';
import image1 from "../assets/g1.jpg"
import image2 from "../assets/g2.jpg"
import image3 from "../assets/g3.jpg"
import image4 from "../assets/g4.jpg"
import image6 from "../assets/g6.jpg"
import image7 from "../assets/g7.jpg"
import image8 from "../assets/g8.jpg"
import image9 from "../assets/g9.jpg"
import image5 from "../assets/g10.jpg"

export default function GalleryGrid() {
    const images=[image1,image2,image3,image4,image5,image6,image7,image8,image9]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        
        { images.map((image,index)=>(
            <div  className="relative overflow-hidden rounded-lg shadow-md">
            <Image key={index}
              src={image}
              alt={`Image ${index+1}`}
              layout="responsive"
              width={300} /* Adjust as needed */
              height={200} /* Adjust as needed */
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          </div>

        ))
            }
        
          

          

      
    </div>
  )
}
