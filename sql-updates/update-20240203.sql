ALTER TABLE `categorias` 
ADD COLUMN `imagem` VARCHAR(255) NULL AFTER `categoria`,
ADD COLUMN `desconto` TINYINT(1) NULL AFTER `imagem`,
ADD COLUMN `valor_desconto` INT NULL AFTER `desconto`;
ADD COLUMN `ativo` TINYINT NULL DEFAULT 1 AFTER `valor_desconto`;

ALTER TABLE `categorias` 
DROP INDEX `id_categoria_UNIQUE` ;

ALTER TABLE `produtos` 
DROP FOREIGN KEY `id_categoria_produtos`;
ALTER TABLE `produtos` 
CHANGE COLUMN `id_categoria` `id_categoria` INT UNSIGNED NOT NULL ,
DROP INDEX `categoria_UNIQUE` ;

ALTER TABLE `produtos` 
ADD CONSTRAINT `id_categoria_produtos`
  FOREIGN KEY (`id_categoria`)
  REFERENCES `categorias` (`id_categoria`);


