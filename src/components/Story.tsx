import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function Story() {
  const timeline = [
    {
      year: '2018',
      title: 'Notre Rencontre',
      description: 'Nous nous sommes rencontrés lors d\'un voyage en Toscane. Un coup de foudre instantané sous le soleil italien.',
      icon: Star
    },
    {
      year: '2020',
      title: 'Premier Appartement',
      description: 'Nous avons emménagé ensemble dans notre petit cocon parisien, avec vue sur les toits de Montmartre.',
      icon: Heart
    },
    {
      year: '2022',
      title: 'La Demande',
      description: 'Kokpa a fait sa demande lors d\'un coucher de soleil sur la plage de Biarritz. Leticia a dit oui !',
      icon: Sparkles
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-6">
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une belle histoire d'amour qui nous mène aujourd'hui vers le plus beau jour de notre vie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Marie</h3>
              <p className="text-gray-600 leading-relaxed">
                Passionnée de littérature et de photographie, Leticia illumine chaque jour par sa joie de vivre 
                et sa créativité. Elle adore découvrir de nouveaux endroits et partager des moments précieux 
                avec ses proches.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">KOKPA</h3>
              <p className="text-gray-600 leading-relaxed">
                Administrateur reseau et musicien dans l'âme, DAREL apporte stabilité et harmonie dans 
                leur relation. Il rêve de construire leur maison idéale et de composer la bande sonore 
                de leur vie ensemble.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/couple-story.JPG"
              alt="Leticia et KOKPA"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rose-200"></div>
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <event.icon className="w-5 h-5 text-rose-500" />
                      <span className="text-rose-500 font-bold text-lg">{event.year}</span>
                    </div>
                    <h4 className="text-xl font-serif text-gray-800 mb-2">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex-shrink-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}