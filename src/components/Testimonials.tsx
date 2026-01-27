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
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Discover how businesses grow with Slotly
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
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
