// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBskrhXPjxc-pAiIjqbudj3CZU4N_OfqeI",
    authDomain: "contact-form-93199.firebaseapp.com",
    databaseURL: "https://contact-form-93199.firebaseio.com",
    projectId: "contact-form-93199",
    storageBucket: "contact-form-93199.appspot.com",
    messagingSenderId: "490588116656",
    appId: "1:490588116656:web:ff3ea281854a19b01c0d75",
    measurementId: "G-54ECN0E99M"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var subject = getInputVal('subject');
    
    // Save message
    saveMessage(fname, lname, subject);
  
   // Clear form

    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, subject){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fname: fname,
      lname: lname,
      subject: subject,
    });
  }