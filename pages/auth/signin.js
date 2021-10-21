// import { signIn as signIntoProvider } from "next-auth/react";
// import { getProviders } from "next-auth/react"


// function signIn({ providers }) {
//   return (
//     <>
//       {Object.values(providers).map((provider) => (
//         <div key={provider.name}>
//           <button onClick={() => signIntoProvider(provider.id)}>
//             Sign in with {provider.name}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

// export async function getServerSideProps() {
//   const providers = await getProviders();

//   return {
//     props: {
//       providers,
//     },
//   };
// }

// export default signIn;

import { getProviders, signIn as signIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <div>
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIntoProvider(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    </div>
  );
}

export async function getServerSideProps() {
  const prov = getProviders()
  console.log(prov);
  const providers = await getProviders();
   console.log(providers);
  return {
    props: {
      providers
    }
  }
}


export default signIn;