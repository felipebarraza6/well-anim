import React from 'react';
import { motion } from 'framer-motion';

function PozoDigital({ nivel }) {
  const porcentaje = Math.max(0, Math.min(nivel / 10 * 100, 100));

  return (
    <div className="relative w-64 h-96 border-4 border-brown-800 overflow-hidden rounded-xl shadow-lg bg-white">
      {/* Tierra */}
      <div className="absolute top-0 w-full h-1/2 bg-[url('/src/assets/images/textura_tierra2.jpg')] bg-cover" />

      {/* Agua */}
      <motion.div
        className="absolute bottom-0 w-full bg-blue-400"
        initial={{ height: '0%' }}
        animate={{ height: `${porcentaje}%` }}
        transition={{ duration: 1 }}
      >
        <div className="text-white text-center text-sm p-1">
          {nivel.toFixed(2)} m
        </div>
      </motion.div>

      {/* Datalogger con tooltip embebido */}
      <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 group">
        <div className="w-6 h-6 bg-black rounded-sm"></div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Datalogger: recoge y transmite datos
        </div>
      </div>

      {/* Caudalímetro con tooltip embebido */}
      <div className="absolute top-[42%] left-2 group">
        <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Caudalímetro: mide el flujo de agua
        </div>
      </div>
    </div>
  );
}

export default PozoDigital;