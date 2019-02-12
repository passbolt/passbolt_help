{% include messages/warning.html
    content="This release introduces some security fixes, new dependencies and database changes. Make sure you follow 
    the minor [update documentation](https://help.passbolt.com/hosting/update) to roll out this new version as soon as possible."
    link="https://help.passbolt.com/hosting/update"
    ask="Update documentation"
%}
<br>
The main focus of this release was to improve the performance and reactivity of the application, as well as 
address some minor security issues. 

The only feature that was added is a better support for url sharing,
e.g. if you look at the sidebar when clicking on a resource you will be presented with a link. You can use it
to send the url to a given resource to a colleague: if they have access to this resource they will be able to 
navigate directly to it. Similarly links in emails pointing to a resource will take you directly to the corresponding record.

{% include articles/figure.html
    url="/assets/img/help/2019/02/LU_application_urls.png"
    legend="Application urls are now more usable"
%}

The team also worked hard to speed up the performances of the application, most 
notably by starting to load OpenPGP secrets asynchronously (instead of within the resource index calls).
This strategy allows to reduce the loading time of the homepage from 12 to 2 seconds, in our tests with a database containing 2000 passwords shared 
over 400 users. This ground work was also necessary in order to be able to trace accesses to secrets and provide a more granular audit log coming up in the next release.
