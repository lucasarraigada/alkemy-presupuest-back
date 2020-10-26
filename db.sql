/*CREACION DE ESQUEMA */
CREATE SCHEMA `alkemy_presupuest` ;

/*CREACION TABLA OPERATIONS */
CREATE TABLE `alkemy_presupuest`.`operations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `concept` VARCHAR(45) NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `date` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
  `operationType` INT NOT NULL,
  PRIMARY KEY (`id`));

/* SE INSERTAN VALORES A TABLA OPERACIONES*/
INSERT INTO operations values
(1, "Sueldo Enero", 50000, '2020-10-25',1),
(2, "Sueldo Febrero", 60000, '2020-10-25',1),
(3, "Sueldo Marzo", 70000, '2020-10-25',1),
(4, "Sueldo Abril", 80000, '2020-10-25',1),
(5, "Sueldo Mayo", 90000, '2020-10-25',1),
(6, "Gas", 500, '2020-10-25',2),
(7, "Alquiler", 30000, '2020-10-25',2),
(8, "Agua", 600, '2020-10-25',2),
(9, "Expensas", 5000, '2020-10-25',2),
(10, "Luz", 4500, '2020-10-25',2),
(11, "Telefono", 1000, '2020-10-25',2);

/*SE CREA TABLA TIPO DE OPERACIONES */

  CREATE TABLE `alkemy_presupuest`.`operationtype` (
  `id` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

/*SE INSERTAN VALORES A TABLA OPERATIONSTYPE*/
INSERT INTO operationType values
(1, "Incomes"),
(2, "Expenses");

