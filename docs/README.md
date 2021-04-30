
	      ____                  __          ____
	     / __ \____  _____ ____/ /_  ____  / / /_
	    / /_/ / __ `/ ___/ ___/ __ \/ __ \/ / __/
	   / ____/ /_/ (__  |__  ) /_/ / /_/ / / /_
	  /_/    \__,_/____/____/_,___/\____/_/\__/
	
	The open-source password management solution for teams
	(c) 2021 Passbolt SA
	https://www.passbolt.com

## License

Passbolt help site code is distributed under the [Affero General Public License v3](http://www.gnu.org/licenses/agpl-3.0.html)

Passbolt help text are distributed under [Creative Common BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Logos in /assets/img/third_party belongs to their respective owners and used for illustrative purpose.

Passbolt - Open source password manager for teams
(c) 2021 Passbolt SA

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General 
Public License (AGPL) as published by the Free Software Foundation version 3.

The name "Passbolt" is a registered trademark of Passbolt SA, and Passbolt SA hereby declines to grant a trademark 
license to "Passbolt" pursuant to the GNU Affero General Public License version 3 Section 7(e), without a separate 
agreement with Passbolt SA.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied 
warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see GNU 
Affero General Public License v3.

## About Passbolt help site

This repository contains the code used for the knowledge base and help section of passbolt website.
Find out more about passbolt here:
[https://www.passbolt.com](https://www.passbolt.com "Passbolt Homepage")

## Quick start
This site is developed using Jekyll.
To get started please read Jekyll [quick start guide](https://jekyllrb.com/docs/quickstart/).

```
gem install jekyll bundler
git clone https://github.com/passbolt/passbolt_help.git
cd passbolt_help
bundle exec jekyll build
```

## Contributing
Jekyll offers all the tooling to make the local development easier.

```
bundle exec jekyll serve
```

Open the link given in the console with your web browser. Jekyll will rebuild the help site for you
after each change.

### Editing the look and feel
Do not edit the style directly by editing the CSS on this repository.
Passbolt help relies on [passbolt styleguide](https://github.com/passbolt/passbolt_styleguide).
If you want to extend the styles make a pull request on the styleguide and apply the latest version
of the styleguide to passbolt help. This is to ensure we provide a consistent user experience across 
all the passbolt websites.

Since the styleguide is distributed as a npm module you can link your local passbolt help to your custom 
styleguide to test changes and extend the look and feel. 
See [npm-link](https://docs.npmjs.com/cli/link) for more information.

### Adding images
Similarly if you want to add images to this site make sure you do not include them in assets folders that are
reserved by the styleguide such as `/assets/img/screenshots` or `/assets/img/logo`. Instead you can place 
them in `/assets/img/help`.
