import React from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';

export default function FOMO() {
  const testimonials = [
    {
      name: 'Sophie & Thomas',
      text: 'Marie et Pierre forment le couple le plus adorable que nous connaissons. Leur mariage sera magique !',
      avatar: '/images/testimonials/marie-piere.JPG'
    },
    {
      name: 'Les Parents',
      text: 'Nous sommes si fiers de voir nos enfants unis dans l\'amour. Cette journée sera inoubliable.',
      avatar: '/images/testimonials/famille.JPG'
    },
    {
      name: 'Les Amis de Fac',
      text: 'On a hâte de célébrer avec vous ! Préparez-vous à une soirée mémorable sur la piste de danse.',
      avatar: '/images/testimonials/amis.JPG'
    }
  ];

  const highlights = [
    {
      icon: Star,
      title: 'Lieu d\'Exception',
      description: 'Le Château de Versailles et ses jardins magnifiques'
    },
    {
      icon: Heart,
      title: 'Moments Magiques',
      description: 'Cérémonie, vin d\'honneur et soirée dansante jusqu\'au bout de la nuit'
    },
    {
      icon: MessageCircle,
      title: 'Retrouvailles',
      description: 'Tous nos proches réunis pour célébrer l\'amour'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-6">
            Pourquoi vous ne pouvez pas manquer ça !
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une journée exceptionnelle vous attend avec des moments inoubliables
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-serif text-gray-800 text-center mb-8">
            Ce que disent nos proches
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-gray-800 font-medium">
                  {testimonial.name}
                </cite>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-serif mb-4">
              Réservez cette date !
            </h3>
            <p className="text-amber-100 text-lg mb-6">
              15 Juin 2026 - Une journée qui restera gravée dans nos mémoires
            </p>
            <button
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Confirmer ma présence maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}