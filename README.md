README
======

This is a quick and dirty implementation of the excellent Pagedown editor. Extremely alpha. See code for TODOs.

Notes
-----

* The included version of Pagedown has been modified to allow the element ID to be specified when initializing the editor.
* Currently, selecting an input format with the Pagedown filter does NOT trigger the initialization of a Pagedown editor.
* The logic to apply a editor to a textarea is completely decoupled from the selected format. This is temporary.
* The markdown library is included with this module, as is a basic implementation of an input filter. This will likely be removed, and the Markdown Filter module added as a dependency
