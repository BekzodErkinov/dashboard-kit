import TicketList from './TicketList/TicketList'

import './TicketsContent.scss'

const TicketsContent = () => {
  return (
    <div className="tickets-content">
      <h1>Tickets</h1>
      <TicketList/>
    </div>
  )
}

export default TicketsContent
