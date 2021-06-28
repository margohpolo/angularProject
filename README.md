# AngularAccenture: Consolidated Documentation - Last Updated 28 June

## Note: Deployment Branch **NOT** updated yet

### [Landing Page](https://margohpolo.github.io/angularProject/) - ServicesModule (i.e. Supply Chain, AI etc.)

- Services Module Lazy-Loads
- Custom Class in a Model
- Data instantiation handled by a Service
- Cards on Landing Page created without a packaged Ng Directive (i.e. used Placeholder Directive & Resolver + ComponentFactory + @ViewChild)
- OnClick of a button in Card -> The Corresponding Data is sent to a Reusable Component -> Load Resuable Component with URI of corresponding Data
- **Note:** Card Component & said Reusable Component are `Siblings`

### [Login](https://margohpolo.github.io/angularProject/login)

- Authentication API Integration (Folder: node-js-jwt-auth)
- Login + JWT works
- API **NOT** deployed as Effort not in scope of learning Angular Framework

### [Contact](https://margohpolo.github.io/angularProject/contact)

-

### [Sign Up](https://margohpolo.github.io/angularProject/signup)

- SignUp Module Lazy-Loads
- SignUp registers Username, Password & email address with a default account type of `admin`
- API (Folder: node-js-jwt-auth) **NOT** deployed as Effort not in scope of learning Angular Framework

### [Users](https://margohpolo.github.io/angularProject/users)

- Users Module Lazy-Loads
- Calls data from [Mockend API](https://github.com/margohpolo/angularProjectAPI/blob/main/README.md) (Because it's free)
- WIP: Reusable Form Component for Add/Edit User, that will display in a Modal
- WIP: Connecting Delete button to the Delete function in Service
- ~~WIP: Deploying Node-Express API + Connect to a clone of this Module~~

### [Local-ItemList](https://margohpolo.github.io/angularProject/local-itemlist)

- Local-ItemList Module Lazy-Loads
- Left column: contains a List of Items instantiated in the LocalItemListService
- OnClick of an Item -> Item Details are Populated in the Form in the Center -> Either Update this Item's Details, or Delete this Item, or Clear the Form
- Center column: Child Component Form also allows for Adding a new Item
- Form Control: Form cannot have empty fields
- Right column: Item List from Session Storage
- Session Storage is instantiated OnInit()
- With any Add, Update or Delete, Session Storage is updated via the Parent Component's ngDoCheck()

### [Blog](https://margohpolo.github.io/angularProject/blog)

- Blog calls data from a [different Mockend API](https://github.com/margohpolo/angularProjectBlogAPI/blob/main/README.md) (Because it's free)

- Blog Landing Page: Displays blog entries; Pagination **WIP**

- On Click: goes to single blog entry page (**WIP**; not a priority as exactly the same concept has already been demonstrated in Services section)

---

---

---

# AngularAccenture - Last Updated 23 June 0350hrs (\*no longer updated)

### 19 June Assignment Requirements - As Per Task List

[x] ~~1. Generate dynamic data by attaching custom event & populate inside component.~~  
[x] ~~Do **NOT** use Angular Binding e.g. ngSubmit.~~  
[x] ~~Do **NOT** use Angular Directives (e.g. `*ngFor`, `*ngIf` etc.) -> Manipulate the data inside the Controller (\*.component.ts) instead.~~

[] 2. Build the Contact Form component with validations and store the input data in **Browser Storage**, then list the Contact Information that was entered in a separate component by reading from Browser Storage.  
[] Template Driven  
[] Reactive Form  
[] Ensure that information is completely filled by User in either a Template-Driven Form or Reactive Form, and vice-versa.  
[] In One Form Field, implement Custom Validation using Directives.  
**Update:** A buggy Form has been created under /signup. WIP...

[x] ~~3. Create a Custom (Structural) Directive that collects Input from Parent Component & Iterate the Template over the number of times it is passed from its Parent.~~

[x] ~~4. Create a Sibling Component & pass information between them.~~

[] 5. Build components under Services Menu using only HTML & CSS. **No Bootstrap allowed.**  
**To Do:**

- Find content
- Style without Bootstrap (After Saturday?)

---

## Implementations ([Deployment Here](https://margohpolo.github.io/angularProject/))

### Home-Services

- Custom Class in a Model
- Data instantiation handled by a Service
- Cards on Landing Page created without a packaged Ng Directive (i.e. used Placeholder Directive & Resolver + ComponentFactory + @ViewChild)
- OnClick of a button in Card -> The Corresponding Data is sent to a Reusable Component -> Load Resuable Component with URI of corresponding Data
- **Note:** Card Component & said Reusable Component are `Siblings`

### Contact Form - **WIP**

- Contact Form Component
- 2 Separate Directives for checking Username & Email Validity (\*\*Not 100% Working Yet; WIP)
- Local Browser Storage (\*\*Not Implemented Yet; WIP)

---

### 21 June Assignment

1. Create an API for Users

- Implemented in [Mockend](https://mockend.com/margohpolo/angularProjectAPI/users)

2. Create CRUD Forms

- Created List for displaying all Users, with Add/Edit/Delete buttons (buttons not working yet)
  **To Dos:**  
  [] Tidy up Data in API (Currently random strings)  
   [] Add/Edit - (Click) will open a Modal with Form (populated if required)  
   [] Delete - "Are You Sure?" (Delete/Cancel buttons)
