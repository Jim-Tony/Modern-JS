// alert('Hey Console');
console.log("Hello World");
console.log(100);
console.warn("Hey Be cautious");
console.info('12');
console.table([{firstName: 'Jim', secondName: 'Tony'}, {firstName:'Paul', secondName:'Alan'}]);
console.error('Caused a error')


//Create a group
console.group('Simple group')
console.log("Some")
console.log("Thing")
console.groupEnd(); //End the group


//We can add styles for the console outputs

const styles = 'padding:10px; background-color:white; color:green;'
 console.log('%cHello world', styles)