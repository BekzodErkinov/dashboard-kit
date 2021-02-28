import './SidebarBtn.scss'

const SidebarBtn = ({ icon, title }) => {
  return (
    <div>
      <button className="sidebar-btn">
        <div class="btn-icon">{icon}</div>
        <span class="title">{title}</span>
      </button>
    </div>
  )
}

export default SidebarBtn
