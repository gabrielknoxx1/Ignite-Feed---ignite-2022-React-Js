import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <Post />
          <Post />
          <Post />
          <Post />
        </Content>
      </Layout>
    </div>
  );
}
