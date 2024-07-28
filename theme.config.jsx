import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: <span className="font-futura">00</span>,
  project: {
    link: "https://github.com/technomancy-dev/00",
  },
  docsRepositoryBase: "https://github.com/technomancy-dev/00-docs",
  footer: false,
  useNextSeoProps() {
    return {
      titleTemplate: "00 | %s",
    };
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://docs.double-zero.cloud" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Email for the people."}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Double-zero is a self-hostable email monitoring and sending service built ontop of AWS SES."
          }
        />
      </>
    );
  },
  // text: (
  //   <span>
  //     {new Date().getFullYear()} ©{' '}
  //     <a href="https://double-zero.cloud" target="_blank">
  //     00
  //     </a>
  //   </span>
  // )
  // }
  // ... other theme options
};
