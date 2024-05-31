import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="How do I verify?"
    description="Follow the steps below to verify your account and access benefits from other dapps."
  >
    <VerticalFeatureRow
      title="Get verified"
      description="Click on “Get verified” and we'll send you to Warpcast to complete the process."
      image="/assets/images/step1.png"
      imageAlt="First step alt text"
    />
    <VerticalFeatureRow
      title="Follow the instructions"
      description="Follow the steps on Warpcast to verify your main wallet connected to your account."
      image="/assets/images/step2.png"
      imageAlt="Second step alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Unlock benefits"
      description="Start using an app that supports Verifications."
      image="/assets/images/step3.png"
      imageAlt="Third step alt text"
    />
  </Section>
);

export { VerticalFeatures };
