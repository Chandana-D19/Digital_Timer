.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #ffffff,
    #cffcf1,
    #cffcf1,
    #defafe
  );
}

@media screen and (min-width: 768px) {
  .app-container {
    background-image: linear-gradient(
      to right,
      #ffffff,
      #cffcf1,
      #cffcf1,
      #defafe
    );
  }
}

.heading {
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .heading {
    font-size: 48px;
  }
}

.digital-timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
}

@media screen and (min-width: 768px) {
  .digital-timer-container {
    flex-direction: row;
    max-width: 1140px;
  }
}

.timer-display-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 250px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png');
  background-size: cover;
  background-position: center;
}

@media (min-width: 576px) {
  .timer-display-container {
    width: 450px;
    height: 320px;
  }
}

@media screen and (min-width: 768px) {
  .timer-display-container {
    width: 600px;
    height: 450px;
  }
}

@media (min-width: 992px) {
  .timer-display-container {
    width: 600px;
    height: 600px;
  }
}

.elapsed-time-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

@media (min-width: 576px) {
  .elapsed-time-container {
    width: 150px;
    height: 150px;
  }
}

@media screen and (min-width: 768px) {
  .elapsed-time-container {
    width: 200px;
    height: 200px;
  }
}

.elapsed-time {
  color: #00d9f5;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  margin: 0px;
}

@media screen and (min-width: 768px) {
  .elapsed-time {
    font-size: 48px;
  }
}

.timer-state {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  margin: 0px;
}

@media screen and (min-width: 768px) {
  .timer-state {
    font-size: 24px;
  }
}

.controls-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.timer-controller-container {
  display: flex;
  align-items: center;
}

.timer-controller-btn {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin-right: 16px;
  margin-left: 16px;
  padding: 0px;
  cursor: pointer;
  outline: none;
}

.timer-controller-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

@media (min-width: 576px) {
  .timer-controller-icon {
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }
}

.timer-controller-label {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
}

@media (min-width: 576px) {
  .timer-controller-label {
    font-size: 32px;
  }
}

.timer-limit-controller-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.limit-label {
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
}

.timer-limit-controller {
  display: flex;
  align-items: center;
}

.limit-controller-button {
  color: #1e293b;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  border: none;
  margin: 8px;
  cursor: pointer;
  outline: none;
}

.limit-label-and-value-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
}

.limit-value {
  text-align: center;
  color: #1e293b;
  background-image: linear-gradient(to right, #00f5a0, #00d9f5);
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  width: 100px;
  border-radius: 8px;
  margin: 0px;
  padding: 8px;
}
