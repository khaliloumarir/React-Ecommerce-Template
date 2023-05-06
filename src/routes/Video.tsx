import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { videos } from "../data/videosData";
import { CrochetPattern } from "../interfaces";
import { mainData } from "../data/mainData";
import { useEffect, useState } from "react";
export default function Video() {
  let { id, name }: any = useParams();
  const [video, setVideo] = useState<CrochetPattern>();
  useEffect(() => {
    setVideo(videos[id]);
    console.log(videos[id]);
  }, []);
  return (
    <div>
      <Helmet>
        <title>{video?.name}</title>
        <meta name="description" content={video?.name} />
        <meta name="author" content={mainData.companyName} />
      </Helmet>
      <Header />
      <div className="space-y-12 mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2>{video?.name}</h2>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
          <nav className="w-full rounded-md">
            <ol className="list-reset flex ">
              <li>
                <Link
                  to="/asteria-videos"
                  className=" text-greenColor transition duration-150 ease-in-out underline  font-bold"
                >
                  Videos
                </Link>
              </li>
              <li>
                <span className="mx-2 text-neutral-500 ">/</span>
              </li>
              <li className="text-neutral-700 ">{video?.name}</li>
            </ol>
          </nav>
        </section>
        <ul
          className="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
          role="tablist"
          data-te-nav-ref
        >
          {video?.english ? (
            <li role="presentation">
              <a
                href="#tabs-home"
                className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-greenColor data-[te-nav-active]:text-primary  "
                data-te-toggle="pill"
                data-te-target="#tabs-home"
                data-te-nav-active
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                English Subtitles
              </a>
            </li>
          ) : (
            <li role="presentation">
              <a
                href="#tabs-contact"
                className="disabled pointer-events-none my-2 block border-x-0 border-t-0 border-b-2 border-transparent bg-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent "
                data-te-toggle="pill"
                data-te-target="#tabs-contact"
                role="tab"
                aria-controls="tabs-contact"
                aria-selected="false"
              >
                English Subtitles Soon...
              </a>
            </li>
          )}
        </ul>
        <div className="mb-6">
          <div
            className="hidden  opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
            data-te-tab-active
          >
            <div className="flex justify-center">
              <iframe
                width="1067"
                height="600"
                src={`https://www.youtube.com/embed/${
                  video?.href.split("/asteria-video/")[1]
                }`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div
            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            Tab 4 content
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
