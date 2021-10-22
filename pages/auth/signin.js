import { signIn as signIntoProvider } from "next-auth/react";
import { getProviders } from "next-auth/react"
import Header from '../../components/Header'

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen -mt-56 py-2 px-14 text-center justify-center">
        <img className="w-80"
          img src="https://links.wheelit.com.au/s70"
          alt=""
        />
        <p className="font-xs italic">
          Built this to test my nextjs, reactjs, tailwind & overall design skills
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 p-3 rounded-lg text-white"
                onClick={() => signIntoProvider(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn