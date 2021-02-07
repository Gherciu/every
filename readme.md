<div align="center">
  <h1>Every</h1>
  <p>Run a CLI command in every folder</p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/every)](https://github.com/Gherciu/every/blob/master/LICENSE)

## Installation

```bash
npm i -g every-cli
```

## Usage

```
$ every --help

  Usage
    $ every <command> [arguments]

  Examples
    $ every pwd
      - folder-1
        c:/my-projects/folder-1
      - folder-2
        c:/my-projects/folder-2
```

## Programatically usage

```js
const every = require("every");

every("pwd");
/*
- folder-1
  c:/my-projects/folder-1
- folder-2
  c:/my-projects/folder-2
*/
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/every/)

[![Open Collective](https://opencollective.com/every/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/every/)

## Author

**[@Gherciu/every](https://github.com/Gherciu/every)** :copyright: [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/every/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/every/contributors)).

#### If you like this repository star:star: and watch:eyes: on [GitHub](https://github.com/Gherciu/every)