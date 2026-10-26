
import { useState } from "react";

function ContactCounter() {
  const [count, setCount] = useState<number>(0);

  function addContact() {
    setCount(count + 1);
  }

  function removeContact() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <section className="dashboard-card">
      <h3>Contact Counter</h3>

      <p className="card-value">{count}</p>

      <div className="counter-actions">
        <button onClick={addContact}>Add Contact</button>

        <button onClick={removeContact} disabled={count === 0}>
          Remove Contact
        </button>
      </div>
    </section>
  );
}

export default ContactCounter;
