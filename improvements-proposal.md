#Part 2: Written Evaluation

Please provide a markdown file with the answers to the following questions below.

The product team has decided that we want to make improvements to this application.

##Questions:

 ###1)   
 Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

###Answer:

You would have to fetch the data from an API. I would use an **async/await** function that uses *fetch()*.  This would be best put inside a **useEffect** hook.   Once that data is gathered then using a **useState** to render the values in the component.  The amount of data you are getting from  the API you should consider caching.


###2.
    Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

###Answer:
 
 In the ReactJS documentation is says *"Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a STABLE identity:"*. If you have nanoid generated keys they would regenerate keys when they are rerendered therefore giving React elements an UNSTABLE identity.