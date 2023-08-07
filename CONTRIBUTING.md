# How should I write my commits?

If you want that your changes appear in the changelog,
you need to follow [Conventional Commit messages](https://www.conventionalcommits.org/).

In this project, we use these prefixes:

**Patch version**

- `fix:` which represents bug fixes, correlates to a [SemVer](https://semver.org/)
  patch.
- Other prefixes that you can use:
  - `refactor:` any code related change that is not a fix nor a feature
  - `docs:` changing existing or creating new documentation (i.e. README, stories, docs for usage of a lib or cli usage)
  - `build:` all changes regarding the build of the software
  - `deps:` all changes regarding dependencies or the addition of new dependencies
  - `test:` all changes regarding tests (adding new tests or changing existing ones)
  - `chore:` all changes to the repository that do not fit into any of the above categories

**Minor version**

- `feat:` which represents a new feature, and correlates to a SemVer minor.
- `feat!:`, or `fix!:`, `refactor!:`, etc., which represent a breaking change
  (indicated by the `!`) and will result in a SemVer minor.
