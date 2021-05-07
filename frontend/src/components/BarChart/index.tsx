import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { api } from 'services/api'
import { SaleSuccess } from 'types/sale'
import { round } from 'utils/format'

type SeriesData = {
  name: string
  data: number[]
}

type ChartData = {
  labels: {
    categories: string[]
  },
  series: SeriesData[]
}

export default function BarChart(){
  
  const[chartData, setChartData] = useState<ChartData>({
    labels:{categories:[]},
    series: [{name: "", data: []}]
  })
  

  useEffect(() => {
    api.get('sales/success-by-seller')
    .then(res =>{
      const data = res.data as SaleSuccess[]
      const labels = data.map(x => x.sellerName)
      const series = data.map(x => round(100 * x.deals/x.visited, 1))

      setChartData({
        labels: {categories : labels},
        series: [{name: "% de sucesso", data: series}]
      })
    })

  },[])


  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
  }
  
  return(
    <Chart 
      options={{...options, xaxis: chartData.labels}} 
      series={chartData.series}
      type="bar"
      height="240"
    />
  )
}