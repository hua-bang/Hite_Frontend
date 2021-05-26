const rules = {
    name: [
        {
            required: true,
            message: 'Please input Username.',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 8,
            message: 'Length should be 3 to 8',
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: 'Please input Password.',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 8,
            message: 'Length should be 3 to 8',
            trigger: 'blur',
        },
    ]
};

export default rules;