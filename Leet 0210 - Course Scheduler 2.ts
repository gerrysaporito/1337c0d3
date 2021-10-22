/*
 * Topological Sort
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const generateAdjList = (prerequisites: number[][]) => {
        const adjList = {};
        for (const [want, req] of prerequisites) {
            if (want in adjList) adjList[want].push(req);
            else adjList[want] = [req];
            if (!(req in adjList)) adjList[req] = [];
        }
        return adjList;
    }
    const isAcyclic = (course: number): boolean => {
        if (cycle.has(course)) return false;
        if (visited.has(course)) return true;
        
        cycle.add(course);
        for (const req of adjList[course]) {
            if (!isAcyclic(req)) return false;
        }
        cycle.delete(course);
        
        visited.add(course);
        res.push(course);
        return true;
    }
    
    const visited = new Set();
    const cycle = new Set();
    const adjList = generateAdjList(prerequisites);
    const res = [];

    for (let i = 0; i < numCourses; ++i) {
        if (!(i in adjList)) res.push(i);
        else if (!isAcyclic(i)) return [];
    }
    
    return res;
};

/* 
 * Time & Space Complexities
 */
// n = number of courses
// r = number of reqs

// Topological Sort:
// Time: O(n+r)
// Space: O(n)
