
function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to Nexus CRM. Manage your customers and sales in one place.</p>

      <section className="dashboard-cards">
        <article className="dashboard-card">
          <h3>Total Contacts</h3>
          <p className="card-value">0</p>
        </article>

        <article className="dashboard-card">
          <h3>Active Deals</h3>
          <p className="card-value">0</p>
        </article>

        <article className="dashboard-card">
          <h3>Pending Tasks</h3>
          <p className="card-value">0</p>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
