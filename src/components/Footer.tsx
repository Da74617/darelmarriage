import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="text-xl font-serif">Leticia & Kokpa</span>
            </div>
            <p className="text-gray-300">
              Merci de partager ce moment magique avec nous. 
              Votre présence est le plus beau des cadeaux.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>leticiaetkokpa2026@email.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+237 679 87 16 47</span>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Lieu</h4>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Château de Versailles</span>
            </div>
            <p className="text-gray-300 mt-2">
              15 Juin 2026<br />
              15h00 - 02h00
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            Fait avec <Heart className="w-4 h-4 inline text-rose-400" /> pour Leticia & Kokpa
          </p>
          <p className="text-gray-500 text-sm mt-2">
            #LETICIAETKOKPA2026
          </p>
        </div>
      </div>
    </footer>
  );
}