/*import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-b fixed bottom-0 left-0 w-full">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt='logo'
            width={128}
            height={38}
          />
        </Link>
        <p>
          © 2024 HadsaEvent App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
*/

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    /*<footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'> */
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo-black.svg"
            alt='logo'
            width={128}
            height={38}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-lg shadow-lg border border-gray-200"
          />
        </Link>
        <p>
          © 2024 HadsaEvent App. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

