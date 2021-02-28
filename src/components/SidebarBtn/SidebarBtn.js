import './SidebarBtn.scss'

const SidebarBtn = ({ icon, title }) => {
  return (
    <div>
      <button className="sidebar-btn">
        {icon}
        {title}
      </button>
    </div>
  )
}

export default SidebarBtn
