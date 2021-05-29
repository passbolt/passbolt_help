---
title: How can I contribute to the translation?
slug: translation
layout: faq
category: contribute
permalink: /contribute/:slug
date: 2021-05-10 00:00:00 Z
---

There are many ways to contribute to passbolt, and one them is to help translate the application into your language. 
Contributions are always welcome, and different tasks can be addressed depending on your profile. As a translator you 
could help [translate](#translate) strings or [proofread](#proofread) the translated strings. As a technical profile 
you could help identify missing translations and [externalise](#externalize) them in the source code.

## General guidelines
### Source language

Passbolt has been developed in British English and so this language is not considered as a language to translate
passbolt into. If you discovered an error in this language or a string not available for translation:
- and you have a technical profile please refer to the [how to externalize strings](#externalize) section.
- or you do not have a technical profile, please [open a ticket](https://community.passbolt.com/c/translation-issues) on 
  the community forum.

### Tone of voice

It depends mainly on the language, but translators should always keep in mind that the application shouldn't offend its
users. By instance, in French "*you*" can be translated in two different manners, the chosen form defines the relationship
one person has with another, and choosing the wrong form can be perceived negatively. In the French context the
translation should always prefer the use of the formal formulation such as "*vous*" for "*you*".

### Inclusion

Inclusion is a passbolt value. Translations which exclude people based on their gender, ethnicity or any discriminative
attributes must be avoided. Neutral formulation should always be preferred when possible. For example, we use "*they*" 
instead of "*she*" or "*he*". While this might not always be possible in your language, try to find a gender-neutral 
form.

## <a name="translate"></a>Translate passbolt

The translation of passbolt is entirely managed by CrowdIn and everybody can access it to propose a contribution.

### Connect to CrowdIn

You will need first to create a CrowdIn account or connect with a third party  account (Google, Github ...) to be able 
to contribute to the translations. Go to [https://passbolt.crowdin.com](https://passbolt.crowdin.com) and sign in or 
sign up if you don't have an account yet.

### Select your language

Find the language you want to contribute to on the CrowdIn passbolt project page at 
[https://passbolt.crowdin.com/passbolt](https://passbolt.crowdin.com/passbolt).

If your language is missing, and you would like to promote it, please 
[open a ticket](https://community.passbolt.com/c/translation-issues) on the community forum.

**Note**: Passbolt is currently translated only in French, however other languages such as German and Spanish are 
already in the works and will soon be available for translators and proofreaders.

### Translate strings or fix a translation error

Once you have selected your language, you will be redirected to the CrowdIn translation editor.

{% include articles/figure.html url="/assets/img/help/2021/05/crowdin-translation-editor.png" legend="translation editor" width="586px" %}

**Select** a string that is not yet translated (<span style="color:red">&#9632;</span>) in the left panel &#9312;. You 
can of course have access to all translated strings (<span style="color:green">&#9632;</span>) in the very same panel if 
you want to propose another translation.

**Translate** the selected string from the central panel &#9313;. CrowdIn will propose you suggestions &#9314; 
to help translate but also to align with the tone and choice of words used in the application (suggestions marked 
with Passbolt's Translation memory).

If the strings to be translated are not clear you can **request a context** &#9315;, the community or a translation 
manager will answer your question and can provide you with a screenshot where the strings are used if necessary.

**Access to the glossary** or **translation memory** search tools are available if necessary in the right panel &#9316; 
of the application.

## <a name="proofread"></a>Proofread passbolt

The proofreading of passbolt is central in the translation process, it helps to keep a translation accurate and
guarantee a global homogeneity of it. As for the translation the proofreading step is entirely managed by Crowdin.

### Become a proofreader

The proofreader role can be requested to the passbolt team by email at [contact@passbolt.com](contact@passbolt.com).

The role attribution is made as per the following rules: 

* Contributors should have already proposed translations for the language they want to help with proofreading. If no
  translation made on passbolt, the contributors can show contributions made on another open source project.
  
* The already proposed translations should reflect the attention to details of the contributors and meet with the quality 
  standard of passbolt.

* The contributors should have proven good communication skills in their previous exchanges with the passbolt team as 
  well as other contributors. See the [passbolt code of conduct](https://www.passbolt.com/code_of_conduct) to know 
  more about what is expected from the passbolt community members.

### Access to the proofreading editor

To access to the proofreading editor from the translation editor:
1. Click on the hamburger &#9776; in the top left of the CrowdIn translation editor.
2. Click on workflow.
3. Click on Proofreading.

{% include articles/figure.html url="/assets/img/help/2021/05/crowdin-switch-proofreading-workflow.png" legend="Crowdin editors switch" width="386px" %}

### Proofread strings

Once you have switched to the proofreading workflow you can start to review and approve translated strings.

{% include articles/figure.html url="/assets/img/help/2021/05/crowdin-proofreading-editor.png" legend="proofreading editor" width="586px" %}

**Select** a string that needs validation in the central panel &#9312;. 

If the translation is correct, you can **approve** it &#9313;. Sometimes multiple translations are proposed and are 
available in the right panel, in that case you can **arbitrate** them &#9314; and select the one that works the best.

If none of the translations are correct for the selected string you can either **translate** the string &#9315; yourself
or move to the next string.

## <a name="externalize"></a>Externalize strings or fix source language

A string is available for translation only if it has been externalized in the source code of the passbolt applications, 
and the source code is already in the pre-release state. 

**Note**: As mentioned in the introduction of this document, British English is the language used to develop the 
application. Therefore, any changes to the source language will have to be done in the source code and each change
will have to go through the translation process.

### Externalize styleguide strings

The [styleguide repository](https://github.com/passbolt/passbolt_styleguide) contains most of the screens presented to
the end user.

In this repository you will find:
* Most of the passbolt front-end application in the directory *src/react-extension*
* The passbolt quickaccess application in the directory *src/react-quickaccess*

The styleguide uses the i18next library to help manage the translation, if you want to know more checkout their 
[documentation](https://github.com/i18next/i18next).

#### Getting started

In order to work on the translation of this application you need to:
1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone it.
3. Install the project dependencies `npm install`.

#### Mark a string for translation

To translate a component, this one has first to load the translation context, and optionally the `Trans` component useful
in JSX context.

```javascript
import PropTypes from "prop-types";
import React from "react";
import {Trans, withTranslation} from "react-i18next";

class ComponentToTranslate extends React.Component {}

ComponentToTranslate.propTypes = {
  t: PropTypes.func, // The translation function
};
export default withTranslation("common")(ComponentToTranslate);
```

To mark for translation a string contained in JSX code.
```jsx
<Trans>Welcome to passbolt!</Trans>
```

To mark for translation a string contained in javascript code.
```javascript
this.props.t("Welcome to passbolt!");
```

#### Generate the language json source file

Once you have made your changes on the source code, you can then generate the language json source file.
```shell
npx grunt externalize-locale-string
```

Once done you can propose your changes as a pull request on the repository.

### Externalize browser extension strings

The [browser extension repository](https://github.com/passbolt/passbolt_browser_extension) contains the code that
orchestrates the browser extension screens and communicate with the API.

In this repository you will find the browser extension background page in the directory *src/all/background_page*

The browser extension uses the i18next library to help manage the translation, if you want to know more checkout their
[documentation](https://github.com/i18next/i18next).

#### Getting started

In order to work on the translation of this application you need to:
1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone it.
3. Install the project dependencies `npm install`.

#### Mark a string for translation

To translate a string, a file has first to load the passbolt translation utility located in 
`src/all/background_page/sdk/i18n.js`. For instance:
```javascript
const {i18n} = require("./sdk/i18n");
```

To mark for translation a string contained in javascript code.
```javascript
i18n.t("Welcome to passbolt!");
```

#### Generate the language json source file

Once you have made your changes on the source code, you can then generate the language json source file.
```shell
npx grunt externalize-locale-string
```

Once done you can propose your changes as a pull request on the repository.

### Externalize API strings

The [API repository](https://github.com/passbolt/passbolt_api) contains all the code relative to the API
obviously but also some screens presented to the end users such as the installation wizard.

The passbolt API uses the CakePHP translation feature to help manage the translation, if you want to know more checkout 
their [documentation](https://book.cakephp.org/3/en/core-libraries/internationalization-and-localization.html).

#### Getting started

In order to work on the translation of this application you need to:
1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository.
2. Clone it.
3. Install the project dependencies `composer install`.

#### Mark a string for translation

To mark for translation a string contained in PHP code.
```php
__('Welcome to passbolt!');
```

#### Generate the language gettext source file

Once you have made your changes on the source code, you can then generate the language gettext source file.
```shell
composer externalize-locale-strings
```

Once done you can propose your changes as a pull request on the repository.
