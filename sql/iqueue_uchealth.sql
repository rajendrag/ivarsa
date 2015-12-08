CREATE DATABASE iqueue_uchealth CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'iqueue_u'@'%' IDENTIFIED by 'iqueue_p@$sw0rD';
GRANT ALL PRIVILEGES ON iqueue_uchealth.* TO 'iqueue_u'@'%' WITH GRANT OPTION;

drop table if exists iq_nurse_coverage;
drop table if exists iq_holidays_per_unit;
drop table if exists iq_unit_hrs_of_operation;
drop table if exists iq_unit_mstr;

CREATE TABLE `iq_unit_mstr` (
  `iq_unit_mstr_id` varchar(50) NOT NULL,
  `unit_name` varchar(250) DEFAULT NULL,
  `description` text,
  `nof_chairs` int(11) DEFAULT NULL,
  `nof_beds` int(11) DEFAULT NULL,
  `appt_start_time` time DEFAULT NULL,
  `nof_appt_start_with_in_hour` int(11) DEFAULT NULL,
  `nof_appt_discharge_with_in_hour` int(11) DEFAULT NULL,
  `owner` varchar(200) DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `modified_datetime` datetime DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `parent_id` varchar(200) DEFAULT NULL,
  `show_on_ui` tinyint(1) DEFAULT '1',
  `iq_version` int(11) DEFAULT '0',
  `cloned_from` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`iq_unit_mstr_id`),
  UNIQUE KEY `parent_id` (`parent_id`,`iq_version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;



CREATE TABLE `iq_unit_hrs_of_operation` (
  `iq_unit_hrs_of_operation_id` varchar(50) NOT NULL,
  `iq_unit_mstr_id` varchar(50) DEFAULT NULL,
  `day` enum('SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY') DEFAULT NULL,
  `from_time` time DEFAULT NULL,
  `until_time` time DEFAULT NULL,
  `last_appt_time` time DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `modified_datetime` datetime DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`iq_unit_hrs_of_operation_id`),
  UNIQUE KEY `iq_unit_mstr_id` (`iq_unit_mstr_id`,`day`),
  KEY `fk_iq_unit_hrs_of_operation_1_idx` (`iq_unit_mstr_id`),
  CONSTRAINT `fk_iq_unit_hrs_of_operation_1` FOREIGN KEY (`iq_unit_mstr_id`) REFERENCES `iq_unit_mstr` (`iq_unit_mstr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE `iq_nurse_coverage` (
  `iq_nurse_coverage_id` varchar(50) NOT NULL,
  `iq_unit_mstr_id` varchar(50) DEFAULT NULL,
  `day` enum('SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY') DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `no_of_nurses` int(11) DEFAULT NULL,
  `shift_length` time DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `modified_datetime` datetime DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`iq_nurse_coverage_id`),
  KEY `fk_iq_nurse_coverage_1_idx` (`iq_unit_mstr_id`),
  CONSTRAINT `fk_iq_nurse_coverage_1` FOREIGN KEY (`iq_unit_mstr_id`) REFERENCES `iq_unit_mstr` (`iq_unit_mstr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE `iq_holidays_per_unit` (
  `iq_holidays_per_unit_id` varchar(50) NOT NULL,
  `iq_unit_mstr_id` varchar(50) DEFAULT NULL,
  `name_of_the_holiday` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `day` enum('SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY') DEFAULT NULL,
  `from_time` time DEFAULT NULL,
  `to_time` time DEFAULT NULL,
  `last_appt_time` time DEFAULT NULL,
  `created_by` varchar(200) DEFAULT NULL,
  `modified_by` varchar(200) DEFAULT NULL,
  `created_datetime` datetime DEFAULT NULL,
  `modified_datetime` datetime DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`iq_holidays_per_unit_id`),
  KEY `fk_iq_holidays_per_unit_1_idx` (`iq_unit_mstr_id`),
  CONSTRAINT `fk_holidays_per_unit_1` FOREIGN KEY (`iq_unit_mstr_id`) REFERENCES `iq_unit_mstr` (`iq_unit_mstr_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;