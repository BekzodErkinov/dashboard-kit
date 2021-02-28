import SidebarBtn from '../../components/SidebarBtn/SidebarBtn'
import {
  OverviewIcon,
  TicketIcon,
  IdeaIcon,
  PeopleIcon,
  AgentIcon,
  ArticleIcon,
  SettingIcon,
  SubsIcon, } from '../../assets/Icons/Icons'

import '../Sidebar/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1><img src="https://img.icons8.com/cute-clipart/40/000000/d.png" alt="D logo"/> Dashboard Kit</h1>
      <SidebarBtn icon={<OverviewIcon/>} title='Overview'/>
      <SidebarBtn icon={<TicketIcon/>} title='Tickets'/>
      <SidebarBtn icon={<IdeaIcon/>} title='Ideas'/>
      <SidebarBtn icon={<PeopleIcon/>} title='Contacts'/>
      <SidebarBtn icon={<AgentIcon/>} title='Agents'/>
      <SidebarBtn icon={<ArticleIcon/>} title='Articles'/>
      <SidebarBtn icon={<SettingIcon/>} title='Settings'/>
      <SidebarBtn icon={<SubsIcon/>} title='Subscription'/>
    </div>
  )
}

export default Sidebar
