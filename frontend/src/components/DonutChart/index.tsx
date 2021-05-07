import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { api } from 'services/api'
import { SaleSum } from 'types/sale'

type ChartData = {
  series: number[]
  labels: string[]
}

export default function DonutChart(){
  const[chartData, setChartData] = useState<ChartData>({series: [], labels: []})
  

  useEffect(() => {
    api.get('sales/amount-by-seller')
    .then(res =>{
      const data = res.data as SaleSum[]
      const labels = data.map(x => x.sellerName)
      const series = data.map(x => x.sum)

      setChartData({labels, series})
    })

  },[])

  const options = {
    legend: {
      show: true
  }
  }
  
  return(
    <Chart 
      options={{...options, labels: chartData.labels}} 
      series={chartData.series}
      type="donut"
      height="240"
    />
  )
}