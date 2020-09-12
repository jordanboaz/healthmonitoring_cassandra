CREATE KEYSPACE health_monitoring with replication = { 'class': 'SimpleStrategy', 'replication_factor': 3};

use health_monitoring;

CREATE TABLE pacient_signals (
 pacient_id text,
 day text,
 hour text,
 minute text,
 event_time timestamp,
 temperature text,
 heartbeat text,
 blood_pressure text,
 breathing_rhythm text,
 PRIMARY KEY ((pacient_id), day, hour, minute ,event_time)
);

COPY health_monitoring.pacient_signals (pacient_id, day, hour, minute, event_time, temperature, heartbeat, blood_pressure, breathing_rhythm) FROM './pacientABC001.csv' WITH DELIMITER = '|' AND HEADER=TRUE ;

COPY health_monitoring.pacient_signals (pacient_id, day, hour, minute, event_time, temperature, heartbeat, blood_pressure, breathing_rhythm) FROM './pacientDEF002.csv' WITH DELIMITER = '|' AND HEADER=TRUE ;

COPY health_monitoring.pacient_signals (pacient_id, day, hour, minute, event_time, temperature, heartbeat, blood_pressure, breathing_rhythm) FROM './pacientGHI003.csv' WITH DELIMITER = '|' AND HEADER=TRUE ;

