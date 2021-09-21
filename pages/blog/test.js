import Categories from '../../components/Categories';
import Layout from '../../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-y-12 mt-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
        <div className="col-span-2">
          <div className="text-lg border-b-2 border-gray-100 pb-6">
            {/* Title */}
            <h1 className="mt-2 block text-4  xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              JavaScript for Beginners
            </h1>

            {/* Summary */}
            <p className="mt-4 text-2xl text-gray-500 leading-8">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>

            {/* Meta Description */}
            <div className="mt-6">
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-02-12">Feb 12, 2020</time>
                <span aria-hidden="true">&middot;</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="blog-content mt-6 text-gray-500 space-y-6"></div>
        </div>
        <div className="space-y-6">
          <Categories />
          {/* <Popular /> */}
        </div>
      </div>
    </Layout>
  );
}
