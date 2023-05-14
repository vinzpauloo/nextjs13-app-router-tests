// ** Component Imports
import Header from "@/components/Home/Header";

// ** Services Imports
import { usePosts } from "@/services/api/getPosts";

// ** Lib Imports
import Landing from "@/components/Home/Home";

export default async function Main() {
  const { getPosts } = usePosts();

  const initialData = await getPosts();

  console.log(initialData);

  return (
    <main>
      <Landing />
    </main>
  );
}
