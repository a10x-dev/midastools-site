import { PromptMatchInner } from '../match';
import { getPersonalPage, getAllPersonalPageSlugs } from '../../lib/personal-pages';
import { getCompanyTheme } from '../../lib/company-themes';

export default function PersonalQuiz({ prospect, theme }) {
  return <PromptMatchInner prospect={prospect} theme={theme} />;
}

export async function getStaticPaths() {
  return {
    paths: getAllPersonalPageSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = getPersonalPage(params.slug);
  if (!page) return { notFound: true };
  const theme = getCompanyTheme(page.company);
  return {
    props: {
      prospect: {
        slug: page.slug,
        firstName: page.firstName,
        company: page.company,
        role: page.role,
      },
      theme,
    },
  };
}
