const Footer = () => (
  <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
    <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2024{' '}
        <a
          href="https://github.com/ngKisor/nextjs-starter-app"
          className="hover:underline"
        >
          Next Starter App
        </a>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/ngKisor/nextjs-starter-app/issues"
            className="hover:underline"
          >
            Contribute
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
