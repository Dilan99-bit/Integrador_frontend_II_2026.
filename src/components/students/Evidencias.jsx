import React, { useState } from 'react';

export default function Evidencias() {
  // Estado local para gestionar tus evidencias del módulo
  const [listaEvidencias, setListaEvidencias] = useState([
    { id: 1, titulo: 'Configuración de Entorno y Git', descripcion: 'Pruebas de control de versiones y actualización local.', fecha: '2026-10-18', estado: 'Completado' },
    { id: 2, titulo: 'Integración de Componentes', descripcion: 'Estructura base adaptada al proyecto grupal.', fecha: '2026-10-19', estado: 'En proceso' }
  ]);

  const [nuevaEvidencia, setNuevaEvidencia] = useState({ titulo: '', descripcion: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaEvidencia.titulo.trim()) return;

    const item = {
      id: Date.now(),
      titulo: nuevaEvidencia.titulo,
      descripcion: nuevaEvidencia.descripcion,
      fecha: new Date().toISOString().split('T')[0],
      estado: 'Entregado'
    };

    setListaEvidencias([item, ...listaEvidencias]);
    setNuevaEvidencia({ titulo: '', descripcion: '' });
  };

  return (
    <section className="workspace-section evidence-page" aria-labelledby="evidence-title">
      {/* Encabezado del Panel */}
      <div className="evidence-card">
        <header className="evidence-card-header">
          <p className="workspace-section-eyebrow">E-CESDE</p>
          <h2 id="evidence-title">Panel de Evidencias</h2>
        </header>
        <div className="evidence-card-content">
          <p>Espacio seguro e independiente para la entrega y verificación de las actividades del integrador.</p>
        </div>
      </div>

      {/* Formulario para registrar nueva evidencia */}
      <div className="evidence-card">
        <div className="evidence-card-heading">
          <h3>Registrar Nueva Evidencia</h3>
        </div>
        <form onSubmit={handleSubmit} className="evidence-form">
          <div className="evidence-field">
            <label htmlFor="evidence-title-input">Título de la Actividad:</label>
            <input 
              id="evidence-title-input"
              type="text" 
              placeholder="Ej: Avance de módulo o pruebas"
              value={nuevaEvidencia.titulo}
              onChange={(e) => setNuevaEvidencia({ ...nuevaEvidencia, titulo: e.target.value })}
              required
            />
          </div>
          <div className="evidence-field">
            <label htmlFor="evidence-description-input">Descripción / Observaciones:</label>
            <textarea 
              id="evidence-description-input"
              rows="3"
              placeholder="Detalles de lo realizado..."
              value={nuevaEvidencia.descripcion}
              onChange={(e) => setNuevaEvidencia({ ...nuevaEvidencia, descripcion: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn-registrar evidence-submit">
            Guardar Evidencia
          </button>
        </form>
      </div>

      {/* Listado de Evidencias */}
      <div className="evidence-card">
        <div className="evidence-card-heading">
          <h3>Historial de Evidencias Registradas</h3>
        </div>
        <div className="evidence-card-content">
          {listaEvidencias.length === 0 ? (
            <p className="evidence-empty">No hay evidencias registradas todavía.</p>
          ) : (
            <ul className="evidence-list">
              {listaEvidencias.map((item) => (
                <li key={item.id} className="evidence-item">
                  <div>
                    <span className="evidence-item-title"><strong>{item.titulo}</strong></span><br />
                    <span>{item.descripcion}</span><br />
                    <small className="evidence-item-meta">Fecha: {item.fecha} | Estado: <span className="evidence-status">{item.estado}</span></small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}