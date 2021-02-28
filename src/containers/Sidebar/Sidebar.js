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
  import MainLogo from '../../assets/images/logo.svg'

  const sidebarBtnArr = [
    {
      title: 'Overview',
      icon: <OverviewIcon/>,
    },
    {
      title: 'Tickets',
      icon: <TicketIcon/>,
    },
    {
      title: 'Ideas',
      icon: <IdeaIcon/>,
    },
    {
      title: 'Contacts',
      icon: <PeopleIcon/>,
    },
    {
      title: 'Agents',
      icon: <AgentIcon/>,
    },
    {
      title: 'Articles',
      icon: <ArticleIcon/>,
    },
    {
      title: 'Settings',
      icon: <SettingIcon/>,
    },
    {
      title: 'Subscription',
      icon: <SubsIcon/>,
    },
  ]

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-holder">
        <img className="sidebar-logo" src={MainLogo} alt="Logo" />
        <h1 class="sidebar-lead">Dashboard Kit</h1>
      </div>

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
