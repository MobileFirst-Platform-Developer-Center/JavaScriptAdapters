/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
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

