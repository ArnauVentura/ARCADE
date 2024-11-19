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
  `idJuego` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`idJuego`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`rol` (
  `idRol` INT(11) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`usuario` (
  `idUsuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `contrasenya` VARCHAR(45) NOT NULL,
  `rol_idRol` INT(11) NOT NULL,
  PRIMARY KEY (`idUsuario`, `rol_idRol`),
  INDEX `fk_usuario_rol_idx` (`rol_idRol` ASC) ,
  CONSTRAINT `fk_usuario_rol`
    FOREIGN KEY (`rol_idRol`)
    REFERENCES `anna`.`rol` (`idRol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `anna`.`ranking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anna`.`ranking` (
  `usuario_idUsuario` INT(11) NOT NULL,
  `juegos_idJuego` INT(11) NOT NULL,
  `puntuacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`usuario_idUsuario`, `juegos_idJuego`),
  CONSTRAINT `fk_usuario_has_juegos_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `anna`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_usuario_has_juegos_juegos1`
    FOREIGN KEY (`juegos_idJuegousuario`)
    REFERENCES `anna`.`juegos` (`idJuego`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
