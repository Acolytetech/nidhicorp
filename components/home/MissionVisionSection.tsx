// MissionVisionSection.jsx
export default function MissionVisionSection() {
  return (
    <section className="bg-yellow-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800">Mission & Vision</h2>
<div className="grid grid-cols-2 gap-4">

        {/* Mission */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make nutritious, hygienic, ready-to-eat traditional snacks accessible to everyone.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            A world where healthy, protein-rich Indian snacks are convenient, tasty, and part of every household.
          </p>
        </div>
</div>

        {/* Story */}
        {/* <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Story</h3>
          <p className="text-gray-600">
            India faces widespread protein deficiency, especially among children and working adults. 
            We set out to solve this problem by reinventing traditional snacks into protein-rich, 
            hygienically prepared options. Through modern packaging innovations, we ensure these snacks 
            stay fresh longer, are easy to consume on-the-go, and bring a perfect blend of health and taste 
            to every bite.
          </p>
        </div> */}
      </div>
    </section>
  );
}
