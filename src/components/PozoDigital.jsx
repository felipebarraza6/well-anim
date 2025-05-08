import React from 'react';
import { motion } from 'framer-motion';
import DGALogo from '../assets/images/dganuevo.jpg'; // Importa la imagen de DGA
import IKOLULogo from '../assets/images/huella_en_circulo.png'; // Importa la imagen de IKOLU

function PozoDigital({ nivel }) {
  const porcentaje = Math.max(0, Math.min(nivel / 10 * 100, 100));

  return (
    <div className="relative w-64 h-96 border-4 border-brown-800 overflow-visible rounded-xl shadow-lg bg-white">
      {/* Tierra */}
      <div className="absolute top-0 w-full h-1/2 bg-[url('/src/assets/images/terreno1.png')] bg-cover" />

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
        {/* Elemento que representa el Datalogger */}
        <div className="w-6 h-6 bg-black rounded-sm"></div>
        {/* Tooltip para el Datalogger */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
          Datalogger: recoge y transmite datos
        </div>
        {/* Imagen de DGA */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2">
          <img src={DGALogo} alt="Logo DGA" width="30" height="30" />
        </div>

      </div>

      <div className="absolute top-[42%] left-[10%] z-50">
  {/* Caudalímetro (icono negro) */}
  <div className="w-6 h-6 bg-black rounded-sm"></div>
{/* Tooltip SIEMPRE visible (sin hover) */}
<div className="mt-2 bg-black text-white text-xs px-2 py-1 rounded text-center shadow-lg w-40">
    <div className="font-bold">Caudalímetro</div>
    <div>Dispositivo que mide el caudal del agua</div>
  </div>
  </div>

      {/* Imagen de IKOLU (fuera del grupo para no interferir con el tooltip) */}
<div className="absolute top-[50%] left-[1%] z-10">
  <img src={IKOLULogo} alt="Logo IKOLU" width="30" height="30" />
    </div>
  </div>
  );
}

export default PozoDigital;