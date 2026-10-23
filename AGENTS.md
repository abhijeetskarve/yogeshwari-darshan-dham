<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared page styling in the semantic tokens and SiteChrome/Section components so visual updates remain consistent across all pages.
- Keep navigation gradients and page motion in shared semantic CSS; reveal sections once with IntersectionObserver and honor reduced motion without hiding content.
- Keep readability and tap-target defaults in global styles and Button, and expose primary navigation without a mobile menu toggle so important destinations stay directly accessible.
- TempleShowcase keeps photo selection separate from details visibility; use stacked uncropped photos with details beneath the selected photo on mobile, and an expanding photo strip with shared details below on desktop so photos remain unobscured.
