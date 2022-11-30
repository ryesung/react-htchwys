#Part 2: Written Evaluation

Please provide a markdown file with the answers to the following questions below.

The product team has decided that we want to make improvements to this application.

##Questions:

###1)  
 Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

###Answer:

You would have to fetch the data from an API. I would use an **async/await** function that uses _fetch()_. This would be best put inside a **useEffect** hook. The **useEffect** allows the fetch to be called only when the depencies change, and also allows side effect of fetching to occur cleanly within the component.

Since the data is coming from an API, you will have to convert the data to json (response.json()) and you could consider integrating **React-Query** library to help caching especially if the data is large. Or **axios** library if you're doing CRUD operations.

###2.
Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

###Answer:

Using nanoid or any random generator function will make React keys unstable because they will generate a key before and after the component changes and therefore the stable key=id link will not be there. The item will remount at every render.

It's better to use either the index of a static list, or a dynamic list with stateless items- like Pagination. Otherwise an item with an 'id' will be needed as the 'key' for items that change states.
