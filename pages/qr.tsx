import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const redirectUrl = process.env.REDIRECT_URL;

  if (!redirectUrl) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: redirectUrl,
      permanent: false
    },
  };
};

export default function QRRedirectPage() {
  return <p>Redirecting...</p>;
}
