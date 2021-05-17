import { Field, Form, ErrorMessage, defineRule } from "vee-validate";

defineRule("required", (value) => {
    if (!value) {
        return "This is required";
    }

    return true;
});

defineRule("min", (value, [min]) => {
    if (value && value.length < min) {
        return `Should be at least ${min} characters`;
    }

    return true;
});

defineRule("confirmed", (value, [other]) => {
    if (value !== other) {
        return `Passwords do not match`;
    }

    return true;
});