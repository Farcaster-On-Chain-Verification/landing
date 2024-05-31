import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section title="Benefits" description="Where can I use my verifications?">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://passport.gonzalomelov.xyz" target="_blank">
              <Image
                src="/assets/images/gitcoin-passport.jpeg"
                alt="Gitcoin Passport"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="relative border-2 border-gray-300 p-3">
            <a href="https://www.sushi.com" target="_blank">
              <Image
                src="/assets/images/sushiswap.jpeg"
                alt="SushiSwap"
                width={260}
                height={224}
              />
            </a>
            <span className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
              Coming Soon
            </span>
          </td>
          <td className="relative border-2 border-gray-300 p-3">
            <a href="https://hyperliquid.xyz" target="_blank">
              <Image
                src="/assets/images/hyperliquid.png"
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
            <span className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
              Coming Soon
            </span>
          </td>
        </tr>
        <tr className="h-56">
          <td className="relative border-2 border-gray-300 p-3">
            <a href="https://balancer.fi" target="_blank">
              <Image
                src="/assets/images/balancer.png"
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
            <span className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
              Coming Soon
            </span>
          </td>
          <td className="relative border-2 border-gray-300 p-3">
            <a href="https://arbiscan.io" target="_blank">
              <Image
                src="/assets/images/arbiscan.svg"
                alt="Arbiscan"
                width={260}
                height={224}
              />
            </a>
            <span className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
              Coming Soon
            </span>
          </td>
          <td className="relative border-2 border-gray-300 p-3">
            <a href="https://treasure.lol" target="_blank">
              <Image
                src="/assets/images/treasure.png"
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
            <span className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
              Coming Soon
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
