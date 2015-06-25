/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

// The name of the JMS Administered object that you have already placed in the repository of your choice
var DESTINATION = "dynamicQueues/MobileFirst";

/**
 * Write a message to the destination with a user defined property.
 * @param messagebody
 *            
 * @returns the result which includes the MessageID
 */
function writeMessage(messagebody) {
	
	var inputData = {
			destination: "dynamicQueues/MobileFirst",
			message:{   	
				body: messagebody,
				properties:{
					MY_USER_PROPERTY:123456
				}
			}
		};
	
	return WL.Server.writeJMSMessage(inputData);
}

/**
 * Read a message from the destination.
 * 
 * @returns the message
 */
function readMessage() {
	var result = WL.Server.readSingleJMSMessage({
    	destination: "dynamicQueues/MobileFirst",
    	timeout: 60
    });
	
	/*var inputData = {
	    	destination: "dynamicQueues/MobileFirst",
	    	timeout: 60
	    };
	
	return WL.Server.readSingleJMSMessage(inputData);*/
	return result;
   
}


/**

 *
 * Write some messages to a queue then read all available messages from the destination. 

 * @return - the read messages.

 */

 

function readAllMessages() {
	// As this is a test module write some test messages by calling the above function.
	writeMessage();
	writeMessage();
	writeMessage();
		  
	var inputData = {
			destination: DESTINATION,
			timeout: 60
		};
	// Now call the JMSAdapter function to read all the messages that we just wrote
	return WL.Server.readAllJMSMessages(inputData);
	
}

