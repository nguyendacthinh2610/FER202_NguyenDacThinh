import React, { useState } from "react";
import { Container, Card, ProgressBar, Button, Tabs, Tab } from "react-bootstrap";
import AboutForm from "../components/Account/AboutForm";
import AccountForm from "../components/Account/AccountForm";
import AddressForm from "../components/Account/AddressForm";
import "./AccountPage.css";

const AccountPage = () => {
  const [step, setStep] = useState(0);
  const progress = [33, 67, 100][step];

  return (
    <Container className="account-wizard-container">
      <Card className="account-wizard-card">
        <Card.Body>
          <h4 className="mb-4">Build Your Profile</h4>
          <ProgressBar now={progress} label={`${progress}%`} className="mb-4" />
          <Tabs activeKey={step} onSelect={k => setStep(Number(k))} className="mb-3">
            <Tab eventKey={0} title={<span><i className="bi bi-person-circle me-1"></i> About</span>}>
              <AboutForm />
              <div className="wizard-nav-btns">
                <Button disabled>Previous</Button>
                <Button variant="primary" onClick={() => setStep(1)}>Next</Button>
              </div>
            </Tab>
            <Tab eventKey={1} title={<span><i className="bi bi-lock me-1"></i> Account</span>}>
              <AccountForm />
              <div className="wizard-nav-btns">
                <Button onClick={() => setStep(0)}>Previous</Button>
                <Button variant="primary" onClick={() => setStep(2)}>Next</Button>
              </div>
            </Tab>
            <Tab eventKey={2} title={<span><i className="bi bi-geo-alt me-1"></i> Address</span>}>
              <AddressForm />
              <div className="wizard-nav-btns">
                <Button onClick={() => setStep(1)}>Previous</Button>
                <Button variant="success">Finish</Button>
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AccountPage;
