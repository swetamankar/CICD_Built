'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before}) {
    Before(function() {
        console.log(this.parameters.proxyEndpoint); 
        this.apickli = new apickli.Apickli('https', this.parameters.proxyEndpoint);
        
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});