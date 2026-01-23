export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Consultant',
      content: 'Slotly has simplified my scheduling process. My clients love the easy booking experience.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Life Coach',
      content: 'The built-in CRM is a game-changer. I can track all my client interactions in one place.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Service Provider',
      content: 'Setting up was incredibly fast. I was booking clients within minutes of signing up.',
      avatar: 'ER',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by professionals worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
