# AngularAccenture - Last Updated 23 June 0350hrs

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
