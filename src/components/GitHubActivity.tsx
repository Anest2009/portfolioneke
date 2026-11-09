import activity from '../data/activity.json';

export default function GitHubActivity() {
  const total = activity.reduce((sum, day) => sum + day.count, 0);
  return <section className="activity-section"><div className="section-heading"><h2>GitHub Activity</h2><a className="view-all" href="https://github.com/Anest2009" target="_blank" rel="noreferrer">Anest2009 ↗</a></div><div className="activity-scroll"><div className="activity-chart"><div className="activity-months">{['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(month => <span key={month}>{month}</span>)}</div><div className="activity-grid" role="img" aria-label="Anest2009 GitHub contributions, November 2025 to November 2026">{activity.map(day => <span key={day.date} className={`activity-cell level-${day.level}`} title={`${day.date}: ${day.count} contributions`} />)}</div><div className="activity-caption"><span>{total.toLocaleString('en-US')} contributions · as of Nov 9, 2026</span><span className="activity-legend">Less {[0, 1, 2, 3, 4].map(level => <i key={level} className={`activity-cell level-${level}`} />)} More</span></div></div></div></section>;
}
