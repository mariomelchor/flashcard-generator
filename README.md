# Flashcard-Generator

## Running the App

```node app.js```

You will be prompted to **Add Cards** or **Show Cards**. 
**Add Cards** allows you to add a **Basic Flash Card** or a **Cloze Flash Card**.
**Show Cards** will loop through both **Basic Flash Card** and **Cloze Flash Card** and let the user answer each card.

## Basic Flash Card

A **Basic Flash Card** has a front and a back. A **Basic Flash Card** is created through a constructor BasicCard which accepts two arguments: front and back. BasicCard has a card method which appends the flashcard to the basic.json file.

Creating a new **Basic Flash Card** can be created with or without new:

```var newCard = new BasicCard('Who was the first president of the United States?', 'George Washington');
newCard.card();```

```var newCard = BasicCard('Who was the first president of the United States?', 'George Washington');
newCard.card();```

## Cloze Flash Card

A **Cloze Flash Card** has a partial and a cloze. A **Cloze Flash Card** is created through a constructor ClozeCard which accepts two arguments: text and cloze. ClozeCard has a card method which appends the flashcard to the cloze.json file.

Creating a new **Cloze Flash Card** can be created with or without new:

```var newCard = new BasicCard('In 1807, the Embargo Act prohibited all foreign trade', '1807');
newCard.card();```

```var newCard = ClozeCard('In 1807, the Embargo Act prohibited all foreign trade', '1807');
newCard.card();```