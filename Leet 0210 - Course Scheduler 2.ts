/* 
 * Topological Sort
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const generateAdjList = (prerequisites: number[][]) => {
        const adjList = {};
        for (const [want, req] of prerequisites) {
            if (want in adjList) adjList[want].push(req);
            else adjList[want] = [req];
        }
        return adjList;
    }
    const isAcyclic = (course: number): boolean => {
        if (visited.has(course)) return true;
        if (!(course in adjList)) {
            visited.add(course);
            res.push(course);
            return true
        }
        if (cycle.has(course)) return false;
        
        cycle.add(course);
        for (const req of adjList[course]) {
            if (!isAcyclic(req)) return false;
        }
        cycle.delete(course);
        visited.add(course);
        res.push(course);
        return true
    }
    
    const adjList = generateAdjList(prerequisites);
    const visited = new Set();
    const cycle = new Set();
    const res = [];
    for (let i = 0; i < numCourses; ++i) {
        if (!isAcyclic(i)) return []
    }
    return res
};

/* 
 * Time & Space Complexities
 */
// n = number of courses
// r = number of reqs

// Topological Sort:
// Time: O(n+r)
// Space: O(n)
