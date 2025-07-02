import React from 'react';
import { MapPin, Clock, Shirt, Car, Camera, Music } from 'lucide-react';

export default function PracticalInfo() {
  const infoItems = [
    {
      icon: MapPin,
      title: 'Lieu de la Cérémonie',
      details: [
        'Château de Versailles',
        'Place d\'Armes, 78000 Versailles',
        'Orangerie du Château'
      ]
    },
    {
      icon: Clock,
      title: 'Programme de la Journée',
      details: [
        '14h30 - Accueil des invités',
        '15h00 - Cérémonie civile',
        '16h00 - Vin d\'honneur',
        '19h30 - Dîner & Soirée dansante'
      ]
    },
    {
      icon: Shirt,
      title: 'Dress Code',
      details: [
        'Tenue de soirée souhaitée',
        'Couleurs : Pastel & Nude',
        'Éviter le blanc et le noir',
        'Talons déconseillés (pelouse)'
      ]
    }
  ];

  const practicalItems = [
    {
      icon: Car,
      title: 'Transport',
      description: 'Parking gratuit disponible. Navettes organisées depuis la gare RER.'
    },
    {
      icon: Camera,
      title: 'Photos',
      description: 'Photographe professionnel présent. Partagez vos photos avec #MarieEtPierre2024'
    },
    {
      icon: Music,
      title: 'Musique',
      description: 'DJ et orchestre live. Vos suggestions musicales sont les bienvenues !'
    }
  ];

  return (
    <section id="info" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-6">
            Informations Pratiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir pour profiter pleinement de cette journée magique
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {infoItems.map((item, index) => (
            <div key={index} className="bg-rose-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mr-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gray-800">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {practicalItems.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-serif mb-4">Besoin d'aide ?</h3>
          <p className="text-rose-100 mb-6">
            Pour toute question, n'hésitez pas à nous contacter
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <div>
              <span className="font-medium">Marie :</span>
              <a href="tel:+33123456789" className="ml-2 hover:underline">06 12 34 56 78</a>
            </div>
            <div>
              <span className="font-medium">Pierre :</span>
              <a href="tel:+33123456789" className="ml-2 hover:underline">06 98 76 54 32</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}