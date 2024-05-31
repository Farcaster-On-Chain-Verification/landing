import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Farcaster-On-Chain-Verification">
            GitHub
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Verify your wallet\n'}
            <span className="text-primary-500">
              to unlock onchain experiences
            </span>
          </>
        }
        description="Get benefits that are only available when you verify your wallet with Farcaster."
        button={
          <Link href="https://warpcast.com/ceciliaeiraldi92/0xef284eba">
            <Button xl>Get verified</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
