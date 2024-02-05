# CSS Syntax guide
---------------------

This file works as an important CSS syntax cheatsheet.

source and more specifics from :
[link](https://quickref.me/css3.html)

## Selectors

select All elements
    *

All div tags
    div

All elements with class
    .classname

Element with ID
    #idname

All divs and paragraphs
    div,p

#idname * selects All elements inside #idname

## Structural pseudo classes
First child
    p:first-child
Last child
    p:last-child
First of some type
    p:first-of-type
Last of some type
    p:last-of-type
Second child of its parent
    p:nth-child(2)
Nth-child (an + b) formula
    p:nth-child(3n42)
Second child from behind
    p:nth-last-child(2)
Second p of its parent
    p:nth-of-type(2)
Second p of its parent from behind
    p:nth-last-of-type(2)
Unique of its parent
    p:only-of-type
Only child of its parent
    p:only-child

## Pseudo classes

Add content to pseudo element after p
    p::after
Add content to pseudo element before p
    p::before
First letter in p
    p::first-letter
line in p
    p::first-line	First
Selected by user
    ::selection
Placeholder attribute
    ::placeholder
root element
    :root	Documents
active anchor
    :target	Highlight
with no children
    div:empty	Element
P with en language attribute
    p:lang(en)
Element that's not a span
    :not(span)


BEM naming convention:

Class component:
  .header

Class component part:
  .header__sidebar

Class component change
  .header--thin

Class component part change
  .header__sidebar--open

More complex component name
  .blue-abosolute-box

Had problems with BEM and css modules combined.

"Naming: Names should be in camelCase. Though traditional CSS naming convention is to use kebab-case, hyphens can cause problems when accessed within JavaScript. The use of camelCase simplifies the syntax."
[Reference to the quote]: https://devopedia.org/css-modules