import React from 'react';
import ResponsiveImage from './ResponsiveImage';

const ImageTest = () => {
  const testImages = [
    '/kuno/black_logo.png',
    '/kuno/cheetah.jpg',
    '/kuno/leopard.jpg',
    '/kuno/bear.jpg',
    '/kuno/cat.jpg',
    '/kuno/hyena.jpg',
    '/kuno/more_info.jpg',
    '/kuno/overlay1.jpg',
    '/kuno/overlay2.jpg',
    '/kuno/FAMILY.jpg',
    '/kuno/COUPLE.jpg',
    '/kuno/PHOTOGRAPHERS.jpg',
    '/kuno/GALLERY/bear.jpg',
    '/kuno/GALLERY/cheetah.jpg',
    '/kuno/GALLERY/cat.jpg',
    '/kuno/GALLERY/COUPLE.jpg',
    '/kuno/GALLERY/FAMILY.jpg',
    '/kuno/GALLERY/feature_1.jpg',
    '/kuno/home_background_74.gif',
    '/kuno/awareness_sessions.jpg',
    '/kuno/Educating_local.jpg',
    '/kuno/Wildlife Rescue & Rehabilitation.jpg',
    '/kuno/jungle_cat.jpg',
    '/kuno/wolf_puppies.jpg',
    '/kuno/rock_python.jpg'
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Loading Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testImages.map((imagePath, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-mono mb-2 text-gray-600">{imagePath}</h3>
            <ResponsiveImage
              src={imagePath}
              alt={`Test image ${index + 1}`}
              className="w-full h-48 object-cover rounded"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="mt-2 text-xs text-gray-500">
              Status: ✅ Loaded
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
