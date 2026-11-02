import { useState } from 'react'

function Prioridades() {
	const [prioridades, setPrioridades] = useState([
		{ id: 1, nombre: 'Alta' },
		{ id: 2, nombre: 'Media' },
		{ id: 3, nombre: 'Baja' },
	])
	const [newPrioridad, setNewPrioridad] = useState('')
	const [editingPrioridadId, setEditingPrioridadId] = useState(null)
	const [editingPrioridadNombre, setEditingPrioridadNombre] = useState('')

	function handleAddPrioridad() {
		if (newPrioridad.trim() === "") return
		const newId = prioridades.length > 0 ? Math.max(...prioridades.map(p => p.id)) + 1 : 1
		setPrioridades([...prioridades, { id: newId, nombre: newPrioridad }])
		setNewPrioridad("")
	}

	function handleEditPrioridad(id) {
		const prioridadToEdit = prioridades.find((p) => p.id === id)
		if (!prioridadToEdit) return

		setEditingPrioridadId(id)
		setEditingPrioridadNombre(prioridadToEdit.nombre)
	}

	function handleSaveEditPrioridad() {
		const nombre = editingPrioridadNombre.trim()
		if (!nombre || editingPrioridadId === null) return

		setPrioridades(
			prioridades.map((p) =>
				p.id === editingPrioridadId ? { ...p, nombre } : p,
			),
		)
		setEditingPrioridadId(null)
		setEditingPrioridadNombre('')
	}

	const handleDeletePrioridad = (id) => {
		setPrioridades(prioridades.filter((p) => p.id !== id))
	}

	return (
		<main className="dashboard-page">
			<div className="dashboard-content">
				<section className="dashboard-section">
					<div>
						<p className="dashboard-section-title">Prioridades</p>
						<h2 id="prioridades-title">Gestionar Prioridades</h2>
					     <p>Escribe tu prioridad y consulta el estado de tu prioridad</p>
					</div>
					<div className="dashboard-section-content">
						<div className="prioridades-form">
							<input
								type="text"
								value={newPrioridad}
								onChange={(e) => setNewPrioridad(e.target.value)}
								placeholder="Nueva prioridad"
							/>
							<button onClick={handleAddPrioridad}>Agregar</button>
						</div>
					</div>
				</section>

				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<ul className="prioridades-list">
							{prioridades.map((prioridad) => ( 
								<li key={prioridad.id}>
									{editingPrioridadId === prioridad.id ? (
										<input
											type="text"
											value={editingPrioridadNombre}
											onChange={(e) => setEditingPrioridadNombre(e.target.value)}
										/>
									) : (
										<span>{prioridad.nombre}</span>
									)}
									{editingPrioridadId === prioridad.id ? (
										<button onClick={handleSaveEditPrioridad}>Guardar</button>
									) : (
										<button onClick={() => handleEditPrioridad(prioridad.id)}>Editar</button>
									)}
									<button onClick={() => handleDeletePrioridad(prioridad.id)}>Eliminar</button>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Información de Prioridades</h3>
						<p>Esta es la lista de prioridades disponibles.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Detalles de Prioridades</h3>
						<p>Información detallada sobre cada prioridad.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Estadísticas de Prioridades</h3>
						<p>Gráficos y estadísticas relacionadas con las prioridades.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Configuración de Prioridades</h3>
						<p>Ajustes y configuraciones para la gestión de prioridades.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Ayuda y Soporte</h3>
						<p>Contenido de ayuda y soporte para la gestión de prioridades.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Historial de Prioridades</h3>
						<p>Registro de cambios y acciones realizadas sobre las prioridades.</p>
					</div>
				</section>
				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Exportar Prioridades</h3>
						<p>Opciones para exportar la lista de prioridades a diferentes formatos.</p>
					</div>
				</section>

				<section className="dashboard-section">
					<div className="dashboard-section-content">
						<h3>Importar Prioridades</h3>
						<p>Opciones para importar prioridades desde archivos externos.</p>
					</div>

				</section>
			</div>

		</main>
	)
}

export default Prioridades