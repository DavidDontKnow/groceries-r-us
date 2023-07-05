import React from "react";
import Image from "next/image";

const StoresPage = () => {
  return (
    <section>
      <h1>Stores</h1>
      <p>this is the stores page</p>
      <div>
        <h3>Store 1</h3>
        <Image src="/store1.jpg" alt="Store 1" width={500} height={500} />
        <div className="store-info">
          <h3>Address</h3>
          <ul>
            <li>1234 Main St</li>
            <li>City, State 12345</li>
            <li>Phone: 123-456-7890</li>
          </ul>

          <h3>Hours</h3>
          <ul>
            <li>Monday: 9am-5pm</li>
            <li>Tuesday: 9am-5pm</li>
            <li>Wednesday: 9am-5pm</li>
            <li>Thursday: 9am-5pm</li>
            <li>Friday: 9am-5pm</li>
            <li>Saturday: 9am-5pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StoresPage;
