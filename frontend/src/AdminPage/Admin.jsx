import React, { useState } from 'react';
import "./Admin.css";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMouseOver = (index) => {
    const listItems = document.querySelectorAll('.Navigation1 li');
    listItems.forEach((item) => {
      item.classList.remove('hovered');
    });
    listItems[index].classList.add('hovered');
    setSelectedItem(listItems[index]);
  };

  const handleToggleClick = () => {
    const Navigation = document.querySelector('.Navigation1');
    const main = document.querySelector('.main');
    if (Navigation && main) {
      Navigation.classList.toggle('active');
      main.classList.toggle('active');
    }
  };

  return (
    <div className="container1">
      <div className="Navigation1">
        <ul>
          <li>
            <a href="#main">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="title">Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="people-outline"></ion-icon>
              </span>
              <span className="title">Users</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="square-outline"></ion-icon>
              </span>
              <span className="title">Courses</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className="title">Messages</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="help-outline"></ion-icon>
              </span>
              <span className="title">Help</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className="title">Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <span className="title">Password</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <ion-icon name="log-out-outline"></ion-icon>
              </span>
              <span className="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main */}
      <div className="main" id="main">
        <div className="Topbar">
          <div className="Toggle" onClick={handleToggleClick}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <ion-icon name="user-outline"></ion-icon>
            </label>
          </div>

          <div className="user">
            <i className="fas fa-user"></i>
          </div>
        </div>

        {/* Cards */}
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1,504</div>
              <div className="cardName">Daily Views</div>
            </div>

            <div className="iconBx">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Provided</div>
            </div>

            <div className="iconBx">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>

          <div className="card">
            <div>
              <div className="numbers">284</div>
              <div className="cardName">Comments</div>
            </div>

            <div className="iconBx">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>
        </div>

        {/* Purchased Details List */}
        <div className="details">
          <div className="recentBuy">
            <div className="cardHeader">
              <h2>Recent Studies</h2>
              <a href="#" className="btn">View All</a>
            </div>

            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>IOS Development</td>
                  <td>$1200</td>
                  <td>Paid</td>
                </tr>

                <tr>
                  <td>Web Design</td>
                  <td>$1000</td>
                  <td>Due</td>
                </tr>

                <tr>
                  <td>Web Development</td>
                  <td>$1200</td>
                  <td>Paid</td>
                </tr>

                <tr>
                  <td>Python</td>
                  <td>$890</td>
                  <td>Due</td>
                </tr>

                <tr>
                  <td>App Development</td>
                  <td>$1200</td>
                  <td>Paid</td>
                </tr>

                <tr>
                  <td>Web Development</td>
                  <td>$2000</td>
                  <td>Due</td>
                </tr>

                <tr>
                  <td>Java</td>
                  <td>$5100</td>
                  <td>Paid</td>
                </tr>

                <tr>
                  <td>Data Analyst</td>
                  <td>$620</td>
                  <td>Due</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
