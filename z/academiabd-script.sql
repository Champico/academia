-- Mysql workbench 8.0.34 --
-- SCRIPT PARA LA CREACION DE BASE DE DATOS DE ACADEMIA APP --

-- /////////////////////[ C R E A C I O N  D E  L A  B A S E  D E D A T O S ]/////////////////////
DROP DATABASE IF EXISTS AcademiaBD;
CREATE DATABASE AcademiaBD;
USE AcademiaBD;




-- //////////////////////////// [ C R E A C I O N  D E  T A B L A S ] //////////////////////////

-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / D A T O S  G E N E R A L E S  D E  R E G I O N E S  Y F A C U L T A D E S / / / /

-- Region --
DROP TABLE IF EXISTS region;
CREATE TABLE region(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    direccion VARCHAR(255),
    colonia VARCHAR(255),
    codigo_postal VARCHAR(5),
    num_telefono VARCHAR(15),
    nombre_rector VARCHAR(255),
    es_vicerrectoria BOOLEAN,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Area academica --
DROP TABLE IF EXISTS area_academica;
CREATE TABLE area_academica(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Facultad --
DROP TABLE IF EXISTS facultad;
CREATE TABLE facultad(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigo VARCHAR(15) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    colonia VARCHAR(255),
     codigo_postal VARCHAR(5),
    num_telefono VARCHAR(15),
    nombre_director VARCHAR(255),
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    id_region INT,
    id_area INT,
    
    FOREIGN KEY (id_region) REFERENCES region(id),
    FOREIGN KEY (id_area) REFERENCES area_academica(id)
);

-- nivel educativo --
DROP TABLE IF EXISTS nivel_educativo;
CREATE TABLE nivel_educativo(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- /////////////////////////////////////////////////////////////////////////////////////////////








-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / / / / / / / C R E A R  A C A D E M I A  / / / / / / / / / / / / / / / /
DROP TABLE IF EXISTS academia;
CREATE TABLE academia(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    id_facultad INT,

    FOREIGN KEY (id_facultad) REFERENCES facultad(id)
);

DROP TABLE IF EXISTS coordinador_historial;
CREATE TABLE coordinador_historial(
	  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
      nombre VARCHAR(255),
	  fecha_inicio DATETIME,
	  fecha_termino DATETIME
);
-- /////////////////////////////////////////////////////////////////////////////////////////////







-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / / / / / / / D A T O S  D E  U S U A R I O  / / / / / / / / / / / / / / /

-- Usuario --
DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) UNIQUE NOT NULL,
    clave VARCHAR(255) NOT NULL,
    nombre VARCHAR(100),
    paterno VARCHAR(100),
    materno VARCHAR(100),
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foto_perfil_ref VARCHAR(255),
    rol ENUM('docente', 'coordinador') NOT NULL,
    
	id_facultad INT,
    
    FOREIGN KEY (id_facultad) REFERENCES facultad(id)
);

-- Coordinador --
DROP TABLE IF EXISTS coordinador;
CREATE TABLE coordinador(
    id_usuario INT,
    id_academia INT,

    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_academia) REFERENCES academia(id),
    
    PRIMARY KEY (id_usuario, id_academia)
);

-- Administrador --
DROP TABLE IF EXISTS administrador;
CREATE TABLE administrador(
	id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) UNIQUE NOT NULL,
    clave VARCHAR(255) NOT NULL,
    nombre VARCHAR(100),
    paterno VARCHAR(100),
    materno VARCHAR(100),
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    id_facultad INT,

    FOREIGN KEY (id_facultad) REFERENCES facultad(id)
);

-- /////////////////////////////////////////////////////////////////////////////////////////////







-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / / /  D A T O S  D E  M A T E R I A S  / / / / / / / / / / / / / /

-- Programa educativo --
DROP TABLE IF EXISTS programa_educativo;
CREATE TABLE programa_educativo(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigo VARCHAR(15) UNIQUE NOT NULL,
    nombre VARCHAR(80) NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    id_facultad INT,
    id_nivel INT,
    
    FOREIGN KEY (id_nivel) REFERENCES nivel_educativo(id)
);

-- Experiencia educativa --
DROP TABLE IF EXISTS experiencia_educativa;
CREATE TABLE experiencia_educativa(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    codigo VARCHAR(15) UNIQUE NOT NULL,
    nombre VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    id_programa INT,
    id_academia INT,

    FOREIGN KEY (id_programa) REFERENCES programa_educativo(id),
    FOREIGN KEY (id_academia) REFERENCES academia(id)
);

-- /////////////////////////////////////////////////////////////////////////////////////////////







-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / /  / L O G I C A   D E   A C A D E M I A S   / / / / / / / / / / / / / /

-- Periodo --
DROP TABLE IF EXISTS periodo;
CREATE TABLE periodo(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_inicio DATETIME,
    fecha_termino DATETIME
);

