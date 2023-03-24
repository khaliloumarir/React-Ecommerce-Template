import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

import { mainData } from "../data/mainData";
export default function Video() {
  let { id, name }: any = useParams();

  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={name} />
        <meta name="author" content={mainData.companyName} />
      </Helmet>
      <Header />
      <div className="space-y-12 mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2>{name}</h2>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
          <nav className="w-full rounded-md">
            <ol className="list-reset flex ">
              <li>
                <Link
                  to="/asteria-videos"
                  className=" text-greenColor transition duration-150 ease-in-out hover:underline hover:font-semibold"
                >
                  Videos
                </Link>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                  /
                </span>
              </li>
              <li className="text-neutral-500 dark:text-neutral-400">{name}</li>
            </ol>
          </nav>
        </section>
        <div className="flex justify-center">
          <iframe
            width="1067"
            height="600"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
