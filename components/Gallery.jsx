import GalleryItem from "@components/GalleryItem"

const Gallery = () => {
  const galleryItems = [
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'Shooting Stars', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'The Catalyzer', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'The 400 Blows', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'Neptune', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'Holden Caulfield', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
    { imgSrc: 'assets/images/image.png', subtitle: 'THE SUBTITLE', title: 'Alper Kamu', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores necessitatibus et aliquid. Consectetur voluptas omnis quia explicabo accusamus nulla, repudiandae porro, itaque quaerat facilis, magnam maxime provident excepturi adipisci!' },
  ];

  return (
    <section id='gallery' className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lorem ipsum dolor sit amet.</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab dolore ad nisi voluptatem numquam temporibus tenetur sed illum quas. Sequi quis iusto dolor nihil fuga est dolore quidem molestiae.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imgSrc={item.imgSrc}
              subtitle={item.subtitle}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
