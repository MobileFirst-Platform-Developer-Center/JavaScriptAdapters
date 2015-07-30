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

function temperatureConvertor(celsiusTemp) {

var request = 
	<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
		<soap:Body>
			<CelsiusToFahrenheit xmlns="http://www.w3schools.com/webservices/">
				<Celsius>{celsiusTemp}</Celsius>
			</CelsiusToFahrenheit>
		</soap:Body>
	</soap:Envelope>;
	
	var input = {
	    method: 'post',
	    returnedContentType: 'xml',
	    path: '/webservices/tempconvert.asmx',
	    body: {
	    	content: request.toString(),
	    	contentType: 'text/xml; charset=utf-8',
	    },
	};
	
	var result = WL.Server.invokeHttp(input);
	
	return result.Envelope.Body;
};
