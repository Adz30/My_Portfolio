import React, { useEffect, useState } from "react";

// Render Notion blocks nicely
function renderBlock(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={id} className="mb-4 text-slate-300">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </p>
      );
    case "heading_1":
      return (
        <h1 key={id} className="text-4xl font-bold text-white mb-6">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id} className="text-3xl font-semibold text-white mb-5">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id} className="text-2xl font-semibold text-white mb-4">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </h3>
      );
    case "bulleted_list_item":
      return (
        <li key={id} className="ml-6 list-disc text-slate-300 mb-1">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={id} className="ml-6 list-decimal text-slate-300 mb-1">
          {value.rich_text.map((text) => text.plain_text).join("")}
        </li>
      );
    case "quote":
      return (
        <blockquote
          key={id}
          className="border-l-4 border-slate-600 pl-4 italic text-slate-400 mb-6"
        >
          {value.rich_text.map((text) => text.plain_text).join("")}
        </blockquote>
      );
    case "code":
      return (
        <pre
          key={id}
          className="bg-slate-800 p-4 rounded mb-6 overflow-x-auto text-sm font-mono text-green-400"
        >
          <code>{value.rich_text.map((text) => text.plain_text).join("")}</code>
        </pre>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      return (
        <img
          key={id}
          src={src}
          alt="Notion content"
          className="max-w-full rounded-lg mb-6"
        />
      );
    default:
      console.warn("[renderBlock] Unsupported block type:", type, block);
      return (
        <div
          key={id}
          className="italic text-slate-500 mb-4 bg-slate-800 p-2 rounded"
        >
          Unsupported block type: {type}
        </div>
      );
  }
}

function NotionModal({ slug, onClose }) {
  const [metadata, setMetadata] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/page/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog content");
        const data = await res.json();
        setMetadata(data.metadata);
        setBlocks(data.blocks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchContent();

    window.history.replaceState(null, "", `#blog=${slug}`);

    return () => {
      window.history.replaceState(null, "", window.location.pathname);
    };
  }, [slug]);

  if (loading)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-6">
        <div className="text-white text-lg animate-spin">Loading…</div>
      </div>
    );
  if (error)
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-6">
        <div className="text-red-400 text-lg">{error}</div>
      </div>
    );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-start overflow-auto p-6 z-50"
      onClick={onClose}
      style={{ scrollbarWidth: "thin" }}
    >
      <div
        className="bg-slate-900 rounded-lg max-w-4xl w-full p-6 shadow-2xl text-white relative animate-fade-up"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-slate-300 transition"
        >
          ×
        </button>

        <h1 className="mb-2 text-3xl font-semibold">{metadata.title}</h1>
        <p className="text-slate-400 mb-6">
          {new Date(metadata.date).toLocaleDateString()}
        </p>

        <article className="prose prose-invert max-w-none">
          {blocks.map((block) => (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          ))}
        </article>
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalSlug, setModalSlug] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();

    const hash = window.location.hash;
    if (hash.startsWith("#blog=")) {
      const slug = hash.replace("#blog=", "");
      setModalSlug(slug);
    }
  }, []);

  if (loading)
    return (
      <p className="text-white p-4 text-center animate-fade-up">Loading posts…</p>
    );
  if (error)
    return (
      <p className="text-red-400 p-4 text-center">{error}</p>
    );

  return (
    <>
      <section id="blog" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest Blog Posts</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto"></div>
            <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
              Insights on Web3, smart contracts, and blockchain development.
              Stay informed with technical guides, project updates, and tutorials.
            </p>
          </div>

          <div
            className="flex space-x-6 overflow-x-auto px-2 sm:px-4 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setModalSlug(post.slug)}
                className="min-w-[300px] max-w-sm bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700 flex flex-col cursor-pointer snap-start"
              >
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-auto text-xs text-slate-500 dark:text-slate-400">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalSlug && (
        <NotionModal
          slug={modalSlug}
          onClose={() => setModalSlug(null)}
        />
      )}
    </>
  );
}
