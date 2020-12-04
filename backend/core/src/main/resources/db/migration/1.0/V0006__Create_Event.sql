create table Event( id BIGINT NOT NULL AUTO_INCREMENT, modificationCounter INTEGER NOT NULL,
eventName VARCHAR(255),startDate TIMESTAMP,endDate TIMESTAMP, location VARCHAR(255),
description VARCHAR(255), logo VARCHAR(255), attentionTime VARCHAR(50), visitorCount INTEGER NOT NULL DEFAULT '0',
CONSTRAINT PK_Event PRIMARY KEY(id) );