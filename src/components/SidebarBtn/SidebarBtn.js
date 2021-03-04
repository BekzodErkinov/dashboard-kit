import './SidebarBtn.scss'

const SidebarBtn = ({ icon, title, active, onClick }) => {
  return (
    <div>
      <button className={`sidebar-btn ${active ? 'active' : ''}`} onClick={onClick}>
        <div class="btn-icon">{icon}</div>
        <span class="title">{title}</span>
      </button>
    </div>
  )
}

export default SidebarBtn
