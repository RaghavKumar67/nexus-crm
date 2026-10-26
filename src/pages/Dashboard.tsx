
import DashboardCard from "../components/DashboardCard";
import ContactCounter from "../components/ContactCounter";

function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>

      <p>
        Welcome to Nexus CRM. Manage your customers and sales in one place.
      </p>

      <section className="dashboard-cards">
        <DashboardCard title="Total Contacts" value={0} />
        <DashboardCard title="Active Deals" value={0} />
        <DashboardCard title="Pending Tasks" value={0} />
        <ContactCounter />
      </section>
    </main>
  );
}

export default Dashboard;
