function updateNeighbors(nodes, node, boardArray, target, name, start, heuristic) {
    const neighbors = getNeighbors(node.id, nodes, boardArray);
    for (let neighbor of neighbors) {
        if (target) {
            updateNode(node, nodes[neighbor], nodes[target], name, nodes, nodes[start], heuristic, boardArray);
        } else {
            updateNode(node, nodes[neighbor]);
        }
    }
}