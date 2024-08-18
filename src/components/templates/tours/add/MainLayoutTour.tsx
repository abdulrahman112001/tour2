import React, { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import StepOneTour from "./StepOneTour";
import StepTowTour from "./StepTowTour/StepTowTour";
import { Formik } from "formik";

function MainLayoutTour() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const initialValues = {
    tour_itineraries: [
      {
        title: "",
        description: "",
      },
    ],
    tour_availabilities: [
      {
        date: "",
        discount: "",
        description: "",
      },
    ],
  };

  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <div>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step
            label="First step"
            // description="Create an account"
          >
            <StepOneTour />
          </Stepper.Step>
          <Stepper.Step
            label="Second step"
            // description="Verify email"
          >
            <StepTowTour />
          </Stepper.Step>
          <Stepper.Step
            label="Final step"
            // description="Get full access"
          >
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
          <Button className="bg-main" onClick={prevStep}>
            Back
          </Button>
          <Button variant="default" onClick={nextStep}>
            Next step
          </Button>
        </Group>
      </div>
    </Formik>
  );
}

export default MainLayoutTour;
