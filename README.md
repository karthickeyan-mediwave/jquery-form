## Login form

### validation using regex

#### for email

##### regex =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

-Let’s break down this regular expression piece by piece:

-^ - The beginning of the string.
-( - Start of a capturing group. -[a-zA-Z0-9._%-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, underscores, percent signs, and hyphens.
-@ - Matches the “@” symbol. -[a-zA-Z0-9.-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, and hyphens.
-\. - Matches a literal period character. -[a-zA-Z]{2,} - Matches two or more letters (both uppercase and lowercase).
-) - End of the capturing group.
-$ - The end of the string.

#### for password

##### regex = /^(?=._?[A-Z])(?=._?[a-z])(?=._?[0-9])(?=._?[#?!.@$%^&*-]).{8,20}$/;

-^ represents starting character of the string.
-(?=._[0-9]) represents a digit must occur at least once.
-(?=._[a-z]) represents a lower case alphabet must occur at least once.
-(?=._[A-Z]) represents an upper case alphabet that must occur at least once.
-(?=._[@#$%^&-.+=()] represents a special character that must occur at least once.
-(?=\\S+$) white spaces don’t allowed in the entire string.
-.{8, 20} represents at least 8 characters and at most 20 characters.
-$ represents the end of the string.

### T0 run

```sh
$ npx serve app
```
