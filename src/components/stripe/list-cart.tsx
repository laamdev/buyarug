'use client'

export const ListCart = () => {
  return (
    <div className='mt-4 flex flex-col gap-2'>
      <table className='text-slate-400'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className='py-2 text-center text-slate-600'>
              No Data
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
