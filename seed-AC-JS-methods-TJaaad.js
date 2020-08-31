var Topic = require('../../models/topic');
var Exercise = require('../../models/exercise');
var Block = require('../../models/block');

var seeder = async () => {
  try {
    console.log('start running');
    var topic = await Topic.create({
      name: 'Array and String Methods',
      uniqueCode: 'TJaaad',
      githubAssignmentRepo: 'https://github.com/AltCampus/TA-JS-methods-TJaaad',
      githubRepo: 'AltCampus/TA-JS-methods-TJaaad',
      slug: 'array-and-string-methods-tjaaad',
      isPublished: true,
    });

    var exercise0 = await Exercise.create({
      name: 'More About Functions',
      uniqueCode: 'EJaaat',
      type: 'content',
      githubBranchName: 'ex1-EJaaat',
      description: '',
      displayName: 'Knowing More ABout Functions',
      topicId: topic._id,
      slug: 'ex1-more-about-function-ejaaat-EJaaat',
      isPublished: true,
    });
    var block00 = await Block.create({
      name: 'Understanding Scope',
      displayName: 'Understanding Scope',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex1-more-about-function-EJaaat/block-01-BJaacu/index.md',
      uniqueCode: 'BJaacu',
      type: 'readText',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise0._id,
      topicId: topic._id,
      slug: 'block-01-bjaacu-BJaacu',
      isPublished: true,
      description:
        'We will learn about what is scope, what are the different types and rules of scope. Understanding the difference between var, let and const keeping scope in mind.\n\n#### Understanding Scope\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/00f6q4RjRXE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n\n#### Scope Chain\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/dXK_8Vj2ODg?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n\n#### Difference Between var, let and const\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/8-OMfvAwqKc?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',
    });
    var block01 = await Block.create({
      name: 'Assignment: Scope',
      displayName: 'Assignment: Scope',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex1-more-about-function-EJaaat/block-02-BJaacv/index.md',
      uniqueCode: 'BJaacv',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise0._id,
      topicId: topic._id,
      slug: 'block-02-bjaacv-BJaacv',
      isPublished: true,
      description:
        '#### Explain the in your own words using examples\n\n1. What is scope?\n2. What are the different types of scope? Two examples of each type.\n3. What are the rules of scope?\n4. Why do we need scope?\n5. What is the difference between var, let and const (keeping scope in mind)\n',
    });
    var block02 = await Block.create({
      name: 'Assignment: Scope',
      displayName: 'Assignment: Scope',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex1-more-about-function-EJaaat/block-03-BJaacw/index.md',
      uniqueCode: 'BJaacw',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise0._id,
      topicId: topic._id,
      slug: 'block-03-bjaacw-BJaacw',
      isPublished: true,
      description:
        "1. What will be the output of the following code with reason (write the error message if any)\n\n```js\n{\n  let username = 'John';\n}\nconsole.log(username);\n```\n\n2. What will be the output of the following code with reason (write the error message if any)\n\n```js\n{\n  var username = 'John';\n}\nconsole.log(username);\n```\n\n3. What will be the output of the following code with reason (write the error message if any)\n\n```js\n{\n  const username = 'John';\n}\nconsole.log(username);\n```\n\n4. What will be the output of the following code with reason (write the error message if any)\n\n```js\n{\n  let num = 21;\n}\nlet secondNum = 200;\nfunction add() {\n  return num + num2;\n}\nconsole.log(add());\n```\n\n5. What will be the output of the following code with reason (write the error message if any)\n\n```js\n{\n  var num = 21;\n}\nlet secondNum = 200;\nfunction add() {\n  return num + num2;\n}\nconsole.log(add());\n```\n\n6. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfor (let i = 0; i < 20; i++) {\n  //\n}\nconsole.log(i);\n```\n\n7. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfor (var i = 0; i < 20; i++) {\n  //\n}\nconsole.log(i);\n```\n\n8. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfor (const i = 0; i < 20; i++) {\n  //\n}\nconsole.log(i);\n```\n\n9. What will be the output of the following code with reason (write the error message if any)\n\n```js\nif (true) {\n  let user = 'John';\n}\nconsole.log(user);\n```\n\n10. What will be the output of the following code with reason (write the error message if any)\n\n```js\nif (true) {\n  var user = 'John';\n}\nconsole.log(user);\n```\n\n11. What will be the output of the following code with reason (write the error message if any)\n\n```js\nif (true) {\n  const user = 'John';\n}\nconsole.log(user);\n```\n\n12. What will be the output of the following code with reason (write the error message if any)\n\n```js\nif (true) {\n  const number = 21;\n  console.log(number++);\n}\n```\n\n13. What will be the output of the following code with reason (write the error message if any)\n\n```js\nif (true) {\n  const number = 21;\n  console.log((number += 21));\n}\n```\n\n14. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfunction first() {\n  let one = 1;\n  function second() {\n    let two = 2;\n    return one + two;\n  }\n}\n\nconsole.log(first());\n```\n\n15. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfunction first() {\n  let one = 1;\n  function second() {\n    let two = 2;\n    return one + two;\n  }\n  second();\n}\n\nconsole.log(first());\n```\n\n16. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfunction first() {\n  let one = 1;\n  function second() {\n    let two = 2;\n  }\n  second();\n  return one + two;\n}\n\nconsole.log(first());\n```\n\n17. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfunction first() {\n  let one = 1;\n  function second() {\n    let two = 2;\n    return one + two;\n  }\n  return second();\n}\n\nconsole.log(first());\n```\n\n18. What will be the output of the following code with reason (write the error message if any)\n\n```js\nfunction first() {\n  let one = 1;\n  function second() {\n    let two = 2;\n    let one = 100;\n    return one + two;\n  }\n  return second();\n}\n\nconsole.log(first());\n```\n\n19. What will be the output of the following code with reason (write the error message if any)\n\n```js\nlet three = 300;\nfunction first() {\n  let one = 1;\n  let three = 3;\n  function second() {\n    let two = 2;\n    let one = 100;\n    return one + two + three;\n  }\n  return second();\n}\n\nconsole.log(first());\n```\n\n20. What will be the output of the following code with reason (write the error message if any)\n\n```js\nlet three = 300;\nfunction first() {\n  let one = 1;\n  let two = 2;\n  function second() {\n    let one = 100;\n    return one + two + three;\n  }\n  return second();\n}\n\nconsole.log(first());\n```\n",
    });
    var block03 = await Block.create({
      name: 'Higher Order Function',
      displayName: 'Higher Order Function',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex1-more-about-function-EJaaat/block-04-BJaacy/index.md',
      uniqueCode: 'BJaacy',
      type: 'readText',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise0._id,
      topicId: topic._id,
      slug: 'block-04-bjaacy-BJaacy',
      isPublished: true,
      description:
        'We will learn about higher order function, callback function and see the use cases of different kinds of higher order functions.\n\n#### Higher Order Function\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/BNcVBd1jhWI?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n\n#### Using Higher Order Function\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/XRjf3LNBLYA?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',
    });
    var block04 = await Block.create({
      name: 'Assignment: HOF',
      displayName: 'Assignment: HOF',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex1-more-about-function-EJaaat/block-05-BJaacz/index.md',
      uniqueCode: 'BJaacz',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaacz',
      openFile: './block-BJaacz',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise0._id,
      topicId: topic._id,
      slug: 'block-05-bjaacz-BJaacz',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    exercise0.blocks = [
      block00._id,
      block01._id,
      block02._id,
      block03._id,
      block04._id,
    ];
    exercise0.save();

    var exercise1 = await Exercise.create({
      name: 'Knowing String Methods',
      uniqueCode: 'EJaaau',
      type: 'content',
      githubBranchName: 'ex2-EJaaau',
      description: '',
      displayName: 'Knowing String Methods',
      topicId: topic._id,
      slug: 'ex2-string-methods-ejaaau-EJaaau',
      isPublished: true,
    });
    var block10 = await Block.create({
      name: 'Getting to Know String Methods',
      displayName: 'Getting to Know String Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex2-string-methods-EJaaau/block-01-BJaada/index.md',
      uniqueCode: 'BJaada',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise1._id,
      topicId: topic._id,
      slug: 'block-01-bjaada-BJaada',
      isPublished: true,
      description:
        'Watch this video to understand what to do in this exercise block.\n\n#### How to complete this exercise:\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/zGpplZj4zY0?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n\n#### Getting To Know String Methods\n\nGo to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.\n\n**Write in your own way of understanding (don\'t copy paste)**\n\nOnly if you are done with step 1 you should go ahead.\n\n1. Practice it by yourself in console (4-5 times to understand)\n2. Data types of parameters\n3. Return value type\n4. Write three examples\n5. In your own words and one sentence explain what this method does.\n\nExample:\n\n1. `charAt`\n\n   - Parameter: (index) defaults to 0 - (number data type)\n   - Return: character at specific index in the string (string data type)\n   - Example:\n     ```js\n     let name = \'Arya Stark\';\n     name.charAt(2); //"y"\n     let sentance = \'A quick brown fox jumped over a lazy dog\';\n     sentance(4); // "i"\n     let houseName = \'Starks\';\n     houseName.charAt(0); // "S"\n     ```\n   - `charAt` accepts a index (number data type) and return the character on that index in the string.\n\n2. `toUpperCase`\n3. `toLowerCase`\n4. `trim`\n5. `trimEnd`\n6. `trimStart`\n7. `concat`\n8. `endsWith`\n9. `includes`\n10. `indexOf`\n11. `lastIndexOf`\n12. `padEnd`\n13. `padStart`\n14. `repeat`\n15. `replace`\n16. `slice`\n17. `split`\n18. `substring`\n',
    });
    var block11 = await Block.create({
      name: 'Learn About String Methods',
      displayName: 'Learn About String Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex2-string-methods-EJaaau/block-02-BJaadb/index.md',
      uniqueCode: 'BJaadb',
      type: 'readText',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise1._id,
      topicId: topic._id,
      slug: 'block-02-bjaadb-BJaadb',
      isPublished: true,
      description:
        'We will learn about different string methods like split, toUpperCase, charAt, endsWith etc.\n\n#### String Methods Explanations\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/00f6q4RjRXE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',
    });
    var block12 = await Block.create({
      name: 'Assignment: String Methods',
      displayName: 'Assignment: String Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex2-string-methods-EJaaau/block-03-BJaadc/index.md',
      uniqueCode: 'BJaadc',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadc',
      openFile: './block-BJaadc',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise1._id,
      topicId: topic._id,
      slug: 'block-03-bjaadc-BJaadc',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    exercise1.blocks = [block10._id, block11._id, block12._id];
    exercise1.save();

    var exercise2 = await Exercise.create({
      name: 'Knowing Array Methods',
      uniqueCode: 'EJaaav',
      type: 'content',
      githubBranchName: 'ex3-EJaaav',
      description: '',
      displayName: 'Knowing Array Methods',
      topicId: topic._id,
      slug: 'ex3-array-methods-ejaaav-EJaaav',
      isPublished: true,
    });
    var block20 = await Block.create({
      name: 'Getting to Know Array Methods',
      displayName: 'Getting to Know Array Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex3-array-methods-EJaaav/block-01-BJaadd/index.md',
      uniqueCode: 'BJaadd',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise2._id,
      topicId: topic._id,
      slug: 'block-01-bjaadd-BJaadd',
      isPublished: true,
      description:
        "writeTextAnswer\n\n## Getting To Know Array Methods\n\nGo to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.\n\n**Write in your own way of understanding (don't copy paste)**\n\nOnly if you are done with step 1 you should go ahead.\n\n1. Practice it by yourself in console (2-3 times to understand)\n2. Data types of parameters\n3. Return value type\n4. Write three examples\n5. In your words what this method does.\n6. Does it mutate the original value or not (check https://doesitmutate.xyz)\n\nExample:\n\n1. `concat`\n\n   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)\n   - Return: a single Array consisting of by all the values passed as parameters in the same order.\n   - Example:\n     ```js\n     let numbers = [1, 2, 3];\n     numbers.concat(4); //[1,2,3,4]\n     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');\n     sentanceArray.concat('dog').join(' '); //\"A quick brown fox jumped over a lazy dog\"\n     let colors = ['red', 'green', 'blue'];\n     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]\n     ```\n   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.\n   - No it does not mutate the original array\n\n2. `join`\n3. `flat`\n4. `push`\n5. `indexOf`\n6. `lastIndexOf`\n7. `includes`\n8. `reverse`\n9. `every`\n10. `shift`\n11. `splice`\n12. `find`\n13. `unshift`\n14. `findIndex`\n15. `filter`\n16. `flat`\n17. `forEach`\n18. `map`\n19. `pop`\n20. `reduce`\n21. `slice`\n22. `some`\n",
    });
    var block21 = await Block.create({
      name: 'Learn About Array Methods',
      displayName: 'Learn About Array Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex3-array-methods-EJaaav/block-02-BJaade/index.md',
      uniqueCode: 'BJaade',
      type: 'readText',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise2._id,
      topicId: topic._id,
      slug: 'block-02-bjaade-BJaade',
      isPublished: true,
      description:
        'We will learn about different string methods like map, forEach, reduce, filter etc.\n\n#### Array Methods Explanations\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/00f6q4RjRXE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',
    });
    var block22 = await Block.create({
      name: 'Assignment: Array Methods',
      displayName: 'Assignment: Array Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex3-array-methods-EJaaav/block-03-BJaadf/index.md',
      uniqueCode: 'BJaadf',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadf',
      openFile: './block-BJaadf',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise2._id,
      topicId: topic._id,
      slug: 'block-03-bjaadf-BJaadf',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    exercise2.blocks = [block20._id, block21._id, block22._id];
    exercise2.save();

    var exercise3 = await Exercise.create({
      name: 'Assignment Level I',
      uniqueCode: 'EJaaaw',
      type: 'content',
      githubBranchName: 'ex4-EJaaaw',
      description: '',
      displayName: 'Assignment Level I',
      topicId: topic._id,
      slug: 'ex4-assignment-level-1-ejaaaw-EJaaaw',
      isPublished: true,
    });
    var block30 = await Block.create({
      name: 'Array and Srting Methods',
      displayName: 'Array and Srting Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex4-assignment-level-1-EJaaaw/block-01-BJaadg/index.md',
      uniqueCode: 'BJaadg',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadg',
      openFile: './block-BJaadg',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise3._id,
      topicId: topic._id,
      slug: 'block-01-bjaadg-BJaadg',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block31 = await Block.create({
      name: 'Array and Srting Methods',
      displayName: 'Array and Srting Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex4-assignment-level-1-EJaaaw/block-02-BJaadh/index.md',
      uniqueCode: 'BJaadh',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadh',
      openFile: './block-BJaadh',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise3._id,
      topicId: topic._id,
      slug: 'block-02-bjaadh-BJaadh',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block32 = await Block.create({
      name: 'Array and Srting Methods',
      displayName: 'Array and Srting Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex4-assignment-level-1-EJaaaw/block-03-BJaadi/index.md',
      uniqueCode: 'BJaadi',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadi',
      openFile: './block-BJaadi',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise3._id,
      topicId: topic._id,
      slug: 'block-03-bjaadi-BJaadi',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    exercise3.blocks = [block30._id, block31._id, block32._id];
    exercise3.save();

    var exercise4 = await Exercise.create({
      name: 'Assignment Level II',
      uniqueCode: 'EJaaax',
      type: 'content',
      githubBranchName: 'ex5-EJaaax',
      description: '',
      displayName: 'Assignment Level II',
      topicId: topic._id,
      slug: 'ex5-assignment-level-2-ejaaax-EJaaax',
      isPublished: true,
    });
    var block40 = await Block.create({
      name: 'Visualise Array Methods',
      displayName: 'Visualise Array Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex5-assignment-level-2-EJaaax/block-01-BJaadj/index.md',
      uniqueCode: 'BJaadj',
      type: 'readText',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise4._id,
      topicId: topic._id,
      slug: 'block-01-bjaadj-BJaadj',
      isPublished: true,
      description:
        'Watch this video to understand what to do in this exercise block.\n\n#### Visualise Array Methods\n\n<div class="youtube-embed">\n  <iframe src="https://www.youtube-nocookie.com/embed/00f6q4RjRXE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div>\n',
    });
    var block41 = await Block.create({
      name: 'Assignment: Visualise Methods',
      displayName: 'Assignment: Visualise Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex5-assignment-level-2-EJaaax/block-02-BJaadk/index.md',
      uniqueCode: 'BJaadk',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise4._id,
      topicId: topic._id,
      slug: 'block-02-bjaadk-BJaadk',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a file named `index.md` inside `code` folder\n2. Keep the images in the `img` folder\n3. Using `![](./img/imagename.png)` add images below each code snippet\n',
    });
    var block42 = await Block.create({
      name: 'Assignment Level II',
      displayName: 'Assignment Level II',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex5-assignment-level-2-EJaaax/block-03-BJaadl/index.md',
      uniqueCode: 'BJaadl',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadl',
      openFile: './block-BJaadl',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise4._id,
      topicId: topic._id,
      slug: 'block-03-bjaadl-BJaadl',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block43 = await Block.create({
      name: 'Assignment Level II',
      displayName: 'Assignment Level II',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex5-assignment-level-2-EJaaax/block-04-BJaadm/index.md',
      uniqueCode: 'BJaadm',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadm',
      openFile: './block-BJaadm',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise4._id,
      topicId: topic._id,
      slug: 'block-04-bjaadm-BJaadm',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block44 = await Block.create({
      name: 'Practice: Array and String Methods',
      displayName: 'Practice: Array and String Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex5-assignment-level-2-EJaaax/block-05-BJaadn/index.md',
      uniqueCode: 'BJaadn',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise4._id,
      topicId: topic._id,
      slug: 'block-05-bjaadn-BJaadn',
      isPublished: true,
      description:
        "#### Reading the requirements:\n\n- @name - name of the function\n- @parameter - parameter name the function accepts\n- @return - data type of return value\n\n#### Questions:\n\n- Write a function to check whether input value is a string or not.\n\n```js\n/* Requirements\n  @name isString\n  @parameter (any value) val\n  @return Boolean\n*/\n\n// your code goes here\n\n// Test\nconsole.log(isString('tony stark')); // true;\nconsole.log(isString([1, 2, 4, 0])); // false;\n```\n\n- Write a function to check whether a string is blank or not.\n\n```js\n/* Requirements\n  @name isBlank\n  @parameter (any value) val\n  @return Boolean\n*/\n\n// your code goes here\n\n// Test\nconsole.log(isBlank('')); // true;\nconsole.log(isBlank('abc')); // false;\n```\n\n- Write a function to split a string and convert it into an array of words.\n\n```js\n/* Requirements\n  @name stringToArray\n  @parameter (string) text\n  @return Array\n*/\n\n// your code goes here\n\n// Test\nconsole.log(stringToArray('Hello World')); // [\"Hello\", \"World\"];\nconsole.log(stringToArray('Lady Bird')); // [\"Lady\", \"Bird\"];\n```\n\n- Write a function to return specified number of characters from a string.\n\n```js\n/* Requirements\n  @name truncate\n  @parameter (string, number) text, len\n  @return String\n*/\n// your code goes here\n\n// Test\nconsole.log(truncate('John Snow', 4)); // \"John\";\n```\n\n- Write a function to convert a `string` name in abbreviated form\n\n```js\n/* Requirements\n  @name abbrevName\n  @parameter (string) fullName\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(abbrevName('Robin Singh')); //\"Robin S.\"\nconsole.log(abbrevName('John Snow')); //\"John S.\"\n```\n\n- Write a function to hide email addresses to protect from unauthorized user.\n\n```js\n/* Requirements\n  @name protect\n  @parameter (string) email\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(protect('johnS@example.com')); // \"john...@example.com\"\nconsole.log(protect('arya_stark@example.com')); // \"arya...@example.com\"\n```\n\n- Write a function to hide email addresses to protect from unauthorized user. The number of dots should be same as length of left characters.\n\n```js\n/* Requirements\n  @name protectAgain\n  @parameter (string) email\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(protect('johnS@example.com')); // \"john.@example.com\"\nconsole.log(protect('arya_stark@example.com')); // \"arya......@example.com\"\n```\n\n- Write a function to parameterize a string.\n\n```js\n/* Requirements\n  @name parameterize\n  @parameter (string) str\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(parameterize('John Snow from Winterfell')); // \"john-snow-from-winterfell\"\nconsole.log(parameterize('Arya Stark from Winterfell')); // \"arya-stark-from-winterfell\"\n```\n\n- Write a function to capitalize the first letter of a `string`.\n\n```js\n/* Requirements\n@name capitalizeFirst\n@parameter (string, number) text, len\n@return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(capitalizeFirst('we are learning')); // \"We are learning\"\nconsole.log(capitalizeFirst('learning Javascript')); // \"Learning Javascript\"\n```\n\n- Write a function to capitalize the first letter of each word in a string.\n\n```js\n/* Requirements\n  @name capitalizeWords\n  @parameter (string) text\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(capitalizeWords('we are learning')); // \"We Are Learning\"\nconsole.log(capitalizeWords('learning javascript')); // \"Learnign Javascript\"\n```\n\n- Write a function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.\n\n```js\n/* Requirements\n  @name swapcase\n  @parameter (string) text\n  @return String\n*/\n\n// your code goes here\n\n// Tets\nconsole.log(swapcase('AaBbc')); // \"aAbBC\"\nconsole.log(swapcase('abcDef')); // \"ABCdEF\"\n```\n\n- Write a function to convert a string into camel case.\n\nExample:\n\n```js\n/* Requirements\n  @name camelize\n  @parameter (string) text\n  @return String\n*/\n// your code goes here\n\n// Test\nconsole.log(camelize('hello world')); // \"helloWorld\"\nconsole.log(camelize('main exercise')); // \"mainExercise\"\n```\n\n- Write a function to uncamelize a string (output should be all in lowercase)\n\n```js\n/* Requirements\n  @name uncamelize\n  @parameter (string, string) text, joinStr\n  @return String\n*/\n// your code goes here\n\n// Tets\nconsole.log(uncamelize('helloWorld', '_')); // \"hello_world\"\nconsole.log(uncamelize('learningJavascript', '_')); // \"learning_javascript\"\nconsole.log(uncamelize('learningJavaScriptAgain', '_')); // \"learning_java_script_again\"\n```\n\n- Write a function to concatenates a given string n times (default is 1).\n\n```js\n/* Requirements\n  @name repeat\n  @parameter (string, number) text, times\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(repeat('Ha!', 3)); // \"Ha!Ha!Ha!\"\nconsole.log(repeat('Ha!')); // \"Ha\"\n```\n\n###\n\nWrite a function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with (\"…\") (by default) or specified characters.\n\n```js\n/* Requirements\n  @name testTruncate\n  @parameter (string, number, string) text, len, postfix\n  @return String\n*/\n// your code goes here\n\n// Test\nconsole.log(textTruncate('We are doing JS string exercises.', 15, '!!')); //\"We are doing !!\"\nconsole.log(textTruncate('We are doing JS string exercises.', 15)); //\"We are doing ...\"\n```\n\n- Write a function to chop a string into chunks of a given length.\n\n```js\n/* Requirements\n  @name stringChop\n  @parameter (string, number) text, size (default to 1)\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(stringChop('hello world', 2)); // [\"he\", \"ll\", \"o \", \"wo\", \"rl\", \"d\"]\nconsole.log(stringChop('hello')); // [\"h\", \"e\", \"l\", \"l\", \"o\"]\n```\n\n- Write a function to count the occurrence of a substring (case doesn't matter) in a string.\n\n```js\n/* Requirements\n  @name count\n  @parameter (string, string) text, char\n  @return Number\n*/\n\n// your code goes here\n\n// Test\nconsole.log(count('The quick brown fox jumps over the lazy dog', 'the')); // 2\nconsole.log(count('hello again hello', 'hello')); // 2\nconsole.log(count('hello', 'one')); // 0\n```\n\n- Write a function to strip leading and trailing spaces from a string.\n\n```js\n/* Requirements\n  @name strip\n  @parameter (string) text\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(strip('   Hello World ')); // \"Hello World\"\nconsole.log(strip('Hello World      ')); // \"Hello World\"\n```\n\n- Write a function to truncate a string to a certain number of words.\n\n```js\n/* Requirements\n  @name chopWords\n  @parameter (string, number) text, words (default to 1)\n  @return String\n*/\n\n// your code goes here\n\n// Test\nconsole.log(chopWords('The quick brown fox jumps over the lazy dog', 4)); // \"The quick brown fox\"\nconsole.log(chopWords('I am learning JavaScript', 4)); // \"I am learning JavaScript\"\n```\n\n- Write a function to reverse an string\n\n```js\n/* Requirements\n  @name reverseString\n  @parameter (string) text\n  @return String\n*/\n\n// Test\nconsole.log(alphabetize('United States')); // 'setatS detinU'\nconsole.log(alphabetize('Hello World')); // 'dlroW olleH'\n```\n",
    });
    exercise4.blocks = [
      block40._id,
      block41._id,
      block42._id,
      block43._id,
      block44._id,
    ];
    exercise4.save();

    var exercise5 = await Exercise.create({
      name: 'Assignment Level III',
      uniqueCode: 'EJaaay',
      type: 'content',
      githubBranchName: 'ex6-EJaaay',
      description: '',
      displayName: 'Assignment Level III',
      topicId: topic._id,
      slug: 'ex6-assignment-level-3-ejaaay-EJaaay',
      isPublished: true,
    });
    var block50 = await Block.create({
      name: 'Implement Array Methods',
      displayName: 'Implement Array Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex6-assignment-level-3-EJaaay/block-01-BJaado/index.md',
      uniqueCode: 'BJaado',
      type: 'writeTextAnswer',
      level: 1,
      contentType: '',
      automatedFeedback: '',
      githubBranchName: '',
      openFile: '',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise5._id,
      topicId: topic._id,
      slug: 'block-01-bjaado-BJaado',
      isPublished: true,
      description:
        'Implement these methods in you own way:\n\n- forEach\n- map\n- filter\n- reduce\n- find\n',
    });
    var block51 = await Block.create({
      name: 'Practice Reduce Methods',
      displayName: 'Practice Reduce Methods',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex6-assignment-level-3-EJaaay/block-02-BJaadp/index.md',
      uniqueCode: 'BJaadp',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadp',
      openFile: './block-BJaadp',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise5._id,
      topicId: topic._id,
      slug: 'block-02-bjaadp-BJaadp',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a index.js file inside `code` folder\n2. `index.js` file will contain all the instructions\n3. Solve below each instruction\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block52 = await Block.create({
      name: 'People of GOT',
      displayName: 'People of GOT',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex6-assignment-level-3-EJaaay/block-03-BJaadq/index.md',
      uniqueCode: 'BJaadq',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadq',
      openFile: './block-BJaadq',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise5._id,
      topicId: topic._id,
      slug: 'block-03-bjaadq-BJaadq',
      isPublished: true,
      description:
        '#### Read the following instructions and complete the exercise:\n\n1. You will find a `instruction.md` file inside `code` folder\n2. `instructions.md` file will contain all the instructions\n3. Solve in `index.js` file\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    var block53 = await Block.create({
      name: 'People of GOT with Reduce',
      displayName: 'People of GOT with Reduce',
      descriptionURL:
        'https://github.com/AltCampus/AC-JS-methods-TJaaad/tree/master/Ex6-assignment-level-3-EJaaay/block-04-BJaadr/index.md',
      uniqueCode: 'BJaadr',
      type: 'writeCode',
      level: 1,
      contentType: 'csb',
      automatedFeedback: '',
      githubBranchName: 'block-BJaadr',
      openFile: './block-BJaadr',
      isTestable: false,
      estimatedTimeToComplete: 0,
      isPotentialInterviewQuestion: false,
      quizOptions: { a: '', b: '', c: '', d: '' },
      quizCorrectAnswerOptions: [],
      correctAnswerExplanation: '',
      todo: {
        isReviewed: false,
        isAssignmentDone: true,
        shouldSplitBlock: false,
        actionsRequired: [
          { videoId: '', scrimbaId: '', type: 'toVideo', topic: '' },
        ],
      },
      exerciseId: exercise5._id,
      topicId: topic._id,
      slug: 'block-04-bjaadr-BJaadr',
      isPublished: true,
      description:
        'writeCode\n\n#### Read the following instructions and complete the exercise:\n\n1. You will find a `instruction.md` file inside `code` folder\n2. `instructions.md` file will contain all the instructions\n3. Solve in `index.js` file\n4. You can also use `index.html` to open in browser to check the output.\n',
    });
    exercise5.blocks = [block50._id, block51._id, block52._id, block53._id];
    exercise5.save();

    topic.exercises = [
      exercise0._id,
      exercise1._id,
      exercise2._id,
      exercise3._id,
      exercise4._id,
      exercise5._id,
    ];
    topic.save();

    console.log('stop running');
  } catch (err) {
    console.log('err', err);
  }
};

module.exports = seeder;