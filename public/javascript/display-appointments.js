function findById(id, Ay) {
    const result = animalsArray.filter(animal => animal.id === id)[0];
    return result;
}
