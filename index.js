let RichterNumber = parseFloat(prompt("Enter a Richter scale number"))
if (RichterNumber < 4.5) console.log("No destruction of buildings")
else if (RichterNumber <6) console.log("Damage to poorly constructed buildings")
else if (RichterNumber <7) console.log("Many buildings  considerably damaged,  some collapse")
else if (RichterNumber <8) console.log("Many buildings destroyed")
else console.log("Most structures fall")