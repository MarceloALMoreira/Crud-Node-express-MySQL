const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        response.status(400).json({ message: 'The Field "title" is required ' })
    }
    if (body.title === '') {
        response.status(400).json({ message: 'title cannot be empty' })
    }
    next();
};

module.exports = {
    validateBody,
};