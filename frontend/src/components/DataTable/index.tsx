import Pagination from "components/Pagination"
import { useEffect, useState } from "react"
import { api } from "services/api"
import { SalePage } from "types/sale"
import { formatLocalDate } from "utils/format"

export default function DataTable() {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  })
  const [currentPage, setCurrentPage] = useState<number>(0)

  useEffect(() => {
    api.get(`sales?page=${currentPage}&size=20&sort=date,desc`)
      .then((res) => {
        setPage(res.data)
      })
  }, [currentPage])

  function handleOnPageChange(index: number){
    setCurrentPage(index)
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map(item => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, 'dd/MM/YYY')}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
      <Pagination page={page} onPageChange={handleOnPageChange}/>
    </>
  )
}