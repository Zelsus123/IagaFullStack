 import {  page_title, DT, CardTitle, CardContent, Denuncias, CONTENIDO, Solicitudes, Charts, Chart, Content, ChartsContainer } from '../css/styles.module.scss'
 import { CChart } from '@coreui/react-chartjs'


export const Dashboard = () => {
  return (
    <div>
      <div className={Content}>
        <div className={page_title}>
          <h2>Dashboard Page</h2>
        </div>
          <div className={CONTENIDO}>
          <div className={Denuncias}>
          <div className={DT}>
            <div className={CardTitle}><h2>Denuncias Totales:</h2></div>
           <div className={CardContent}> <h1>15</h1> <h3>Denuncias Generadas</h3> </div>
          </div>

          <div className={DT}>
            <div className={CardTitle}><h2>Denuncias Asignadas:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Denuncias Asignadas</h3> </div>
          </div>
          <div className={DT}>
            <div className={CardTitle}><h2>Denuncias En Proceso:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Denuncias En Proceso</h3> </div>
          </div>
          <div className={DT}>
            <div className={CardTitle}><h2>Denuncias Procesadas:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Denuncias Procesadas</h3> </div>
          </div>
         
          </div>
          <div className={Solicitudes}>
          <div className={DT}>
            <div className={CardTitle}><h2>Solicitudes Totales:</h2></div>
           <div className={CardContent}> <h1>15</h1> <h3>Solicitudes Generadas</h3> </div>
          </div>

          <div className={DT}>
            <div className={CardTitle}><h2>Solicitudes Asignadas:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Solicitudes Asignadas</h3> </div>
          </div>
          <div className={DT}>
            <div className={CardTitle}><h2>Solicitudes En Proceso:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Solicitudes En Proceso</h3> </div>
          </div>
          <div className={DT}>
            <div className={CardTitle}><h2>Solicitudes Procesadas:</h2></div>
           <div className={CardContent}> <h1>5</h1> <h3>Solicitudes Procesadas</h3> </div>
          </div>
          </div>
          <div className={ChartsContainer}>

          <div className={Charts}>
            <span>Denuncias</span>
           <div className={Chart}> <CChart
            type='doughnut'
            data={{
              labels: ['Totales', 'Asignadas', 'Pendientes', 'Resueltas'],
              datasets: [{
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [15, 5,5, 5],
              },],
            }}
            />
            </div>
          </div>
          <div className={Charts}>
            <span>Solicitudes</span>
           <div className={Chart}> <CChart
            type='doughnut'
            data={{
              labels: ['Totales', 'Asignadas', 'Pendientes', 'Resueltas'],
              datasets: [{
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [15, 5,5, 5],
              },],
            }}
            />
            </div>
          </div>
            </div>
          
         </div>
         
      </div>        
      
    </div>
  )
}

