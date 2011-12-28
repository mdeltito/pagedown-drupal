README
======

This is a quick and dirty implementation of the excellent Pagedown editor/converter. Extremely alpha. See code for TODOs.

Notes
-----

* The included version of Pagedown has been modified to allow the element ID to be specified when initializing the editor.
* Currently, selecting an input format with the Pagedown filter does NOT trigger the initialization of a Pagedown editor.
* The logic to apply a editor to a textarea is completely decoupled from the selected format. This is temporary.