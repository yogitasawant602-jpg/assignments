import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const navigate = useNavigate();

  const submitForm = () => {
    navigate("/success", { state: form });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Seat</h2>

      <input placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />
      <br /><br />

      <input placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />
      <br /><br />

      <input placeholder="Mobile"
        onChange={e => setForm({ ...form, mobile: e.target.value })} />
      <br /><br />

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default BookingForm;
