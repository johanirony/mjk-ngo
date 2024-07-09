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
    const images=[
      {
        id:1,
        file:image1
      },
      {
        id:2,
        file:image2
      },
      {
        id:3,
        file:image3
      },
      {
        id:4,
        file:image4
      },
      {
        id:5,
        file:image5
      },
      {
        id:6,
        file:image6
      },
      {
        id:7,
        file:image7
      },
      {
        id:8,
        file:image8
      },
      {
        id:9,
        file:image9
      },


    ]
      
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
        
        { images.map((file,id)=>(
            <div  className="relative overflow-hidden rounded-lg shadow-md">
            <Image key={id}
              src={file.file}
              alt={`Image ${id+1}`}
              layout="responsive"
              width={300} 
              height={200} 
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          </div>

        ))
            }
        
          

          

      
    </div>
  )
}
