INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial,
acceptedTerms, userType) VALUES (0, 1, 'mike@mail.com', 'Mike', 'Mike@123', '123456789', '0', '1', '1');
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial,
acceptedTerms, userType) VALUES (1, 1, 'peter@mail.com', 'Peter', 'Peter@123', '123456789', '1', '1', '0');
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial,
acceptedTerms, userType) VALUES (2, 1, 'john@mail.com', 'John', 'John@123', '123456789', '1', '1', '0');
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial,
acceptedTerms, userType) VALUES (3, 1, 'michael@mail.com', 'Michael', 'Mich@123', '123456789', '1', '1', '0');
INSERT INTO Visitor (id, modificationCounter, username, name, password, phoneNumber, acceptedCommercial,
acceptedTerms, userType) VALUES (4, 1, 'maradona@mail.com', 'Maradona', 'Mara@123', '123456789', '1', '1', '0');



INSERT INTO Event (id, modificationCounter,
eventName, location, description, logo, attentionTime,
startDate,endDate,visitorCount) VALUES (1, 1, 'Rebecca','Banglore','Biggest Cultural Fest', null, '5 minutes', '2021-01-01 00:01:00','2021-02-01 00:01:00',4);
INSERT INTO Event (id, modificationCounter,
eventName, location, description, logo, attentionTime,
startDate,endDate,visitorCount) VALUES (2, 1, 'Reflexobeta','Kolkata','Biggest Food Fest', null, '5 minutes', '2021-01-01 00:01:00','2021-02-01 00:01:00',4);
INSERT INTO Event (id, modificationCounter,
eventName, location, description, logo, attentionTime,
startDate,endDate,visitorCount) VALUES (3, 1, 'Orkotan','Mumbai','Biggest Musical Fest', null, '5 minutes', '2021-01-01 00:01:00','2021-02-01 00:01:00',4);



INSERT INTO QueueDetail (id, modificationCounter, queueNumber, creationTime, startTime, endTime, minEstimatedTime,
idVisitor, idEvent)
VALUES (1, 1, 'Q001', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '25 minutes', 1,1);
INSERT INTO QueueDetail (id, modificationCounter, queueNumber, creationTime, startTime, endTime, minEstimatedTime,
idVisitor, idEvent)
VALUES (2, 1, 'Q002', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '15 minutes', 0,1);