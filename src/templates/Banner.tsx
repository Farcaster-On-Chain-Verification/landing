import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Claim your Gitcoin Passport stamp to"
      subtitle="improve your humanity score!"
      button={
        <Link href="https://passport.gonzalomelov.xyz" target="_blank">
          <Button>Claim your Stamp</Button>
        </Link>
      }
      image="/assets/images/gitcoin-passport.jpeg"
      imageAlt="Claim your Stamp"
    />
  </Section>
);

export { Banner };
