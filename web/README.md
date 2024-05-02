# Web

 This folder contains all html, css, js files it uses the following structure method

## Layered/Component-based Structure
The layered or component-based structure emphasizes separation of concerns and modularity. It’s particularly well-suited for medium to large projects where code organization is crucial. Files are grouped based on different layers or components of the application, such as views, controllers, and models.

### Folder Structure

```
- assets/
- components/
    - header/
        - header.html
        - header.css
        - header.js
    - sidebar/
        - sidebar.html
        - sidebar.css
        - sidebar.js
- views/
    - home/
        - index.html
        - styles.css
        - script.js
    - about/
        - index.html
        - styles.css
        - script.js
- models/
    - user.js
    - post.js

```


### Benefits

Promotes code reusability and maintainability.

Separates concerns, making it easier to manage different aspects of the application.

Facilitates collaboration among team members working on different components.

### Considerations

Requires careful planning and organization upfront.

Can lead to a higher number of directories and files, which might feel overwhelming for small projects.

- [source](https://sahilali.medium.com/5-commonly-used-folder-structure-in-web-development-68bdcb2d313e)