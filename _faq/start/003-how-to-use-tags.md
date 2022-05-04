---
title: How to use tags (PRO)
slug: how-to-use-tags
layout: faq
category: start
permalink: /faq/start/:slug
date: 2022-05-02 00:00:00 Z
---

Sharing passwords using groups is already possible in passbolt and can help organise the passwords. It is often not enough for small teams or users with a lot of passwords, who often need another way to organise their data.

## How are tags different than categories?

The major difference between categories and tags is that, in most systems using folders, a given item only belongs to one folder. Inversely, when tagging, one item can be linked to many tags. Also while it is possible to have a hierarchical tag structure it is also less common.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-mental-models.png"
    legend="Tags mental models"
    width="500px"
%}

## User experience and use cases

You will find tags in the passwords workspace:

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-passwords-workspace.png"
    legend="Tags in passwords workspace"
    width="500px"
%}

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-use-cases.png"
    legend="Tags use cases"
    width="500px"
%}

### View tags

A user can view the tags applied to a resource from the tag section in the passwords workspace secondary sidebar.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-view.png"
    legend="View tags"
    width="500px"
%}

### Edit tags

#### Tag / Untag a resource via the tags editor

Users can tag a resource by clicking on the “Tags editor” in the passwords workspace secondary sidebar. 

Users will see an autocomplete with a list of proposed tags when adding/editing tags to promote tag reuse. This autocomplete is updated for each letter typed starting with the first one. When clicking on an autocomplete list item, the tag is added. It is possible to select autocomplete list items using keyboard keys.

By default, tags are set to be personal. It is a way for users to organize their passwords (their own and shared ones) following their own personal classification. Any resource can be tagged by users as personal.

If using the prefix “#” a tag can be shared to everyone with access to this password. Users must be able to update a resource to be able to create a shared tag on it. 

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-add.png"
    legend="Add tags"
    width="500px"
%}

#### Tag a resource by dragging it on a tag

A user can tag a resource by dragging a resource from the grid on a tag in the “Filter by tags” section in the primary sidebar.

### Rename tag

A user can delete a tag by opening the contextual menu of a tag in the “Filter by Tags” section of the primary sidebar.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-contextual-menu.png"
    legend="Tags contextual menu"
    width="400px"
%}

By clicking on "Edit Tag", a dialog will therefore be shown to the user.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-rename.png"
    legend="Rename tags"
    width="400px"
%}

### Delete tag

A user can delete a tag by opening the contextual menu of a tag in the “Filter by Tags” section of the primary sidebar. To prevent someone from removing a tag by mistake, we request the user to confirm the delete action.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-delete.png"
    legend="Delete tags"
    width="400px"
%}

## Filter resources

### Filter resources from the user tags list

Users can filter resources by tag via the “Filter by tags” section in the passwords workspace primary sidebar.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-filter.png"
    legend="Filter tags"
    width="400px"
%}

### Filter resources from the resource details sidebar

Users can filter the resources by clicking on a tag in the “Tags” section of the resource details sidebar.

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-untag.png"
    legend="Click on a tag to filter on this tag"
    width="500px"
%}

### Filter resources by personal or shared tags

By clicking on the funnel icon, you can filter by personal or shared tags:

{% include articles/figure.html
    url="/assets/img/help/2022/05/tags-filter-2.png"
    legend="Filter by personal or shared tags"
    width="400px"
%}

### Filter resources from the search form

You can type a tag slug in the password search form to display tagged resources.

## Email notifications

Editing or deleting a tag does not trigger any email notifications.