# Workshop Instructions: Building Form

This guide serves as a step-by-step instructional resource for creating reusable form components and implementing complex form functionality in Angular using best practices. Follow each assignment carefully and use the provided structure to guide you through the process.

## Introduction to Form Components

In this workshop, you'll learn how to build reusable form components in Angular, starting with best practices and principles.

## Links

- [Form design best practices](https://coyleandrew.medium.com/form-design-best-practices-9525c321d759)
- [W3C Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)

## Assignment 1: Create Form Components

### Step 1: Start Storybook

Run the following command to start Storybook for the design-system library:

```bash
npx nx storybook design-system
```

### Step 2: Create Form Components

Build the following form components, each with general properties (`label`, `control`, `errorMessage`, `hasError`) and some unique properties:

#### 1. FormTextarea

- Additional Props:
    - `placeholder`
    - `rows`
    - `helperText`

#### 2. FormSelect

Wrap the Dropdown component from PrimeNG.

- Additional Props:
    - `options` // TODO: link to data
    - `labelKey`
    - `valueKey`
    - `placeholder`
    - `helperText`

#### 3. FormCheckbox

- Additional Props:
    - `name`
    - `value`

#### 4. FormDatepicker

Wrap the Calendar component from PrimeNG.

- Additional Props:
    - `placeholder`
    - `helpText`
    - `maxDate`
    - `minDate`
    - `selectionMode`
    - `showClear`

## Assignment 2: Create ApplyForVisa Form Component

### Step 1: Implement ApplyForVisa Component

Location: `app/components/forms/apply-for-visa`

Create a form using the previously built form components, containing the following fields:

- Full name (text input)
- Email (email input)
- Planet of destination (text input)
- Species (select with options)
- Arrival date (datepicker)
- Distance from home planet (number input with helper text "In light years")
- Extra info (textarea with helper text "Any additional information you'd like to provide")
- Privacy policy checkbox
- Submit button

### Step 2: Console Log Values on Submit

Ensure that on submit, the form logs all values to the console.

## Assignment 3: Refactor and Add Features

### Step 1: Enable Create and Edit Mode

Refactor the form component to support both modes:

- In edit mode, disable the full name field.
- Enable prefilling the form with initial values for editing.

### Step 2: Implement Validation with Yup

Use Yup to create an interface for form data and validation schema. Implement validation as follows:

- All fields are required except Extra info.
- Email must be valid.
- Distance must be a positive number.
- Arrival date must be in the future.
- Privacy policy must be checked.

Demonstrate validation on one form field and assign attendees the task of implementing validation for the rest.

### Step 3: Handle Form Submission

Emit form data upon form submission.
