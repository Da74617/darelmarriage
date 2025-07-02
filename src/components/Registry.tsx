import React, { useState } from 'react';
import { Gift, Heart, Euro, ExternalLink } from 'lucide-react';

export default function Registry() {
  const [selectedGift, setSelectedGift] = useState<number | null>(null);

  const gifts = [
    {
      id: 1,
      name: 'Voyage de Noces au Japon',
      price: 500,
      description: 'Contribuez à notre lune de miel au pays du soleil levant',
      image: '/images/gift/voyage.PNG',
      collected: 1200,
      goal: 3000
    },
    {
      id: 2,
      name: 'Électroménager',
      price: 100,
      description: 'Pour équiper notre nouveau foyer',
      image: '/images/gift/electromenager.PNG',
      collected: 800,
      goal: 1500
    },
    {
      id: 3,
      name: 'Décoration Maison',
      price: 50,
      description: 'Pour embellir notre nid d\'amour',
      image: '/images/gift/decoration.PNG',
      collected: 300,
      goal: 800
    },
    {
      id: 4,
      name: 'Weekend Romantique',
      price: 150,
      description: 'Pour une escapade à deux',
      image: '/images/gift/weekend.JPG',
      collected: 450,
      goal: 600
    }
  ];

  const customAmounts = [25, 50, 100, 200];

  return (
    <section id="registry" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-6">
            Notre Cagnotte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre présence est le plus beau des cadeaux. Si vous souhaitez nous gâter, 
            voici quelques idées pour nous aider à démarrer notre nouvelle vie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {gifts.map((gift) => {
            const progressPercentage = (gift.collected / gift.goal) * 100;
            
            return (
              <div key={gift.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-gray-700">{gift.price}€ min</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif text-gray-800 mb-2">{gift.name}</h3>
                  <p className="text-gray-600 mb-4">{gift.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Collecté</span>
                      <span>{gift.collected}€ / {gift.goal}€</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-rose-400 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedGift(gift.id)}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Contribuer</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Contribution Libre</h3>
            <p className="text-gray-600">
              Choisissez le montant qui vous convient pour nous aider à réaliser nos rêves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {customAmounts.map((amount) => (
              <button
                key={amount}
                className="border-2 border-rose-200 hover:border-rose-500 hover:bg-rose-50 text-gray-700 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {amount}€
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
              <Euro className="w-5 h-5" />
              <span>Montant personnalisé</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-serif text-gray-800 mb-3">Informations bancaires</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>IBAN :</strong> FR76 1234 5678 9012 3456 7890 123</p>
              <p><strong>BIC :</strong> ABCDFR21XXX</p>
              <p><strong>Libellé :</strong> Mariage Marie & Pierre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}