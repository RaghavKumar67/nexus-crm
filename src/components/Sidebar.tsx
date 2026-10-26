
const navigationItems = [
  "Dashboard",
  "Contacts",
  "Companies",
  "Deals",
  "Tasks",
  "Activities",
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Workspace</h2>

      <nav>
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={item === "Dashboard" ? "active" : ""}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
