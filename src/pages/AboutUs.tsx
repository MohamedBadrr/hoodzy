import { Heart, Truck, ShieldCheck, Headphones } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description:
      "We source only the finest materials and partner with ethical manufacturers to bring you clothing that looks great and lasts.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your order delivered quickly and reliably. We offer free shipping on orders over $100 to make your experience seamless.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Shop with confidence knowing your personal information and payments are protected with industry-leading security.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated customer support team is always here to help. Reach out anytime — we're just a message away.",
  },
];

const stats = [
  { number: "200+", label: "Brands Available" },
  { number: "50K+", label: "Happy Customers" },
  { number: "10K+", label: "Products Sold" },
  { number: "30+", label: "Countries Served" },
];

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-bg w-full px-25 py-20">
        <div className="max-w-3xl">
          <h1 className="font-inter font-bold text-5xl leading-tight mb-6">
            ABOUT SHOP.CO
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe that fashion should be accessible to everyone. Founded
            with a passion for style and a commitment to quality, SHOP.CO brings
            you a curated collection of clothing from the world's best brands —
            all in one place.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-25 my-16">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center border border-gray-200 rounded-2xl p-8"
            >
              <p className="font-inter font-bold text-4xl mb-2">
                {stat.number}
              </p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="mx-25 my-16">
        <div className="flex gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-inter font-bold text-3xl mb-6">Our Story</h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                SHOP.CO started as a small idea — what if finding great clothes
                didn't have to be so complicated? We were tired of jumping
                between stores and websites trying to find pieces that matched
                our style without breaking the bank.
              </p>
              <p>
                So we built something better. A single destination where quality
                meets affordability, where trends meet timelessness, and where
                every customer feels like they belong.
              </p>
              <p>
                Today, we partner with over 200 brands worldwide to bring you a
                diverse range of clothing that caters to every taste, size, and
                budget. Our team is dedicated to making your shopping experience
                as smooth and enjoyable as possible.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-[#F0F0F0] rounded-2xl h-96 flex items-center justify-center">
            <span className="text-gray-400">About Us Image</span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-25 my-16">
        <h2 className="font-inter font-bold text-3xl text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#F0F0F0] rounded-2xl p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <value.icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-black text-white mx-25 my-16 rounded-2xl px-16 py-14 text-center">
        <h2 className="font-inter font-bold text-3xl mb-4">
          Ready to Explore?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Browse our collection and find the perfect pieces to elevate your
          wardrobe.
        </p>
        <a
          href="/products"
          className="inline-block bg-white text-black font-medium px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
