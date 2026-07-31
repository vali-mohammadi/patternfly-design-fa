const path = require("path");
const markdownItAnchor = require("markdown-it-anchor");
const { slug: githubSlug } = require("github-slugger");

const SECTION_TITLES = {
  mabani: "مبانی",
  moallefeha: "مؤلفه‌ها",
  olguha: "الگوها",
  "rast-be-chin": "راست‌به‌چین",
};

// GitHub Pages serves this as a project page (vali-mohammadi.github.io/patternfly-design-fa/),
// not at the domain root -- every internal URL needs this prefix. Eleventy's `url` filter
// applies it automatically in templates; the custom link-fixing transform below (which runs
// on already-rendered HTML, outside Eleventy's own URL system) has to prepend it by hand.
const PATH_PREFIX = "/patternfly-design-fa/";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "_includes/assets": "assets" });

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      slugify: githubSlug,
    });
  });

  // content/<section>/<slug>.md always renders under docs/decisions/writing-conventions.md's
  // Latin-slug rule -- links inside the translated pages were authored as file-relative
  // (./sibling, ../section/sibling), matching the SOURCE tree, not Eleventy's per-page
  // directory URLs (page.md -> page/index.html). Rewrite them post-render against inputPath.
  eleventyConfig.addTransform("fix-relative-links", function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    const inputPath = this.page && this.page.inputPath;
    if (!inputPath) return content;
    const inputDir = path.posix.dirname(inputPath.replace(/^\.\//, ""));

    return content.replace(/(href|src)="(\.\.?\/[^"#]*)(#[^"]*)?"/g, (match, attr, rel, hash) => {
      // Anchors were authored as heading-text-with-hyphens (matching GitHub's own rendering),
      // but github-slugger (used both here and by GitHub) also strips ZWNJ and other
      // punctuation from headings that DO contain it -- e.g. "دکمه‌ها" (with ZWNJ) slugifies
      // to "دکمهها" (without). Re-slugging the authored fragment is idempotent for anchors
      // that were already ZWNJ-free, and fixes the ones that weren't.
      const fixedHash = hash ? "#" + githubSlug(decodeURIComponent(hash.slice(1))) : "";
      let resolved = path.posix.normalize(path.posix.join(inputDir, rel));
      if (resolved.startsWith("content/")) {
        resolved = resolved.replace(/^content\//, "/").replace(/\.md$/, "");
        if (!resolved.endsWith("/")) resolved += "/";
        resolved = path.posix.join(PATH_PREFIX, resolved);
        return `${attr}="${resolved}${fixedHash}"`;
      }
      // Outside content/ (docs/decisions, docs/glossary.md, research/...) is not part of
      // this build -- it's contributor/process documentation, not published design content.
      // Point at the GitHub-rendered file instead of a dead local path.
      const ghUrl = `https://github.com/vali-mohammadi/patternfly-design-fa/blob/master/${resolved}`;
      return `${attr}="${ghUrl}${fixedHash}"`;
    });
  });

  // page.url already carries PATH_PREFIX once pathPrefix is configured below; templates
  // that need to inspect URL segments (the breadcrumb) need the prefix-free form back.
  eleventyConfig.addFilter("stripPathPrefix", (url) =>
    url.startsWith(PATH_PREFIX) ? "/" + url.slice(PATH_PREFIX.length) : url
  );

  eleventyConfig.addCollection("sections", (collectionApi) => {
    const items = collectionApi.getAll();
    const bySection = {};
    for (const item of items) {
      const rel = path.posix.relative("content", item.inputPath.replace(/^\.\//, ""));
      const section = rel.split("/")[0];
      if (!section || !SECTION_TITLES[section]) continue;
      bySection[section] = bySection[section] || { key: section, title: SECTION_TITLES[section], url: `/${section}/` };
    }
    return Object.values(bySection).sort(
      (a, b) => Object.keys(SECTION_TITLES).indexOf(a.key) - Object.keys(SECTION_TITLES).indexOf(b.key)
    );
  });

  eleventyConfig.ignores.add("content/README.md");
  eleventyConfig.ignores.add("content/**/README.md");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site",
    },
    pathPrefix: PATH_PREFIX,
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
};
