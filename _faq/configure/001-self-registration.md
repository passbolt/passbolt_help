---
title: User Self Registration Set Up
slug: self-registration
layout: faq
category: configure
permalink: /configure/:slug
date: 2023-02-15 00:00:00 Z
---


### How to set up user Self Registration

The purpose of this guide is to show you how to set up user Self Registration on your passbolt installation as an admin and for users how to register.


{% assign adminstepNumber = 1 %}

## Admin Guide

**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Log in with an administrator account

**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Navigate to the adminstration tab

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/Admin1.png"
    legend="Navigate to admin tab"
    width="500px"
%}

**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Select the Self Registration option on the left

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/Admin2.png"
    legend="Navigate to self registration"
    width="500px"
%}

**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Click the toggle to enable

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/Admin3.png"
    legend="Toggle self registration"
    width="500px"
%}

**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Enter the domains you want to allow to self register.

This section will require that you specify the domains you want to allow self registration on. This is used to only allow users with an email address at that domain to register. 

{% include messages/warning.html
    content="**Important:** This will allow **ANY** user with an email address at that domain to register. So, it is recommended to not use a free or common domain such as gmail.com here."
%}

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/Admin4.png"
    legend="Enter domains"
    width="500px"
%}


**Step {{ adminstepNumber }}{% assign adminstepNumber = adminstepNumber | plus:1 %}.** Save your settings

Congrats! At this point you have user Self Registration set up and configured and you can let your users know!


{% assign userstepNumber = 1 %}

## User Guide

**Step {{ userstepNumber }}{% assign userstepNumber = userstepNumber | plus:1 %}.** Navigate to your Passbolt URL


**Step {{ userstepNumber }}{% assign userstepNumber = userstepNumber | plus:1 %}.** Enter your email address

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/User1.png"
    legend="Enter your email address"
    width="500px"
%}

**Step {{ userstepNumber }}{% assign userstepNumber = userstepNumber | plus:1 %}.** Enter your name

{% include articles/figure.html
    url="/assets/img/help/2023/02/self-registration/User2.png"
    legend="Enter your name"
    width="500px"
%}

**Step {{ userstepNumber }}{% assign userstepNumber = userstepNumber | plus:1 %}.** Proceed with the standard sign up process.