-- Academia Periodo --
DROP TABLE IF EXISTS academia_periodo;
CREATE TABLE academia_periodo(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    
    id_academia INT,
    id_periodo INT,
    
    FOREIGN KEY (id_academia) REFERENCES academia(id),
    FOREIGN KEY (id_periodo) REFERENCES periodo(id)
);

-- Integra --
DROP TABLE IF EXISTS miembro;
CREATE TABLE miembro(
	id_usuario INT,
    id_academia_periodo INT,
    
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_academia_periodo) REFERENCES academia_periodo(id),

    PRIMARY KEY (id_usuario, id_academia_periodo)
);

-- Canal --
DROP TABLE IF EXISTS canal;
CREATE TABLE canal(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
    usuarios_permitidos ENUM('all', 'custom'),
    permisos ENUM('all','solo lectura'),
    
    id_academia_periodo INT NOT NULL,

    FOREIGN KEY(id_academia_periodo) REFERENCES academia_periodo(id)
);

DROP TABLE IF EXISTS miembro_canal;
CREATE TABLE miembro_canal(
	id_canal INT,
    id_usuario INT,
    
    FOREIGN KEY (id_canal) REFERENCES canal(id),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Canal y mensaje --
DROP TABLE IF EXISTS mensaje_canal;
CREATE TABLE mensaje_canal(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   id_canal INT,
   id_usuario INT,
   fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   mensaje TEXT,

   FOREIGN KEY (id_usuario) REFERENCES usuario(id),
   FOREIGN KEY (id_canal) REFERENCES canal(id)
);

CREATE TABLE media_canal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_mensaje_canal INT NOT NULL,
    media_ref VARCHAR(255) ,
    FOREIGN KEY (id_mensaje_canal) REFERENCES mensaje_canal(id)
);

-- /////////////////////////////////////////////////////////////////////////////////////////////






-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / / / / / / / / / G L O B A L E S / / / / / / / / / / / / / / / / / / / /

-- Evento --
DROP TABLE IF EXISTS evento;
CREATE TABLE evento(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
   	fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_inicio DATETIME,
    fecha_termino DATETIME,
    ubicacion VARCHAR(255)
);

DROP TABLE IF EXISTS destinatario_evento;
CREATE TABLE destinatario_evento(
   id_evento INT,
   id_usuario INT,
   
   FOREIGN KEY (id_evento) REFERENCES evento(id),
   FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Crear la tabla de chat
DROP TABLE IF EXISTS chat;
CREATE TABLE chat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de integrantes de chat
DROP TABLE IF EXISTS integrante_chat;
CREATE TABLE integrante_chat (
    id_usuario INT NOT NULL,
    id_chat INT NOT NULL,
    fecha_union TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (id_usuario, id_chat),
    FOREIGN KEY (id_chat) REFERENCES chat(id),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Crear la tabla de mensajes en el chat
DROP TABLE IF EXISTS mensaje_chat;
CREATE TABLE mensaje_chat (
    id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    mensaje TEXT NOT NULL, 
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_chat, id_usuario, fecha_envio),
    FOREIGN KEY (id_chat) REFERENCES chat(id),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Crear la tabla de mensajes en el chat
DROP TABLE IF EXISTS mensaje_chat;
CREATE TABLE mensaje_chat (
    id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    mensaje TEXT NOT NULL, 
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_chat, id_usuario, fecha_envio),
    FOREIGN KEY (id_chat) REFERENCES chat(id),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

-- Crear la tabla de archivos multimedia
DROP TABLE IF EXISTS media_chat;
CREATE TABLE media_chat (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada archivo
    id_chat INT NOT NULL,
    id_usuario INT NOT NULL,
    fecha_envio TIMESTAMP NOT NULL,
    media_ref VARCHAR(255),
    FOREIGN KEY (id_chat, id_usuario, fecha_envio) REFERENCES mensaje_chat(id_chat, id_usuario, fecha_envio)
);
-- /////////////////////////////////////////////////////////////////////////////////////////////














-- /////////////////////////////////////////////////////////////////////////////////////////////
--   / / / / / / / / / / / / / / / / / V I S T A S / / / / / / / / / / / / / / / / / / / /

CREATE OR REPLACE VIEW vista_academia_periodo AS
SELECT 
    ap.id AS id_academia_periodo,
    a.id AS id_academia,
    a.nombre AS nombre_academia,
    u_coordinador.correo AS correo_coordinador,
    CONCAT(u_coordinador.nombre, ' ', u_coordinador.paterno, ' ', u_coordinador.materno) AS nombre_coordinador,
    p.nombre AS nombre_periodo
FROM 
    academia_periodo ap
INNER JOIN academia a ON ap.id_academia = a.id
INNER JOIN coordinador c ON a.id = c.id_academia
INNER JOIN usuario u_coordinador ON c.id_usuario = u_coordinador.id
INNER JOIN periodo p ON ap.id_periodo = p.id;




