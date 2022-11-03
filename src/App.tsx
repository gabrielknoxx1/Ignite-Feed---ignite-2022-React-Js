import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import { posts } from "./Mocks/mock";

export function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          {posts.map((post) => (
            <Post key={post.id} content={post} />
          ))}
        </Content>
      </Layout>
    </div>
  );
}
