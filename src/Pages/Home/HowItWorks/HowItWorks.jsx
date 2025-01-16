const HowItWorks = () => {
    const steps = [
      {
        title: "01. Search for Location",
        description:
          "Explore properties in your desired city or neighborhood. Use filters to narrow down options and find your perfect match.",
        icon: "https://img.icons8.com/ios-filled/50/4a90e2/place-marker.png",
      },
      {
        title: "02. Select Property Type",
        description:
          "Choose from a variety of property types, whether you're looking for apartments, villas, or commercial spaces.",
        icon: "https://img.icons8.com/ios-filled/50/f44336/building.png",
      },
      {
        title: "03. Book Your Property",
        description:
          "Finalize your choice and proceed with a seamless booking process. Move one step closer to your dream property.",
        icon: "https://img.icons8.com/ios-filled/50/4caf50/document.png",
      },
    ];
  
    return (
      <div className="py-12 px-4 md:px-8 mx-auto bg-gray-50">
        <div className="max-w-7xl mx-auto  text-center">
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-2 mb-8">
            Follow these 3 easy steps to find your dream property
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <img src={step.icon} alt={step.title} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;
  