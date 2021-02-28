import Sidebar from '../../containers/Tickets/Sidebar/Sidebar'
import TicketsConetent from '../../containers/Tickets/TicketsContent/TicketsContent'

import './Tickets.scss'

const Tickets = () => {
  return (
    <div className="tickets">
      <Sidebar />
      <TicketsConetent />
    </div>
  )
}

export default Tickets
