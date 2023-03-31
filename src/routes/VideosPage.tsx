import { Link } from "react-router-dom";
import Header from "../components/Header";
import { videos } from "../data/videosData";
import { Helmet } from "react-helmet";
import { mainData } from "../data/mainData";
export default function VideosPage() {
  return (
    <div>
      <Helmet>
        <title>Marionwares - Asteria crochet pattern Videos</title>
        <meta
          name="description"
          content="Find asteria crochet pattern videos here, english subtitles and german soon"
        />
        <meta name="author" content={mainData.companyName} />
      </Helmet>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-greenColor pb-12">
            Asteria crochet Pattern English Subtitles
          </h1>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {videos.map((product) => (
              <Link
                key={product.id}
                to={`${product.href}/${product.name}`}
                className=""
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    height={300}
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
