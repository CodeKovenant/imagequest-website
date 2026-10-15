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

- Keep imported page bodies in `src/components/content-pages` and expose them through thin file routes; this preserves supplied content without duplicating navigation.
- Every content page uses `SiteHeader` and `SiteFooter`; parent service and solution routes render only `Outlet` so nested pages do not repeat the shell.
- Use the shared Button's `unstyled` variant for supplied bespoke controls to preserve their layout while retaining shared accessibility behavior.
