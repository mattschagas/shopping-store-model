CREATE TABLE `produtos` (
  `id_produto` INT NOT NULL AUTO_INCREMENT,
  `produto` VARCHAR(50) NOT NULL,
  `preco` DECIMAL(10,2) NOT NULL,
  `desconto` TINYINT NULL,
  `valor_desconto` INT NULL,
  `imagem` VARCHAR(255) NOT NULL,
  `descricao` VARCHAR(255) NULL,
  `avaliacao` DECIMAL(10,2) NULL,
  `excluido` TINYINT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE INDEX `id_produto_UNIQUE` (`id_produto` ASC) VISIBLE);

CREATE TABLE `categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_categoria`),
  UNIQUE INDEX `id_categoria_UNIQUE` (`id_categoria` ASC) VISIBLE);

ALTER TABLE `produtos` 
  CHANGE COLUMN `desconto` `desconto` TINYINT NULL DEFAULT '0' ;
  CHANGE COLUMN `id_produto` `id_produto` INT UNSIGNED NOT NULL AUTO_INCREMENT ;

ALTER TABLE `categorias` 
  CHANGE COLUMN `id_categoria` `id_categoria` INT UNSIGNED NOT NULL AUTO_INCREMENT ;

ALTER TABLE `produtos` 
ADD COLUMN `id_categoria` INT UNSIGNED NULL AFTER `excluido`,
ADD UNIQUE INDEX `categoria_UNIQUE` (`id_categoria` ASC) VISIBLE;

ALTER TABLE `produtos` 
ADD CONSTRAINT `id_categoria_produtos`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `categorias` (`id_categoria`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
