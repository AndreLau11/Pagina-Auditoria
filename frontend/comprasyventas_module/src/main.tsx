import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// DIAGNÓSTICO: Mostrar mensaje de error si falla
console.log('🚀 Iniciando aplicación React...');

const rootElement = document.getElementById('root');

if (!rootElement) {
  // Si no existe el elemento, crearlo
  document.body.innerHTML = `
    <div style="padding: 20px; color: red;">
      <h1>❌ ERROR CRÍTICO</h1>
      <p>No se encontró el elemento con id="root"</p>
      <p>Verifica que index.html tenga: &lt;div id="root"&gt;&lt;/div&gt;</p>
    </div>
  `;
  throw new Error('Elemento #root no encontrado');
}

// Limpiar cualquier contenido previo
rootElement.innerHTML = '';

try {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('✅ React montado correctamente');
  
} catch (error) {
  console.error('❌ Error al montar React:', error);
  
  // Mostrar error en pantalla
  rootElement.innerHTML = `
    <div style="padding: 20px; background: #ffebee; color: #c62828; border-radius: 8px;">
      <h2>⚠️ Error en la aplicación</h2>
      <p><strong>{(error as Error).message}</strong></p>
      <p>Por favor, revisa la consola (F12) para más detalles.</p>
      <button onclick="window.location.reload()" 
              style="padding: 10px 20px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Recargar página
      </button>
    </div>
  `;
}