<!-- TODOS -->

<!-- index.html homepage -->
<!-- homepage has link to notes.html -->
<!-- GET * returns index.html -->
<!-- GET /notes returns notes.html -->
<!-- GET /api/notes reads and returns the contents of db.json -->
<!-- POST /api/notes writes a new note to db.json and returns the newly added note -->

<!-- acceptance criteria -->

# GIVEN a note-taking application

## action

WHEN I open the Note Taker

### behavior

THEN I am presented with a landing page with a link to a notes page

## action

WHEN I click on the link to the notes page

### behavior

THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

## action

WHEN I enter a new note title and the note’s text

### behavior

THEN a Save icon appears in the navigation at the top of the page

## action

WHEN I click on the Save icon

### behavior

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

## action

WHEN I click on an existing note in the list in the left-hand column

### behavior

THEN that note appears in the right-hand column

## action

WHEN I click on the Write icon in the navigation at the top of the page

### behavior

THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
