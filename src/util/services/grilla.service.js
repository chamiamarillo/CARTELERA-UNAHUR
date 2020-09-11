export const grilla = (jsonGrillaFiltrado) => {
  return {
    columns: [
      {
        label: 'Codigo',
        field: 'codigo',
        sort: 'asc',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Codigo',
        },
      },
      {
        label: 'Nombre',
        field: 'nombre',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Docentes',
        field: 'docentes',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Acceso Especial',
        field: 'acceso_especial',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Cant. Inscriptos',
        field: 'cant_inscriptos',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Dia de Cursada',
        field: 'horarios',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      ...jsonGrillaFiltrado.map(data => ( // los "..." hacen que valla guardando los resultados anteriores.
        {
          codigo: data.comision,
          nombre: data.nombre,
          docentes: data.docentes.map(docente => docente.nombres + " " + docente.apellido + " - "),
          acceso_especial: data.acceso_especial,
          cant_inscriptos: data.cant_inscriptos,
          horarios: data.horarios.map(hora => hora.dia + " - ")
        }
      ))
    ]
  }
}