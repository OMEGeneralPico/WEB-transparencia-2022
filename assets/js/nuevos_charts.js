//Municipalidad chart porcentaje por sexo
const ctx = document.getElementById('municipalidad_sexo').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Femenino', 'Masculino',],
        datasets: [{
            label: '# of Votes',
            data: [47, 53],
            backgroundColor: [
              'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)'
        ],
        borderColor: [
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Empleados por género (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });

  
    
const ctx2 = document.getElementById('municipalidad_nivel_educativo').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Primario','Secundario', 'Terciario', 'Universitario',],
        datasets: [{
            label: '# of Votes',
            data: [418, 358,34,124],
            backgroundColor: [
              'rgba(71, 123, 168, 0.2)',
              'rgba(105, 190, 190, 0.2)',
          'rgba(215, 90, 218, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',

          'rgba(35, 145, 200, 0.2)',
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(235, 235, 225,0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
      'rgba(215, 90, 218, 1)',
      'rgba(240, 150, 145, 1)',
      'rgba(55, 55, 55,1)',

      'rgba(35, 145, 200, 1)',
      'rgba(153, 070, 135, 1)',
      'rgba(190, 135, 180, 1)',
      'rgba(235, 235, 225,1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Empleados por nivel educativo (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });

const ctx3 = document.getElementById('municipalidad_rango_etario').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['menos de 30 años','30 a 55 años', 'más de 55 años',],
        datasets: [{
            label: '# of Votes',
            data: [54,693,187],
            backgroundColor: [
              'rgba(71, 123, 168, 0.2)',
          'rgba(105, 190, 190, 0.2)',
          'rgba(35, 145, 200, 0.2)',
          'rgba(240, 150, 145, 0.2)',
          'rgba(55, 55, 55,0.2)',
          'rgba(235, 235, 225,0.2)',
          
          'rgba(153, 070, 135, 0.2)',
          'rgba(190, 135, 180, 0.2)',
          'rgba(215, 90, 218, 0.2)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)',
          
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)'
        ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            display: 'auto',
            formatter: function (value) {
              return Math.round(value) + '%';
            },
            color: 'white',
            font: {
               
             
              family: 'Raleway'
            }
          },
          title: {
            align: 'start',
            display: true,
            text: 'Empleados por rango etario (%)',
            font: {
              family: 'Titillium Web',
              size: 20,
            },
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } }
          }
        }
      }
    });  const seba = document.getElementById('graficodePresupuesto').getContext('2d');

    const presupuestoTotal = new Chart(seba, {
      type: 'bar', // Puedes cambiar el tipo de gráfico si lo deseas
    data: {
        labels: [
            "Intendencia",
            "Gobierno",
            "Gestion Urbana",
            "Ambiente",
            "Des. Social",
            "Economia"
        ],
        datasets: [
        
            {
                label: 'Gasto Real',
                data: [
                    1346720057.17,
                    5706822769.13,
                    2691622515.74,
                    8028998956.21,
                    4019910156.57,
                    2745799911.82
                ],
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
                categoryPercentage: 1.0,
                stack: 'presupuesto'
            },    {
              label: 'Presupuesto Total',
              data: [
                  1399271307.74,
                  5893263284.98,
                  2771489217.39,
                  8783778816.92,
                  4162189809.80,
                  2861037049.18
              ],
              backgroundColor: 'rgba(54, 162, 235, 0.9)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
              barPercentage: 0.8,
              categoryPercentage: 1.0,
              stack: 'presupuesto'
          }
        ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      scales: {
          y: {
              beginAtZero: true,
              stacked: false
          },
          x: {
              stacked: false
          }
      },
      layout: {
          padding: {
              top: 10,
              bottom: 10
          }
      },
      plugins: {
          datalabels: {formatter: (val) => (`${val}%`)},
          tooltip: {
              callbacks: {
                  label: function(tooltipItem) {
                      return tooltipItem.dataset.label + ': $' + tooltipItem.raw.toLocaleString();
                  }
              }
          }
      }
  }
});