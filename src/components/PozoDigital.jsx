import React from 'react';
import { motion } from 'framer-motion';

function PozoDigital({ nivel }) {
  const porcentaje = Math.max(0, Math.min(nivel / 10 * 100, 100));

  return (
    <div className="relative w-64 h-96 border-4 border-brown-800 overflow-hidden rounded-xl shadow-lg">
      {/* Tierra (parte superior) */}
      <div className="absolute top-0 w-full h-1/2 bg-[url('/src/assets/dirt-pattern.svg')] bg-repeat" />

      {/* Agua (parte inferior) que sube o baja */}
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
    </div>
  );
}

export default PozoDigital;