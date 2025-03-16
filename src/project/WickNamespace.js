// Pre- NBStudio objectives, being removed...
// /**
//  * 
//  * @param {string} namespace 
//  * @returns {object} - the namespace
//  */
// window.namespaces = function(namespace) {
//     if (!namespace.startsWith("_") && typeof this._list[namespace] !== 'undefined') {
//         if (!namespace.includes("::")) {
//             return this._list[namespace];
//         } else {
//             var brokenspace = namespace.split("::");
//             var finalspace = namespaces(brokenspace[0]);
//             for (var i = 0; brokenspace.length; i++) {
//                 finalspace = finalspace[brokenspace[i]];
//             }
//         }
//     } else {
//         console.warn("namespace \"" + namespace + "\" does not exist.");
//         return null;
//     }
// }

// /**
//  * @typedef WickNamespace
//  * @property {string} name
//  * @name on - event function
//  */


// namespaces._list = {};

// /**
//  * 
//  * @param {WickNamespace} namespace 
//  */
// namespaces._add = function(namespace) {
//     this._list[namespace.name] = namespace
// }
// /**
//  *  Creates a namespace from the namespcaes
//  * @param {string} namespace 
//  * @param {WickNamespace} [base] 
//  */
// window.namespace = function(namespace, base) {
//     var space = {}
//     space.name = namespace
//     if (!namespace.includes("::")) {
        
//     } else {
//         var brokenspace = namespace.split("::");
//         var finalspace = namespaces(brokenspace[0]);
//         for (var i = 0; brokenspace.length; i++) {
//             finalspace = finalspace[brokenspace[i]];
//         }
//         finalspace[namespace] = space;
//         return this._public;
//     }
// }
// namespace._publicFunctions = {

// }
// namespace._public = function(space) {
    
// }