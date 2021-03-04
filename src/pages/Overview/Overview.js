import './Overview.scss'

// Images
import GrapghImg from '../../assets/images/fullgraph.png'

const Overview = () => {
  return (
    <div>
      <div className="overview-wrap">
        <header>
          <div className="about">
            <h3>Unresolved</h3>
            <span>60</span>
          </div>
          <div className="about">
            <h3>Overdue</h3>
            <span>16</span>
          </div>
          <div className="about">
            <h3>Open</h3>
            <span>43</span>
          </div>
          <div className="about">
            <h3>On hold</h3>
            <span>64</span>
          </div>
        </header>

        <main>
          <div className="diagrap">
            <div className="diagram-caption"></div>
            <img src={GrapghImg} alt="Graph" />
          </div>
          <div className="statistics">
            <div className="stat-item">
              <h4>Resolved</h4>
              <span>449</span>
            </div>
            <div className="stat-item">
              <h4>Received</h4>
              <span>426</span>
            </div>
            <div className="stat-item">
              <h4>Average first response time</h4>
              <span>33m</span>
            </div>
            <div className="stat-item">
              <h4>Average response time</h4>
              <span>3h 8m</span>
            </div>
            <div className="stat-item">
              <h4>Resolution within SLA</h4>
              <span>94%</span>
            </div>
          </div>
        </main>

        <footer>
          <div className="unresolved-ticket">
            <div>
              <h3>Unresolved ticket</h3>
              <button>View details</button>
            </div>
            <div>
              <p>Group: <span>Support</span></p>
            </div>
          </div>
          <div className="unresolved-ticket">

          </div>
        </footer>
      </div>
    </div>
  )
}

export default Overview
