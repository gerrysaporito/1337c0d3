/*
 * Hashmap
 */
function numUniqueEmails(emails: string[]): number {
    emails = emails.map(email => {
        let [local, domain] = email.split('@');
        const plusIndex = local.indexOf('+') !== -1 ? local.indexOf('+') : local.length;
        local = local
            .slice(0, plusIndex)
            .split('')
            .filter(char => char !== '.')
            .join('');

        return [local, domain].join('@');
    })
    
    const map = {};
    
    for (const email of emails) {
        if (email in map) map[email]++;
        else map[email] = 1;
    }
    
    return Object.keys(map).length;
};

/* 
 * Time & Space Complexities
 */
// n = length of emails
// m = length of longest email

// Hashmap:
// Time: O(n*m)
// Space: O(n*m)
