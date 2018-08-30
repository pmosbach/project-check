"use strict";
//------------------------------------------------------------------------------
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

// Resolve the path of the repo to be tested

describe('The Repo - README and dotfiles', () => {
    test('should contain a README', () => {
        // TODO add the case insensitive option to make this less hacky
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

    })
})

describe('The Repo - Git Basics', () => {
    test('should have more than one commit in the git history', () => {
        expect(commitCount()).toBeGreaterThan(1);
    })
})