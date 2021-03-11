// SCSS
import './Overview.scss'

// Images
import GrapghImg from '../../assets/images/fullgraph.png'

const Overview = () => {
  return (
    <div>
      <div className="overview-wrap">
        <header>
          <button className="about">
            <h3>Unresolved</h3>
            <span>60</span>
          </button>
          <button className="about active">
            <h3>Overdue</h3>
            <span>16</span>
          </button>
          <button className="about">
            <h3>Open</h3>
            <span>43</span>
          </button>
          <button className="about">
            <h3>On hold</h3>
            <span>64</span>
          </button>
        </header>

        <main>
          <div className="diagrap">
            <div className="diagram-caption">
              <h3 className="diagram-title">Today's trends</h3>
              <div class="diagram-subtitle-wrap">
                <p className="diagram-subtitle">as of 25 March 2021, 09:41 PM</p>
                <span>Today</span>
                <span>Yesterday</span>
              </div>
            </div>
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
            <div className="unresolved-ticket-lead">
              <div>
                <h3>Unresolved ticket</h3>
                <button>View details</button>
              </div>
              <div>
                <p>Group: <span>Support</span></p>
              </div>
            </div>
            <div className="unresolved-ticket-body">
              <div className="item">
                <p></p>
                <span>4238</span>
              </div>
            </div>
          </div>

          <div className="tasks">
            <div>
              <h3>Unresolved ticket</h3>
              <button>View details</button>
            </div>
            <div>
              <p>Group: <span>Support</span></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Overview
