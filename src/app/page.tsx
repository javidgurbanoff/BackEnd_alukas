import Header from "@/app/feature/header/header"
import News from "@/app/components/news/news"
import Subscribe from "@/app/components/subscribe/subscribe"
import Footer from "@/app/feature/footer/footer"


export default function Home() {
  return (
    <div>
      <Header />
      <News />
      <Subscribe />
      <Footer />
    </div>
   
  );
}
