// ** Component Imports
import { Home } from "../components/Home";
import Header from "@/components/Header";

// ** Services Imports
import { usePosts } from "@/services/api/getPosts";

// ** Lib Imports
import Landing from "@/app/Landing";

export default async function Main() {
  const { getPosts } = usePosts();

  const initialData = await getPosts();

  return (
    <main>
      <Landing props={initialData} />
    </main>
  );
}
