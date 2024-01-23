// JavaScript file used for site wide variables. Using this instead of learning react just yet.

'use strict';

// Variables

var siteTitle = "Pulcherrimum Quaerere";
var siteURL = "https://pulcherrimumquaerere.com/";
var siteSubTitle = "look beautiful"

var homePageMenu = `
<li class="nav-item">
    <a class="nav-link" href="#">Home</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Writings
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="Pages/poems.html">Poems</a></li>
        <li><a class="dropdown-item" href="#">Infrequents</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="Pages/sandbox.html">Sandbox</a>
</li>
`;
var homePageMenuClasses = "navbar-nav ms-auto mb-2 mb-lg-0";

var pagesMenu = `
<li class="nav-item">
    <a class="nav-link" href="../index.html">Home</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Writings
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="poems.html">Poems</a></li>
        <li><a class="dropdown-item" href="#">Infrequents</a></li>
    </ul>
</li>
<li class="nav-item">
    <a class="nav-link" href="sandbox.html">Sandbox</a>
</li>
`;
var pagesMenuClasses = "navbar-nav ms-auto mb-2 mb-lg-0"

var navbarsPoemPages = `
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsPP" aria-controls="navbarsPP" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarsPP">
<a class="navbar-brand siteTitle" href="#">Pulcherrimum Quaerere</a>
<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
<li class="nav-item">
<a class="nav-link" href="../../index.html">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="../writings.html">Writings</a>
</li>
<li class="nav-item">
<a class="nav-link" href="../sandbox.html">Sandbox</a>
</li>
</ul>
</div>
`;



// Templates

function menuBlock(insideHTML, parentClasses, parentElement) {
    let x = document.createElement('ul');
    x.setAttribute('class', parentClasses);
    x.innerHTML = insideHTML;
    $(parentElement).append(x);
}

function menuBlockP(insideHTML, parentElement) {
    let x = document.createElement('div');
    x.setAttribute('class', 'container-fluid');;
    x.innerHTML = insideHTML;
    $(parentElement).append(x);
}

// Setting values

$(".siteTitle").html(siteTitle);
$(".siteURL").html(siteURL);
$(".siteSubTitle").html(siteSubTitle)
menuBlock(homePageMenu, homePageMenuClasses, "#navbarsmenuTemp");
menuBlock(pagesMenu, pagesMenuClasses, "#navbarsPages");
menuBlockP(navbarsPoemPages, "#poemPagesNavbar")