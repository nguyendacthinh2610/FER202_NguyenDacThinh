import { useState } from "react";
import {
  Modal, ProgressBar, Tabs, Tab, Form, InputGroup, Button
} from "react-bootstrap";
import "./ProfileWizard.css";

const countries = ["Viet Nam", "United States", "Japan", "Singapore", "Australia"];

function SectionTitle({ icon, text }) {
  return (
    <div className="d-flex align-items-center gap-2 mb-3">
      <span className="fs-5">{icon}</span>
      <h5 className="m-0">{text}</h5>
    </div>
  );
}

export default function ProfileWizard() {
  const [step, setStep] = useState(0); // 0 About - 1 Account - 2 Address
  const progress = [33, 67, 100][step];

  return (
    <Modal show centered size="lg" className="pw-modal" backdrop="static">
      <Modal.Header closeButton>
        <div className="d-flex align-items-center gap-2">
          <span className="pw-logo">
            {/* SVG người bên trong vòng tròn xanh để giống hình */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/>
            </svg>
          </span>
          <Modal.Title className="m-0">Build Your Profile</Modal.Title>
        </div>
      </Modal.Header>

      <div className="px-4 pt-2">
        <ProgressBar now={progress} label={`${progress}%`} />
      </div>

      <Modal.Body className="px-4">
        <Tabs activeKey={["about","account","address"][step]} onSelect={() => {}} className="mb-3">
          {/* ABOUT (1 cột – mỗi ô 1 dòng) */}
          <Tab eventKey="about" title="About">
            <SectionTitle icon="ℹ️" text="About Information" />
            <Form>
              <Form.Label>First Name *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>👤</InputGroup.Text>
                <Form.Control placeholder="" />
              </InputGroup>

              <Form.Label>Last Name *</Form.Label>
              <Form.Control className="mb-3" placeholder="" />

              <Form.Label>Email *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>✉️</InputGroup.Text>
                <Form.Control placeholder="" />
              </InputGroup>

              <Form.Label>Phone *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>📞</InputGroup.Text>
                <Form.Control placeholder="" />
              </InputGroup>

              <Form.Label>Age *</Form.Label>
              <Form.Control className="mb-3" placeholder="Enter your age" />

              <Form.Label>Avatar</Form.Label>
              <Form.Control type="file" />
            </Form>
          </Tab>

          {/* ACCOUNT (1 cột) */}
          <Tab eventKey="account" title="Account">
            <SectionTitle icon="🔒" text="Account Information" />
            <Form>
              <Form.Label>Username *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>👤</InputGroup.Text>
                <Form.Control placeholder="" />
              </InputGroup>

              <Form.Label>Password *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>🔐</InputGroup.Text>
                <Form.Control type="password" placeholder="Enter password" />
                <Button variant="outline-secondary" tabIndex={-1}>👁️</Button>
              </InputGroup>

              <Form.Label>Confirm Password *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>🔐</InputGroup.Text>
                <Form.Control type="password" placeholder="Confirm password" />
                <Button variant="outline-secondary" tabIndex={-1}>👁️</Button>
              </InputGroup>

              <Form.Label>Secret Question *</Form.Label>
              <Form.Select className="mb-3" defaultValue="What is your first pet's name?">
                <option>What is your first pet's name?</option>
                <option>What is your mother’s maiden name?</option>
                <option>What city were you born in?</option>
              </Form.Select>

              <Form.Label>Answer *</Form.Label>
              <Form.Control placeholder="Enter your answer" />
            </Form>
          </Tab>

          {/* ADDRESS (1 cột) */}
          <Tab eventKey="address" title="Address">
            <SectionTitle icon="📍" text="Address Information" />
            <Form>
              <Form.Label>Street *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>📍</InputGroup.Text>
                <Form.Control placeholder="Enter your street address" />
              </InputGroup>

              <Form.Label>City *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>🏢</InputGroup.Text>
                <Form.Control placeholder="Enter your city" />
              </InputGroup>

              <Form.Label>State *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>🗺️</InputGroup.Text>
                <Form.Control placeholder="Enter your state/province" />
              </InputGroup>

              <Form.Label>Zip Code *</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>🏷️</InputGroup.Text>
                <Form.Control placeholder="Enter your zip/postal code" />
              </InputGroup>

              <Form.Label>Country *</Form.Label>
              <Form.Select defaultValue="">
                <option value="" disabled>Select a country</option>
                {countries.map((c) => <option key={c}>{c}</option>)}
              </Form.Select>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>

      <Modal.Footer className="px-4">
        <Button
          variant="secondary"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          Previous
        </Button>
        {step < 2 ? (
          <Button onClick={() => setStep((s) => Math.min(2, s + 1))}>Next</Button>
        ) : (
          <Button variant="success">Finish</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
