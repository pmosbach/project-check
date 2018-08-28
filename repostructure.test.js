"use strict";
//------------------------------------------------------------------------------
// Dependencies

// NPM-installed dependencies
var glob = require("glob");

// Built-in Node dependencies
var fs = require("fs");

//--------------------------------------------------------------------------------------------------
// Constants


//--------------------------------------------------------------------------------------------------
// Tests

describe('The Repo - README and dotfiles', () => {
    test('should contain a README', () => {
        // TODO turn into a regex using glob
        expect(fs.existsSync('README.md')).toBeTruthy();
    })

    test('should contain a .gitignore file', () => {
        expect(fs.existsSync('.gitignore')).toBeTruthy();
    })

    test('should contain a GitLab CI file (.gitlab-ci.yml)', () => {
        expect(fs.existsSync('.gitlab-ci.yml')).toBeTruthy();
    })
})