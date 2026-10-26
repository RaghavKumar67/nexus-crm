
type DashboardCardProps = {
  title: string;
  value: number;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <article className="dashboard-card">
      <h3>{title}</h3>
      <p className="card-value">{value}</p>
    </article>
  );
}

export default DashboardCard;
