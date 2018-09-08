"use strict";
//--------------------------------------------------------------------------------------------------
// Dependencies

// NPM-installed dependencies
const glob = require("glob");
const commitCount = require("git-commit-count");

// Built-in Node dependencies
const fs = require("fs");
const path = require("path");

//--------------------------------------------------------------------------------------------------
// Constants


//--------------------------------------------------------------------------------------------------
// Tests

// TODO resolve the path of the repo to be tested

describe('The Repo - README and dotfiles', () => {
    test('should contain a README', () => {
        // TODO add the case insensitive option to make this less ugly
        expect(glob.sync("[Rr][Ee][Aa][Dd][Mm][Ee]?(\.md|\.txt|\.rst)")).not.toHaveLength(0);
    })

    test('should contain a .gitignore file', () => {
        expect(fs.existsSync('.gitignore')).toBeTruthy();
    })

    test('should contain a GitLab CI file (.gitlab-ci.yml)', () => {
        expect(fs.existsSync('.gitlab-ci.yml')).toBeTruthy();
    })
})

describe('The Repo - Directory Structure', () => {
    test('should have a documentation folder', () => {
        expect(glob.sync("(doc/|docs/|Documents/|Documentation/)")).not.toHaveLength(0);
    })

    /*test('should have a documentation folder that is not empty', () => {
        
    })*/

    test('should not have a releases folder', () => {
        expect(glob.sync("[Rr]elease?(s)/")).toHaveLength(0);
    })
})

describe('The Repo - Git Basics', () => {
    test('should have more than one commit in the git history', () => {
        expect(commitCount(process.env.PWD)).toBeGreaterThan(1);
    })
})

console.log("CWD: " + process.cwd());
console.log("__dirname: " + __dirname);
console.log("PWD: " + process.env.PWD);
console.log("Commits: " + commitCount());