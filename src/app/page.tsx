// ** Component Imports
import Header from "@/components/Home/Header";

// ** Services Imports
import { usePosts } from "@/services/api/getPosts";

// ** Lib Imports
import Landing from "@/components/Home/Home";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Main() {
  // This is only for testing purposes
  // In the event that we are going to add something like check server status..
  // We are forcing a loading time.
  await wait(500);

  const { getPosts } = usePosts();
  const initialData = await getPosts();

  console.log(initialData);

  return (
    <main>
      <Landing props={initialData} />
    </main>
  );
}
