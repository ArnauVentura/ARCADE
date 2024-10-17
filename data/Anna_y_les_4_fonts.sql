CREATE SCHEMA IF NOT EXISTS ANNA;
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema anna
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema anna
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `anna` DEFAULT CHARACTER SET utf8mb4 ;
USE `anna` ;

-- -----------------------------------------------------
-- Table `anna`.`juegos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`juegos` (
  `idJUEGO` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idJUEGO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`rol` (
  `idROL` INT(11) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idROL`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`usuario` (
  `idUSUARIO` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `contrasenya` VARCHAR(45) NOT NULL,
  `rol_idROL` INT(11) NOT NULL,
  PRIMARY KEY (`idUSUARIO`, `rol_idROL`),
  INDEX `fk_usuario_rol_idx` (`rol_idROL` ASC) ,
  CONSTRAINT `fk_usuario_rol`
    FOREIGN KEY (`rol_idROL`)
    REFERENCES `anna`.`rol` (`idROL`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`ranking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`ranking` (
  `usuario_idUSUARIO` INT(11) NOT NULL,
  `juegos_idJUEGO` INT(11) NOT NULL,
  `puntuacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`usuario_idUSUARIO`, `juegos_idJUEGO`),
  CONSTRAINT `fk_usuario_has_juegos_usuario1`
    FOREIGN KEY (`usuario_idUSUARIO`)
    REFERENCES `anna`.`usuario` (`idUSUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_usuario_has_juegos_juegos1`
    FOREIGN KEY (`juegos_idJUEGO`)
    REFERENCES `anna`.`juegos` (`idJUEGO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
