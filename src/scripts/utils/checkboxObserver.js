/**
 * @module checkboxObserver
 */
import Checkboxes from 'checkboxes';

/**
 * @callback changeCallback
 * @param {string[]} string values associated with the value attribute of input checkboxes
 */

/*
 * @function addObserver
 * @param el {DOM Node} a dom element 
 * @param callback {function} function returned by checkboxChangeBuilder
 * @description execute a callback function when a bootstrap checkbox is checkedi or unchecked
 */
export function addCheckboxObserver(el, callback) {
  // wrap the callback so it can be used if the mutation alters the checkbox
  var mutationFunc = mutationFuncBuilder(callback);
  var observer = new MutationObserver(function(mutations){
    mutations.forEach(mutationFunc);
  });

  // mutation observer config object, use oldValue: true so we can compare current value to old value
  // otherwise we won't be able to tell if the active value changed
  var config = {attributes: true, attributeOldValue: true, attributeFilter: ['class']};

  // apply the observer to el
  observer.observe(el, config);
}

/**
 * Return a function that can be called by mutation observer
 * @function mutationFuncBuilder
 * @param {function} changeCallback - function that takes a checkbox value
 * @returns {function} function that accepts a mutation record
 */
function mutationFuncBuilder(changeCallback) {
  return function(mutation) {
    /* mutation will track the old and new value, two cases that we care about
       1) added active class to the label
       2) removed active class from the label
       mutation will fire anytime a class is added or removed, the class may or may
       not be the active class that signals a checkbox click
       so we check to see if the active class is the class that changed betwee old and new
    */
    var newHasActive = mutation.target.classList.contains('active');
    var oldHasActive = mutation.oldValue.includes('active');
    if( (newHasActive && !oldHasActive) || (oldHasActive && !newHasActive) ){
      var elArr =  mutation.target.getElementsByTagName('input');
      if(elArr.length) {
        var inputEl = elArr[0];
        changeCallback(inputEl.value);
      }
    }
  };
}

/**
 * Respond to bootstrap checkboxes being checked
 * @function addBootstrapCheckboxObservers
 * @param elementIds {string[]} elementIds - id strings for each checkbox to observer, strings should not contain a '#'
 * @param values (string[]} values - values - strings corresponding to the value attributes of a group of checkboxes
 * @param {boolean[]} defaults - default value of a group of checkbox input elements
 * @param {changeCallback} callback 
 */
function addBootstrapCheckboxObservers(elementIds, values, defaults, callback) {
  /* Notes
     One function to add observers for every checkbox
     function addObservers(elementIds, value attribute of each element, default value of each value(true or false), callback(takes array of strings for each checked item)
     // this builds a callback that can be passed to mutation observer
     {
     CallbackBuilder(value, defaults, callback) {
     new Checkboxes (values, defaults)
     function(checkboxes, callback) {
     return function(value){
     callback(checkboxes.toggle(value));
     }}
     }
     }

     Add observers steps:
     - call checkboxChangeBuilder 
     for each id in id array
     - get DOM element by id
     - call addCheckboxObserver with element and result of observerCallbackBuilder
  */
}

/**
 * Expose a way to track checkbox toggling that can be used by other functions
 * to drive their behavior
 * @function checkboxChangeBuilder 
 * @param {string[]} values - strings corresponding to the value attributes of a group of checkboxes 
 * @param {boolean[]} defaults - default value of a group of checkbox input elements
 * @param {changeCallback} callback  
 * @returns {function} a function that accepts a single value, this function can be passed to mutationFuncBuilder  
 */
function checkboxChangeBuilder(values, defaults, callback) {
  var boxes = new Checkboxes(values, defaults);

  return function(value){
    callback( boxes.toggle(value) ); 
  };
}
