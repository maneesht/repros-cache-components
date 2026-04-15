import { app } from "@/lib/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Image from "next/image";

export default async function Home() {
  const db = getFirestore(app);
  const docRef = doc(db, "cities", "SF");
  
  console.log("Fetching city data on the server...");
  const snapshot = await getDoc(docRef);
  const cityData = snapshot.exists() ? snapshot.data() : null;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Reproducing Error State</h1>
        <div className="mt-4 p-4 border rounded-lg bg-gray-50 dark:bg-zinc-900 w-full">
          <h2 className="text-xl font-medium mb-2">City Data:</h2>
          {cityData ? (
            <pre className="text-sm">{JSON.stringify(cityData, null, 2)}</pre>
          ) : (
            <p>No data or failed to fetch.</p>
          )}
        </div>
      </main>
    </div>
  );
}
