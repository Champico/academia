-- Usar la base de datos--
Use academiabd;

-- Ver las tablas existente --
SHOW TABLES FROM academiabd;

-- Ver todos los datos de una tabla --
SELECT * FROM academia;
SELECT * FROM academia_periodo;
SELECT * FROM administrador;
SELECT * FROM area_academica;
SELECT * FROM canal;
SELECT * FROM chat;
SELECT * FROM coordinador;
SELECT * FROM coordinador_historial;
SELECT * FROM destinatario_evento;
SELECT * FROM evento;
SELECT * FROM experiencia_educativa;
SELECT * FROM facultad;
SELECT * FROM integrante_chat;
SELECT * FROM media_canal;
SELECT * FROM media_chat;
SELECT * FROM mensaje_canal;
SELECT * FROM mensaje_chat;
SELECT * FROM nivel_educativo;
SELECT * FROM miembro;
SELECT * FROM miembro_canal;
SELECT * FROM nivel_educativo;
SELECT * FROM periodo;
SELECT * FROM programa_educativo;
SELECT * FROM region;
SELECT * FROM usuario;
SELECT * FROM usuario;
SELECT * FROM usuario_multimedia;
SELECT * FROM usuario_roles;

-- Ver todos los datos de una vista --
SELECT * FROM vista_academia_periodo;





-- Consultas --
SELECT id AS idF FROM facultad WHERE codigo='FEIX-GE-M-01';
SELECT correo, nombre, paterno, materno, rol, id_facultad FROM usuario WHERE correo='lalonso@uv.mx';
INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol) VALUES ('lalonso@uv.mx', 'defaultpass', 'Alonso', 'Ramirez', 'Lorena', 'Docente');
DELETE FROM usuario WHERE correo='lalonso@uv.mx';
SELECT correo, nombre FROM usuario WHERE correo = 'champico@uv.mx';
SELECT * FROM academia_periodo;
SELECT 
    vap.id_academia_periodo,
    vap.nombre_academia,
    vap.nombre_coordinador,
    vap.nombre_periodo
FROM 
    vista_academia_periodo vap
INNER JOIN miembro m ON vap.id_academia_periodo = m.id_academia_periodo
INNER JOIN usuario u ON m.id_usuario = u.id
WHERE 
    u.correo = 'champico@uv.mx';

    SELECT 
                    vap.id_academia_periodo AS id,
                    vap.nombre_academia AS academia,
                    vap.nombre_periodo AS periodo,
                    vap.nombre_coordinador AS coordinador
                FROM 
                    vista_academia_periodo AS vap
                INNER JOIN coordinador AS c ON vap.id_academia = c.id_academia
                INNER JOIN usuario AS u ON c.id_usuario = u.id
                WHERE 
                    u.correo = 'felipeJLL@uv.mx';

SELECT correo,
    clave,
    nombre,
    paterno,
    materno,
    rol,
    id_facultad
FROM usuario
WHERE correo ='champico@uv.mx';
	
    
    

SELECT 
    a.id,
    a.nombre as academia,
    a.codigo,
    CONCAT(u.nombre,' ',u.paterno,' ',u.materno) as coordinador
FROM 
    academia a
INNER JOIN coordinador c ON a.id = c.id_academia
INNER JOIN usuario u ON c.id_usuario = u.id
WHERE 
    u.correo = 'felipeJLL@uv.mx';

SELECT 
    vap.id_academia_periodo AS id,
    vap.nombre_academia AS academia,
    vap.nombre_periodo AS periodo,
    vap.nombre_coordinador AS coordinador
FROM 
    vista_academia_periodo AS vap
INNER JOIN miembro AS m ON vap.id_academia_periodo = m.id_academia_periodo
INNER JOIN usuario AS u ON m.id_usuario = u.id
WHERE 
    u.correo = 'felipeJLL@uv.mx';                    



SELECT 
    a.nombre AS nombre_academia
FROM 
    academia a
INNER JOIN coordinador c ON a.id = c.id_academia
INNER JOIN usuario u ON c.id_usuario = u.id
WHERE 
u.correo = 'felipeJLL@uv.mx';



SELECT 
    id_academia AS id,
    nombre_academia AS academia,
    nombre_periodo AS periodo,
    nombre_coordinador AS coordinador
FROM 
    vista_academia_periodo
WHERE 
    correo_coordinador = 'felipeJLL@uv.mx';



SELECT 
    a.nombre,
    a.codigo,
    a.id
FROM 
    academia a
INNER JOIN coordinador c ON a.id = c.id_academia
INNER JOIN usuario u ON c.id_usuario = u.id
WHERE 
    u.correo = 'felipeJLL@uv.mx';


    