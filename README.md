# Setup

```bash
# Install
./script/hugo.sh install

# Run
hugo server --source page/

# hugo gen chromastyles --style=monokai > page/static/syntax.css
```

# TODOs

## Configuration

- [ ] Config file cleanup
- [x] Codenvy docker file (gist file `dockerfile_hugo`)
- [x] Travis deployment
- [ ] define archteypes


## Theme `material-design-lite`

- [ ] On all layout files consider configuration parameter settings
- [ ] change theme.toml file
- [x] add toc to articles
- [ ] JavaScript mail sender


### Redesign

- [ ] _default/list.html
- [ ] _default/single.html (header)
- [ ] _default/summary.html
- [ ] _default/terms.html (for taxanomies e.g. tags, categories, etc.)
- [ ] contact/single.html --> javascript e-mail sender
- [ ] page/single.html
- [ ] 404.html
- [x] partials/comments.html
- [x] partials/footer.html
- [x] partials/header.html --> move to navbar.html
- [x] partials/meta.html --> add it to the post single.html layout
- [x] partials/navbar.html
- [x] partials/pagination.html
- [x] section/cheatsheet.html
- [x] section/post.html


### CSS

- [ ] cleanup all `android-`tags
- [ ] move navigation to separate file
- [ ] delete file android.css
