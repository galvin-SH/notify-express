const express = require("express");
const { join } = require("path");
const { readFileSync, writeFileSync } = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET /notes should return the notes.html file.
app.get("/notes", (req, res) => {
    res.sendFile(join(__dirname, "./public/notes.html"));
});
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    res.sendFile(join(__dirname, "./db/db.json"));
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const notes = JSON.parse(readFileSync("./db/db.json"));
    newNote.id = notes.length + 1;
    notes.push(newNote);
    writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
app.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(readFileSync("./db/db.json"));
    const deleteNote = notes.filter(
        (note) => note.id !== parseInt(req.params.id)
    );
    writeFileSync("./db/db.json", JSON.stringify(deleteNote));
    res.json(deleteNote);
});
// GET * should return the index.html file as a default.
app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "./public/index.html"));
});
// Start the server
app.listen(PORT, () => {
    console.log(`server now listening on port ${PORT}!`);
});
