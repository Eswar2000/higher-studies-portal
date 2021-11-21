import { Doughnut } from 'react-chartjs-2';



export default function PieChart({entryLabels, plotLabel, plotData, plotTitle}){
    return (
            <Doughnut data={{
                labels: entryLabels,
                datasets:[
                    {
                        label: plotLabel,
                        data: plotData,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 159, 64, 0.8)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }} 
            height={400} 
            width={600}
            options={{
                maintainAspectRatio: false,
                yAxes: {
                    ticks: {beginAtZero: true}
                },
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            textAlign: 'left',
                            pointStyle: 'circle',
                            usePointStyle: true,
                        },
                        title: {
                            text: plotTitle,
                            display: true,
                            font: {
                                size: 17, 
                            },
                            padding: 10,

                        }
                    }
                }
            }}
            />
    );
}