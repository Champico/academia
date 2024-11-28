-- /////////////////// C A P T U R A  D E  D A T O S   P O R  D E F E C T O ////////////////// --
-- I N F O R M A C I O N  C A P T U R A D A  E L  1 8  D E  N O V I E M B R E  D E  2 0 2 4 --

-- /   /   /   /   /   /   /   /   I  N  D  I  C  E   /   /   /   /   /   /   /   /

-- 1. INSERTAR DATOS GENERALES: REGIONES, AREAS ACADEMICAS Y NIVELES EDUCATIVOS
-- 2. INSERTAR FACULTADES DE LA UNIVERSIDAD VERACRUZANA
-- 3. INSERTAR USUARIOS DE LA FACULTAD DE ESTADISTICA E INFORMATICA
-- 4. INSERTAR USUARIOS
-- 5. INSERTAR ACADEMIAS Y COORDINADORES
-- 6. INSERTAR PERIODOS Y CANALES
-- 7- INSERTAR OTROS DATOS

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / / / / / / / / / D A T O S  G E N E R A L E S  / / / / / / / / / / / / / / / / /--

-- I N F O R M A C I O N  D E  R E G I O N E S --
INSERT INTO region(id, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_rector, es_vicerrectoria)
VALUES (1, 'Xalapa', 'Lomas del Estadio S/N Edificio A Piso 3', 'Col. Zona Universitaria', 91090, '(228) 842-17-00' ,'Dr. Martín Aguilar Sanchez', false),
       (2, 'Veracruz', 'Av. S.S. Juan Pablo II. Esq. Reyes Heroles S/N', 'Col. Fracc. Costa Verde', 94294 ,'(229) 775-20-00','Dr. Rubén Edel Navarro', true),
       (3, 'Orizaba-Córdoba', 'Poniente 7 1383', 'Col. Centro', 94300 ,'(272) 726-30-66','Dr. Mario Roberto Bernabé Guapillo Vargas', true),
       (4, 'Poza Rica-Tuxpan', 'Blvrd. Ruiz Cortines entre Justo Sierra y Cedro 306', 'Col. Obras Sociales', 3240,'(782) 824-15-40','Dra. Liliana Cuervo López', true),
       (5, 'Coatzacoalcos-Minatitlán', 'Chihuahua esq. México 803', 'Col. Petrolera', 96500 ,'(921) 211-57-00','Dra. Georgina Hernández Ríos', true);
INSERT INTO region(id, nombre) VALUES (6, 'Sin region');
UPDATE region SET id = 0 WHERE id = 6;
-- Informacion de campus sacada de: https://www.uv.mx/comunicate/ --

-- I N F O R M A C I O N  D E  A R E A  A C A D E M I C A --
INSERT INTO area_academica(id, nombre)
VALUES (1, 'Artes'),
       (2, 'Ciencias Biológicas y Agropecuarias'),
       (3, 'Ciencias de la Salud'),
       (4, 'Económico-Administrativa'),
       (5, 'Humanidades'),
       (6, 'Técnica'),
       (0, 'Sin Área Académica');
UPDATE area_academica SET id = 0 WHERE id = 7;
-- Informacion de camus sacada de: https://www.uv.mx/orgmet/general/ent-acad-por-area/ - -

-- I N F O R M A C I O N  D E  N I V E L  E D U C A T I V O --
INSERT INTO nivel_educativo(id, nombre)
VALUES (1, 'Licenciatura'),
       (2, 'Tecnico'),
       (3, 'Tenico superior universitario'),
       (4, 'Maestria'),
       (5, 'Doctorado'),
       (0, 'Sin nivel academico');
UPDATE nivel_educativo SET id = 0 WHERE id = 6;
-- Informacion de nivel academico sacad de: https://www.uv.mx/oferta-educativa/#:~:text=Nuestra%20oferta%20est%C3%A1%20organizada%20en,%2DAdministrativa%2C%20Humanidades%20y%20T%C3%A9cnica.

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --




-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / / / / I N F O R M A C I O N  D E  F A C U L T A D E S / / / / / / / / / / / /--

-- F A C U L T A D E S  D E  X A L A P A --
INSERT INTO facultad(codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director, id_region, id_area) VALUES 
('FAPX-GE-M-01', 'Facultad de Artes Plásticas', 'Calle Imaginaria 123', 'Centro', 91000, '123456789', 'Juan Pérez', 1, 1),
('FDAX-GE-M-01', 'Facultad de Danza', 'Avenida de los Movimientos 456', 'Centro', 91000, '987654321', 'María López', 1, 1),
('FMUX-GE-M-01', 'Facultad de Música', 'Boulevard de las Notas 789', 'Centro', 91000, '456789123', 'Pedro García', 1, 1),
('FTX-GE-M-01', 'Facultad de Teatro', 'Plaza de los Actores 321', 'Centro', 91000, '321654987', 'Ana Martínez', 1, 1),
('FBX-GE-M-01', 'Facultad de Biología', 'Calle de las Células 555', 'Colonia Crecimiento', 91050, '789123456', 'Luis Rodríguez', 1, 2),
('FCAX-GE-M-01', 'Facultad de Ciencias Agrícolas', 'Avenida de los Cultivos 777', 'Colonia Agricultura', 91100, '654987321', 'Elena Gómez', 1, 2),
('FBAX-GE-M-01', 'Facultad de Bioanálisis', 'Calle de las Pruebas 888', 'Colonia Análisis', 91200, '789654123', 'Daniel Sánchez', 1, 3),
('FEX-GE-M-01', 'Facultad de Enfermería', 'Avenida de los Cuidados 111', 'Colonia Enfermedad', 91020, '456321789', 'Sofía Hernández', 1, 3),
('FMX-GE-M-01', 'Facultad de Medicina', 'Boulevard de la Salud 222', 'Colonia Salud', 91030, '159357246', 'Jorge Pérez', 1, 3),
('FNX-GE-M-01', 'Facultad de Nutrición', 'Calle de los Nutrientes 333', 'Colonia Nutrición', 91040, '753951852', 'Laura Martínez', 1, 3),
('FOX-GE-M-01', 'Facultad de Odontología', 'Avenida de los Dientes 444', 'Colonia Odontológica', 91010, '852963741', 'Carlos Gutiérrez', 1, 3),
('FPSX-GE-M-01', 'Facultad de Psicología', 'Boulevard de las Mentiras 555', 'Colonia Psicología', 91060, '369258147', 'Marcela González', 1, 3),
('FCX-GE-M-01', 'Facultad de Contaduría y Administración', 'Calle de las Finanzas 666', 'Colonia Administrativa', 91120, '147258369', 'Roberto Soto', 1, 4),
('FECX-GE-M-01', 'Facultad de Economía', 'Avenida de los Economistas 777', 'Colonia Económica', 91130, '258369147', 'Patricia López', 1, 4),
('FEIX-GE-M-01', 'Facultad de Estadística e Informática', 'Boulevard de los Números 888', 'Colonia Informática', 91140, '369147258', 'Alberto Rodríguez', 1, 4),
('FASX-GE-M-01', 'Facultad de Ciencias Administrativas y Sociales', 'Calle de las Sociales 999', 'Colonia Social', 91150, '963852741', 'Ana Gómez', 1, 4),
('FDX-GE-M-01', 'Facultad de Derecho', 'Avenida de las Leyes 1010', 'Colonia Legal', 91080, '852741963', 'David Pérez', 1, 5),
('FSX-GE-M-01', 'Facultad de Sociología', 'Boulevard de las Sociedades 1111', 'Colonia Sociológica', 91090, '741852963', 'Rosa Martínez', 1, 5),
('FAX-GE-M-01', 'Facultad de Antropología', 'Calle de las Culturas 1212', 'Colonia Antropológica', 91100, '963741852', 'Miguel Rodríguez', 1, 5),
('FFX-GE-M-01', 'Facultad de Filosofía', 'Avenida de las Ideas 1313', 'Colonia Filosófica', 91110, '852963741', 'Eva Sánchez', 1, 5),
('FHX-GE-M-01', 'Facultad de Historia', 'Boulevard de las Épocas 1414', 'Colonia Histórica', 91120, '741963852', 'Fernando Gutiérrez', 1, 5),
('FIDX-GE-M-01', 'Facultad de Idiomas', 'Calle de los Idiomas 1515', 'Colonia Lingüística', 91130, '963852741', 'Carolina Martín', 1, 5),
('FLEX-GE-M-01', 'Facultad de Letras Españolas', 'Avenida de las Letras 1616', 'Colonia Literaria', 91140, '852741963', 'Javier Pérez', 1, 5),
('FPX-GE-M-01', 'Facultad de Pedagogía', 'Boulevard de los Métodos 1717', 'Colonia Pedagógica', 91150, '741852963', 'Lorena López', 1, 5),
('FARX-GE-M-01', 'Facultad de Arquitectura', 'Calle de los Planos 1818', 'Colonia Arquitectónica', 91160, '852963741', 'Carlos Martínez', 1, 6),
('FFIX-GE-M-01', 'Facultad de Física', 'Avenida de las Fórmulas 1919', 'Colonia Física', 91170, '963741852', 'Sandra Lopez',1,6),
('FMAX-GE-M-01', 'Facultad de Matemáticas', 'Calle de los Números 2020', 'Colonia Matemática', 91180, '123456789', 'Alejandro González', 1, 6),
('FICX-GE-M-01', 'Facultad de Ingeniería Civil', 'Avenida de las Estructuras 2121', 'Colonia Civil', 91190, '987654321', 'María Martínez', 1, 6),
('FQFX-GE-M-01', 'Facultad de Química Farmacéutica Biológica', 'Boulevard de las Moléculas 2222', 'Colonia Química', 91200, '456789123', 'Pedro Rodríguez', 1, 6),
('FCQX-GE-M-01', 'Facultad de Ciencias Químicas', 'Calle de los Compuestos 2323', 'Colonia Química', 91210, '321654987', 'Ana Gutiérrez', 1, 6),
('FIX-GE-M-01', 'Facultad de Ingeniería Mecánica y Eléctrica', 'Avenida de los Circuitos 2424', 'Colonia Ingeniería', 91220, '159357246', 'Jorge Martínez', 1, 6),
('FIEX-GE-M-01', 'Facultad de Instrumentación Electrónica', 'Boulevard de los Instrumentos 2525', 'Colonia Electrónica', 91230, '753951852', 'Laura Gómez', 1, 6),
('CSRS-GE-M-01', 'Clínica Universitaria de Salud Reproductiva y Sexual', 'Calle de la Salud 2626', 'Colonia Salud', 91240, '852963741', 'Carlos Pérez', 1, 0),
('CIAX-GE-M-01', 'Centros de Idiomas y de Autoacceso', 'Avenida de los Idiomas 2727', 'Colonia Idiomas', 91250, '369258147', 'María López', 1, 0);

-- F A C U L T A D E S  D E  V E R A C R U Z - -
INSERT INTO facultad (codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director, id_region, id_area) VALUES 
('FMVV-GE-M-01', 'Facultad de Medicina Veterinaria y Zootecnia', 'Calle de los Animales 3030', 'Colonia Veterinaria', 92000, '123456789', 'Alejandro González', 2, 2),
('FEFV-GE-M-01', 'Facultad de Educación Física, Deporte y Recreación', 'Avenida de los Deportes 3131', 'Colonia Deportiva', 92010, '987654321', 'María Martínez', 2, 3),
('FBV-GE-M-01', 'Facultad de Bioanálisis', 'Boulevard de los Análisis 3232', 'Colonia Bioanalítica', 92020, '456789123', 'Pedro Rodríguez', 2, 3),
('FEV-GE-M-01', 'Facultad de Enfermería', 'Calle de los Cuidados 3333', 'Colonia Cuidados', 92030, '321654987', 'Ana Gutiérrez', 2, 3),
('FMV-GE-M-01', 'Facultad de Medicina', 'Avenida de la Salud 3434', 'Colonia Salud', 92040, '159357246', 'Jorge Martínez', 2, 3),
('FNV-GE-M-01', 'Facultad de Nutrición', 'Boulevard de la Nutrición 3535', 'Colonia Nutrición', 92050, '753951852', 'Laura Gómez', 2, 3),
('FOV-GE-M-01', 'Facultad de Odontología', 'Calle de los Dientes 3636', 'Colonia Odontológica', 92060, '852963741', 'Carlos Pérez', 2, 3),
('FPV-GE-M-01', 'Facultad de Psicología', 'Avenida de las Mentiras 3737', 'Colonia Psicológica', 92070, '369258147', 'María López', 2, 3),
('FAV-GE-M-01', 'Facultad de Administración', 'Boulevard de la Administración 3838', 'Colonia Administrativa', 92080, '852741963', 'David Pérez', 2, 4),
('FCV-GE-M-01', 'Facultad de Contaduría', 'Calle de las Finanzas 3939', 'Colonia Financiera', 92090, '963741852', 'Miguel Rodríguez', 2, 4),
('FTCV-GE-M-01', 'Facultad de Ciencias y Técnicas de la Comunicación', 'Avenida de la Comunicación 4040', 'Colonia Comunicativa', 92100, '741852963', 'Eva Sánchez', 2, 5),
('FPEV-GE-M-01', 'Facultad de Pedagogía', 'Boulevard de la Pedagogía 4141', 'Colonia Pedagógica', 92110, '852963741', 'Fernando Gutiérrez', 2, 5),
('FIV-GE-M-01', 'Facultad de Ciencias Químicas', 'Calle de los Compuestos 4242', 'Colonia Química', 92120, '741963852', 'Carolina Martín', 2, 6),
('FIV-GE-M-02', 'Facultad de Ingeniería de la Construcción y el Hábitat', 'Avenida de la Construcción 4343', 'Colonia Ingeniería', 92130, '963852741', 'Javier Pérez', 2, 6),
('FIV-GE-M-03', 'Facultad de Ingeniería Eléctrica y Electrónica', 'Boulevard de la Electricidad 4444', 'Colonia Eléctrica', 92140, '852741963', 'Lorena López', 2, 6),
('FIV-GE-M-04', 'Facultad de Ingeniería Mecánica y Ciencias Navales', 'Calle de los Mecanismos 4545', 'Colonia Mecánica', 92150, '741852963', 'Carlos Martínez', 2, 6),
('CIAV-GE-M-01', 'Centros de Idiomas y de Autoacceso', 'Avenida de los Idiomas 4646', 'Colonia Idiomas', 92160, '852963741', 'María Rodríguez', 2, 0),
('TLAV-GE-M-01', 'Taller Libre de Artes de Veracruz', 'Boulevard de las Artes 4747', 'Colonia Artística', 92170, '963741852', 'Luis Gómez', 2, 0),
('DB-GE-M-03', 'Unidad de Servicios Bibliotecarios y de Información USBI', 'Calle de las Letras 4848', 'Colonia Biblioteca', 92180, '741852963', 'Ana Pérez', 2, 0);

-- F A C U L T A D E S  D E  O R I Z A B A - - 
INSERT INTO facultad (codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director, id_region, id_area) VALUES 
('FBAO-GE-M-01', 'Facultad de Ciencias Biológicas y Agropecuarias', 'Calle de las Ciencias 7070', 'Colonia Biológica', 92600, '123456789', 'Alejandro González', 3, 2),
('FEO-GE-M-01', 'Facultad de Enfermería', 'Avenida de los Cuidados 7171', 'Colonia Enfermería', 92610, '987654321', 'María Martínez', 3, 3),
('FMO-GE-M-01', 'Facultad de Medicina', 'Boulevard de la Salud 7272', 'Colonia Médica', 92620, '456789123', 'Pedro Rodríguez', 3, 3),
('FOO-GE-M-01', 'Facultad de Odontología', 'Calle de los Dientes 7373', 'Colonia Odontológica', 92630, '321654987', 'Ana Gutiérrez', 3, 3),
('FCO-GE-M-01', 'Facultad de Contaduría', 'Boulevard de las Finanzas 7474', 'Colonia Financiera', 92640, '159357246', 'Jorge Martínez', 3, 4),
('FAO-GE-M-01', 'Facultad de Arquitectura', 'Avenida de la Arquitectura 7575', 'Colonia Arquitectónica', 92650, '753951852', 'Laura Gómez', 3, 6),
('FCQO-GE-M-01', 'Facultad de Ciencias Químicas', 'Calle de las Moléculas 7676', 'Colonia Química', 92660, '852963741', 'Carlos Pérez', 3, 6),
('FIO-GE-M-01', 'Facultad de Ingeniería', 'Boulevard de las Ingenierías 7777', 'Colonia Ingeniería', 92670, '369258147', 'María López', 3, 6),
('DB-GE-M-04', 'Unidad de Servicios Bibliotecarios y de Información USBI', 'Avenida de las Letras 7878', 'Colonia Biblioteca', 92680, '852741963', 'David Pérez', 3, 0);

-- F A C U L T A D E S  D E  P O Z A  R I C A - -
INSERT INTO facultad (codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director, id_region, id_area) VALUES 
('FBAP-GE-M-01', 'Facultad de Ciencias Biológicas y Agropecuarias', 'Calle de las Ciencias 5050', 'Colonia Biológica', 92400, '123456789', 'Alejandro González', 4, 2),
('FEP-GE-M-01', 'Facultad de Enfermería', 'Avenida de los Cuidados 5151', 'Colonia Enfermería', 92410, '987654321', 'María Martínez', 4, 3),
('FMP-GE-M-01', 'Facultad de Medicina', 'Boulevard de la Salud 5252', 'Colonia Médica', 92420, '456789123', 'Pedro Rodríguez', 4, 3),
('FOP-GE-M-01', 'Facultad de Odontología', 'Calle de los Dientes 5353', 'Colonia Odontológica', 92430, '321654987', 'Ana Gutiérrez', 4, 3),
('FPSP-GE-M-01', 'Facultad de Psicología', 'Avenida de las Mentiras 5454', 'Colonia Psicológica', 92440, '159357246', 'Jorge Martínez', 4, 3),
('FCP-GE-M-01', 'Facultad de Contaduría', 'Boulevard de las Finanzas 5555', 'Colonia Financiera', 92450, '753951852', 'Laura Gómez', 4, 4),
('FPP-GE-M-01', 'Facultad de Pedagogía', 'Calle de los Maestros 5656', 'Colonia Pedagógica', 92460, '852963741', 'Carlos Pérez', 4, 5),
('FTSP-GE-M-01', 'Facultad de Trabajo Social', 'Avenida de las Asistencias 5757', 'Colonia Social', 92470, '369258147', 'María López', 4, 5),
('FAP-GE-M-01', 'Facultad de Arquitectura', 'Boulevard de la Arquitectura 5858', 'Colonia Arquitectónica', 92480, '852741963', 'David Pérez', 4, 6),
('FCQP-GE-M-01', 'Facultad de Ciencias Químicas', 'Calle de las Moléculas 5959', 'Colonia Química', 92490, '963741852', 'Miguel Rodríguez', 4, 6),
('FICP-GE-M-01', 'Facultad de Ingeniería Civil', 'Avenida de los Puentes 6060', 'Colonia Civil', 92500, '741852963', 'Eva Sánchez', 4, 6),
('FIMP-GE-M-01', 'Facultad de Ingeniería Mecánica y Eléctrica', 'Boulevard de las Máquinas 6161', 'Colonia Ingeniería', 92510, '852963741', 'Fernando Gutiérrez', 4, 6),
('FIEP-GE-M-01', 'Facultad de Ingeniería en Electrónica y Comunicaciones', 'Calle de las Comunicaciones 6262', 'Colonia Electrónica', 92520, '741852963', 'Carolina Martín', 4, 6),
('DB-GE-M-05', 'Unidad de Servicios Bibliotecarios y de Información USBI', 'Avenida de las Letras 6363', 'Colonia Biblioteca', 92530, '963852741', 'Ana Pérez', 4, 0);

-- F A C U L T A D E S  D E  C O A T Z A C O A L C O S - -
INSERT INTO facultad (codigo, nombre, direccion, colonia, codigo_postal, num_telefono, nombre_director, id_region, id_area) VALUES 
('FBAC-GE-M-01', 'Facultad de Ingeniería en Sistemas de Producción Agropecuaria', 'Calle de los Ingenieros 9090', 'Colonia Agropecuaria', 92800, '123456789', 'Alejandro González', 5, 2),
('FEC-GE-M-01', 'Facultad de Enfermería', 'Avenida de los Cuidados 9191', 'Colonia Enfermería', 92810, '987654321', 'María Martínez', 5, 3),
('FMC-GE-M-01', 'Facultad de Medicina', 'Boulevard de la Salud 9292', 'Colonia Médica', 92820, '456789123', 'Pedro Rodríguez', 5, 3),
('FOC-GE-M-01', 'Facultad de Odontología', 'Calle de los Dientes 9393', 'Colonia Odontológica', 92830, '321654987', 'Ana Gutiérrez', 5, 3),
('FCAC-GE-M-01', 'Facultad de Contaduría y Administración', 'Boulevard de las Finanzas 9494', 'Colonia Administrativa', 92840, '159357246', 'Jorge Martínez', 5, 4),
('FTSC-GE-M-01', 'Facultad de Trabajo Social', 'Avenida de las Asistencias 9595', 'Colonia Social', 92850, '753951852', 'Laura Gómez', 5, 5),
('FCQC-GE-M-01', 'Facultad de Ciencias Químicas', 'Calle de las Moléculas 9696', 'Colonia Química', 92860, '852963741', 'Carlos Pérez', 5, 6),
('FIC-GE-M-01', 'Facultad de Ingeniería', 'Boulevard de las Ingenierías 9797', 'Colonia Ingeniería', 92870, '369258147', 'María López', 5, 6),
('DB-GE-M-06', 'Unidad de Servicios Bibliotecarios y de Información USBI', 'Avenida de las Letras 9898', 'Colonia Biblioteca', 92880, '852741963', 'David Pérez', 5, 0),
('EEC-GE-M-01', 'Escuela de Enfermería', 'Calle de las Enfermeras 9999', 'Colonia Enfermería', 92890, '741852963', 'Eva Sánchez', 5, 0);

-- F A C U L T A D  P O R  D E F E C T O --
INSERT INTO facultad (codigo, nombre) VALUES ('AAAA-AA-A-00', 'Sin facultad');
UPDATE facultad SET id = 0 WHERE id = (SELECT id FROM facultad WHERE codigo='AAAA-AA-A-00');

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --




-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / / / / / / / C R E A C I O N  D E  U S U A R I O S / / / / / / / / / / / / / / / --

-- D O C E N T E S  D E  L A  F A C U L T A D  D E  E S T A D I S T I C A  E  I N F O R M A T I C A --
INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol) VALUES 
('lalonso@uv.mx', 'defaultpass', 'Alonso', 'Ramirez', 'Lorena', 'Docente'),
('fcastaneda@uv.mx', 'defaultpass', 'Fredy', 'Castañeda', 'Sanchez', 'Coordinador'),
('hdelgado@uv.mx', 'defaultpass', 'Atanasio', 'Delgado', 'Ramirez', 'Docente'),
('evgarcia@uv.mx', 'defaultpass', 'Everardo Francisco', 'Garcia', 'Menier', 'Docente'),
('angegarcia@uv.mx', 'defaultpass', 'Virginia Angelica', 'Garcia', 'Vega', 'Docente'),
('lourhernandez@uv.mx', 'defaultpass', 'Maria de Lourdes', 'Hernandez', 'Rodriguez', 'Coordinador'),
('julopez@uv.mx', 'defaultpass', 'Juan Luis', 'Lopez', 'Herrera', 'Docente'),
('umarinero@uv.mx', 'defaultpass', 'Ulises', 'Marinero', 'Aguilar', 'Docente'),
('niemartinez@uv.mx', 'defaultpass', 'Niels', 'Martinez', 'Guevara', 'Docente'),
('lmontane@uv.mx', 'defaultpass', 'Luis Gerardo', 'Montane', 'Jimenez', 'Docente'),
('aorduna@uv.mx', 'defaultpass', 'Aquiles', 'Orduna', 'Gonzalez', 'Docente'),
('vorozco@uv.mx', 'defaultpass', 'Veronica Elizabeth', 'Orozco', 'Rios', 'Docente'),
('itreyes@uv.mx', 'defaultpass', 'Itzel Alessandra', 'Reyes', 'Flores', 'Docente'),
('rsarmiento@uv.mx', 'defaultpass', 'Ramon David', 'Sarmiento', 'Cervantes', 'Docente'),
('cansosa@uv.mx', 'defaultpass', 'Candy Obdulia', 'Sosa', 'Jimenez', 'Coordinador'),
('dvalderrabano@uv.mx', 'defaultpass', 'Diana Elizabeth', 'Valderrabano', 'Pedraza', 'Docente'),
('wzarate@uv.mx', 'defaultpass', 'Willian', 'Zarate', 'Navarro', 'Docente'),
('auraguilar@uv.mx', 'defaultpass', 'Aureliano', 'Aguilar', 'Bonilla', 'Coordinador'),
('albecruz@uv.mx', 'defaultpass', 'Alberto Jair', 'Cruz', 'Landa', 'Coordinador'),
('eldominguez@uv.mx', 'defaultpass', 'Martha Elizabet', 'Dominguez', 'Barcenas', 'Coordinador'),
('hlimon@uv.mx', 'defaultpass', 'Hector Xavier', 'Limon', 'Riaño', 'Coordinador'),
('ermeneses@uv.mx', 'defaultpass', 'Erika', 'Meneses', 'Rico', 'Coordinador'),
('juaperez@uv.mx', 'defaultpass', 'Juan Carlos', 'Perez', 'Arriaga', 'Coordinador'),
('jacoperez@uv.mx', 'defaultpass', 'Luis Jacobo', 'Perez', 'Guerrero', 'Docente'),
('angelperez@uv.mx', 'defaultpass', 'Angelica', 'Perez', 'Hernandez', 'Docente'),
('olrosas@uv.mx', 'defaultpass', 'Olga Regina', 'Rosas', 'Tolentino', 'Docente'),
('javsanchez@uv.mx', 'defaultpass', 'Javier', 'Sanchez', 'Acosta', 'Docente'),
('acerdan@uv.mx', 'defaultpass', 'Maria Angelica', 'Cerdan', '', 'Coordinador'),
('adcervantes@uv.mx', 'defaultpass', 'Adriana', 'Cervantes', 'Castillo', 'Docente'),
('acuesta@uv.mx', 'defaultpass', 'Abraham', 'Cuesta', 'Borges', 'Docente'),
('sauldominguez@uv.mx', 'defaultpass', 'Isidro Saul', 'Dominguez', '', 'Docente'),
('ramongomez@uv.mx', 'defaultpass', 'Ramon', 'Gomez', 'Romero', 'Docente'),
('lizhernandez@uv.mx', 'defaultpass', 'Lizbeth Alejandra', 'Hernandez', 'Gonzalez', 'Docente'),
('mariohernan@uv.mx', 'defaultpass', 'Mario Alberto', 'Hernandez', 'Perez', 'Docente'),
('vlagunes@uv.mx', 'defaultpass', 'Virginia', 'Lagunes', 'Barradas', 'Docente'),
('lonavarro@uv.mx', 'defaultpass', 'Maria de los Angeles', 'Navarro', 'Guerrero', 'Docente'),
('apolo@uv.mx', 'defaultpass', 'Ana Luz', 'Polo', 'Estrella', 'Coordinador'),
('angesanchez@uv.mx', 'defaultpass', 'Angel Juan', 'Sanchez', 'Garcia', 'Docente'),
('lwatty@uv.mx', 'defaultpass', 'Maria de Lourdes', 'Watty', 'Urquidi', 'Docente'),
('maribelcarmona@uv.mx', 'defaultpass', 'Maribel', 'Carmona', 'Garcia', 'Docente'),
('ceccruz@uv.mx', 'defaultpass', 'Cecilia', 'Cruz', 'Lopez', 'Docente'),
('eddiaz@uv.mx', 'defaultpass', 'Eduardo', 'Diaz', 'Camacho', 'Docente'),
('egabriel@uv.mx', 'defaultpass', 'Eliseo', 'Gabriel', 'Arguelles', 'Docente'),
('jazgarcia@uv.mx', 'defaultpass', 'Jazmin Josefina', 'Garcia', 'Mendez', 'Docente'),
('aminon@uv.mx', 'defaultpass', 'Angel', 'Miñon', 'Perez', 'Docente'),
('minreyes@uv.mx', 'defaultpass', 'Minerva', 'Reyes', 'Felix', 'Docente'),
('jruiz@uv.mx', 'defaultpass', 'Juan', 'Ruiz', 'Ramirez', 'Docente'),
('yzavaleta@uv.mx', 'defaultpass', 'Maria Yesenia', 'Zavaleta', 'Sanchez', 'Docente'),
('mcmezura@uv.mx', 'defaultpass', 'Ma. del Carmen', 'Mezura', 'Godoy', 'Coordinador'),
('jrrojano@uv.mx', 'defaultpass', 'José Rafael', 'Rojano', 'Cáceres', 'Coordinador'),
('karenverdin@uv.mx', 'defaultpass', 'Ma. Karen', 'Cortés', 'Verdín', 'Coordinador'),
('mortigoza@uv.mx', 'defaultpass', 'Miguel Ángel', 'Ortigoza', 'Clemente', 'Coordinador'),
('mdvargas@uv.mx', 'defaultpass', 'María Dolores', 'Vargas', 'Cerdán', 'Coordinador'),
('oalonso@uv.mx', 'defaultpass', 'Oscar', 'Alonso', 'Ramírez', 'Coordinador'),
('jocharan@uv.mx', 'defaultpass', 'Jorge Octavio', 'Ocharán', 'Hernández', 'Coordinador'),
('chperez@uv.mx', 'defaultpass', 'Christian', 'Pérez', 'Salazar', 'Coordinador');

-- A G R E G A R  F A C U L T A D  A   L O S  D O C E N T E S  C R E A D O S --
UPDATE usuario
SET id_facultad = (SELECT id FROM facultad WHERE codigo="FEIX-GE-M-01")
WHERE correo != 'A';

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --



-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / I N F O R M A C I O N  D E  L A S  A C A D E M I A S   F E I / / / / / / / / / / / --

-- Academias de informática --
INSERT INTO academia (codigo, nombre) VALUES
('FEIX-M-I-ITR', 'Matemáticas'),
('FEIX-P-ITR', 'Programación'),
('FEIX-STW-I-T', 'Sistemas y Tecnologías Web'),
('FEIX-IS-I-T', 'Ingeniería de Software'),
('FEIX-SIC-I-ITR', 'Sistemas de Información y Conocimiento'),
('FEIX-IP-I-ITR', 'Investigación y Profesionalismo'),
('FEIX-R-I-ITR', 'Redes'),
('FEIX-SEG-I-ITR', 'Seguridad'),
('FEIX-AS-I-ITR', 'Arquitectura y Sistemas'),
('FEIX-ES-I-ITR', 'Entorno Social'),
('FEIX-IHC-I-IT', 'Interacción Humano Computadora'),
('FEIX-DS-I-ITR', 'Desarrollo de Software'),
('FEIX-SR-I-ITR', 'Servicios de Red'),
('FEIX-MAS-I-I', 'Modelado y Análisis de Software'),
('FEIX-APS-I-I', 'Administración y Procesos de Software'),
('FEIX-CS-I-I', 'Calidad de Software'),
('FEIX-ER-I-T', 'Experiencia Recepcional'),
('FEIX-ER-I-I', 'Experiencia Recepcional'),
('FEIX-SSER-I', 'Servicio Social y Experiencia Recepcional'),
('FEIX-SS-IT', 'Servicio Social');

-- Academias de estadística --
INSERT INTO academia (codigo, nombre) VALUES
('FEIX-M-E', 'Matemáticas'),
('FEIX-CD-E', 'Ciencia De Datos'),
('FEIX-MICE-E', 'Metodología De La Investigación y Consultoria'),
('FEIX-MODE-E', 'Modelación Estadística'),
('FEIX-FE-E', 'Fundamentos De La Estadística'),
('FEIX-ME-E', 'Metodología Estadística'),
('FEIX-SSER-E', 'Servicio Social y Experiencia Recepcional');

-- A G R E G A R  F A C U L T A D  A  L A S  A C A D E M I A S  C R E A D A S  --
UPDATE academia
SET id_facultad =  (SELECT id FROM facultad WHERE codigo="FEIX-GE-M-01")
WHERE id != 666;

-- I N F O R M A C I O N  D E  C O O R D I N A D O R E S  D E  A C A D E M I A --
INSERT INTO coordinador (id_usuario, id_academia) VALUES
( ( SELECT id FROM usuario WHERE correo='cansosa@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-ES-I-ITR' ) ), -- Entorno Social - Candy Obdulia Sosa Jimenez
( ( SELECT id FROM usuario WHERE correo='auraguilar@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-M-I-ITR' ) ), -- Matemáticas - Aureliano Aguilar Bonilla
( ( SELECT id FROM usuario WHERE correo='acerdan@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-CS-I-I' ) ), -- Calidad de Software - Ma. Angélica Cerdán
( ( SELECT id FROM usuario WHERE correo='jocharan@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-DS-I-ITR' ) ), -- Desarrollo de Software - Jorge Octavio Ocharán Hernández
( ( SELECT id FROM usuario WHERE correo='apolo@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-MAS-I-I' ) ), -- Modelado y Análisis de Software - Ana Luz Polo Estrella
( ( SELECT id FROM usuario WHERE correo='albecruz@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-SSER-I' ) ), -- Servicio Social y Experiencia Recepcional - Alberto Jair Cruz Landa
( ( SELECT id FROM usuario WHERE correo='ermeneses@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-IP-I-ITR' ) ), -- Investigación y Profesionalismo - Erika Meneses Rico
( ( SELECT id FROM usuario WHERE correo='mcmezura@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-IHC-I-IT' ) ), -- Interacción Humano Computadora - Ma. del Carmen Mezura Godoy
( ( SELECT id FROM usuario WHERE correo='karenverdin@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-ER-I-I' ) ), -- Experiencia Recepcional - Ma. Karen Cortés Verdín
( ( SELECT id FROM usuario WHERE correo='mdvargas@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR' ) ), -- Sistemas de Información y Conocimiento - María Dolores Vargas Cerdán
( ( SELECT id FROM usuario WHERE correo='oalonso@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-ER-I-T' ) ), -- Experiencia Recepcional - Oscar Alonso Ramírez
( ( SELECT id FROM usuario WHERE correo='fcastaneda@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-IS-I-T' ) ), -- Ingeniería de Software - Fredy Castañeda Sánchez
( ( SELECT id FROM usuario WHERE correo='chperez@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-P-ITR' ) ), -- Programación - Christian Pérez Salazar
( ( SELECT id FROM usuario WHERE correo='jrrojano@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-STW-I-T' ) ), -- Sistemas y Tecnologías Web - José Rafael Rojano Cáceres
( ( SELECT id FROM usuario WHERE correo='juaperez@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-SEG-I-ITR' ) ), -- Seguridad - Juan Carlos Pérez Arriaga
( ( SELECT id FROM usuario WHERE correo='eldominguez@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-R-I-ITR' ) ), -- Redes - Martha Elizabet Domínguez Barcenas
( ( SELECT id FROM usuario WHERE correo='hlimon@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-SR-I-ITR' ) ), -- Servicios de Red - Hector Xavier Limon Riaño
( ( SELECT id FROM usuario WHERE correo='lourhernandez@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-APS-I-I' ) ), -- Administración y Procesos de Software - Maria de Lourdes Hernandez Rodriguez
( ( SELECT id FROM usuario WHERE correo='mortigoza@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-AS-I-ITR') ); -- Arquitectura y sistemas - Miguel Angel Ortigoza

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --








-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / I N F O R M A C I O N  D E  L O S  P R O G R A M A S  E D U C A T I V O S / / / / / --
-- La informacion de programas educativos debido a tiempo es tomada de datos de la oferta educativa de 2022 --
-- La informacion a continaucion se ingresa por area academica y region --


-- P R O G R A M A S  E D U C A T I V O S  D E L  A R E A  T E C N I C A --
-- Programas educativos para la región de Xalapa --
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('XA-12345', 'Arquitectura', (SELECT id FROM facultad WHERE codigo='FARX-GE-M-01'), 1),
('XC-12346', 'Ciencias Atmosféricas', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('XF-12347', 'Física', (SELECT id FROM facultad WHERE codigo='FFIX-GE-M-01'), 1),
('XI-12348', 'Ingeniería Ambiental', (SELECT id FROM facultad WHERE codigo='FIEX-GE-M-01'), 1),
('IB-12349', 'Ingeniería Biomédica', (SELECT id FROM facultad WHERE codigo='FIEX-GE-M-01'), 1),
('IC-12350', 'Ingeniería Civil', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IA-12351', 'Ingeniería en Alimentos', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IE-12352', 'Ingeniería en Instrumentación Electrónica', (SELECT id FROM facultad WHERE codigo='FIEX-GE-M-01'), 1),
('IME-12353', 'Ingeniería Mecánica Eléctrica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IQ-12354', 'Ingeniería Química', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('MX-12355', 'Matemáticas',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('QFB-12356', 'Químico Farmacéutico Biólogo', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1);

-- Programas educativos para la región de Veracruz
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('VA-12357', 'Arquitectura', (SELECT id FROM facultad WHERE codigo='FARX-GE-M-01'), 1),
('IC-12358', 'Ingeniería Civil', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IEC-12359', 'Ingeniería en Electrónica y Comunicaciones',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('II-12360', 'Ingeniería Industrial',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('II-12361', 'Ingeniería Informática',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IME-12362', 'Ingeniería Mecánica Eléctrica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IMT-12363', 'Ingeniería Mecatrónica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IMCM-12364', 'Ingeniería Metalúrgica y Ciencia de los Materiales',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IN-12365', 'Ingeniería Naval',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IQ-12366', 'Ingeniería Química', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('ITG-12367', 'Ingeniería Topográfica Geodésica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1);

-- Programas educativos para la región de Orizaba-Córdoba
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AO-12368', 'Arquitectura', (SELECT id FROM facultad WHERE codigo='FARX-GE-M-01'), 1),
('IA-12369', 'Ingeniería Ambiental', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IC-12370', 'Ingeniería Civil', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IA-12371', 'Ingeniería en Alimentos', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IB-12372', 'Ingeniería en Biotecnología', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('II-12373', 'Ingeniería Industrial',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IME-12374', 'Ingeniería Mecánica Eléctrica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IMT-12375', 'Ingeniería Mecatrónica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IQ-12376', 'Ingeniería Química', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('QI-12377', 'Química Industrial', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('QFB-12378', 'Químico Farmacéutico Biólogo', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1);

-- Programas educativos para la región de Poza Rica-Tuxpan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AP-12379', 'Arquitectura', (SELECT id FROM facultad WHERE codigo='FARX-GE-M-01'), 1),
('IA-12380', 'Ingeniería Ambiental', (SELECT id FROM facultad WHERE codigo='FIEX-GE-M-01'), 1),
('IC-12381', 'Ingeniería Civil', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IEC-12382', 'Ingeniería en Electrónica y Comunicaciones',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('ITC-12383', 'Ingeniería en Tecnologías Computacionales',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('II-12384', 'Ingeniería Industrial',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IME-12385', 'Ingeniería Mecánica Eléctrica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IP-12386', 'Ingeniería Petrolera',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IQ-12387', 'Ingeniería Química', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1),
('IPV-12388', 'Ingeniería Petrolera',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1);

-- Programas educativos para la región de Coatzacoalcos-Minatitlán
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('IA-12389', 'Ingeniería Ambiental', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IC-12390', 'Ingeniería Civil', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IB-12391', 'Ingeniería en Biotecnología', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01'), 1),
('IME-12392', 'Ingeniería Mecánica Eléctrica',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IP-12393', 'Ingeniería Petrolera',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('IQ-12394', 'Ingeniería Química', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01'), 1);


-- > P R O G R A M A S  E D U C A T I V O S  D E L  A R E A  D E  H U M A N I D A D E S - - 
-- Programas educativos para la región de Xalapa
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('DA-12395', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('PA-12396', 'Pedagogía',(SELECT id FROM facultad WHERE codigo='FPX-GE-M-01'), 1),
('AH-12397', 'Antropología Histórica',(SELECT id FROM facultad WHERE codigo='FAX-GE-M-01'), 1),
('AL-12398', 'Antropología Lingüística',(SELECT id FROM facultad WHERE codigo='FAX-GE-M-01'), 1),
('AS-12399', 'Antropología Social',(SELECT id FROM facultad WHERE codigo='FAX-GE-M-01'), 1),
('AR-12400', 'Arqueología',(SELECT id FROM facultad WHERE codigo='FAX-GE-M-01'), 1),
('DE-12401', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('FI-12402', 'Filosofía',(SELECT id FROM facultad WHERE codigo='FFX-GE-M-01'), 1),
('HI-12403', 'Historia',(SELECT id FROM facultad WHERE codigo='FHX-GE-M-01'), 1),
('LF-12404', 'Lengua Francesa', (SELECT id FROM facultad WHERE codigo='FIDX-GE-M-01'), 1),
('LI-12405', 'Lengua Inglesa', (SELECT id FROM facultad WHERE codigo='FIDX-GE-M-01'), 1),
('LLH-12406', 'Lengua y Literatura Hispánicas', (SELECT id FROM facultad WHERE codigo='FLEX-GE-M-01'), 1),
('PE-12407', 'Pedagogía',(SELECT id FROM facultad WHERE codigo='FPX-GE-M-01'), 1),
('SO-12408', 'Sociología',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1),
('DIPD-12409', 'Desarrollo Integral de las Personas con Discapacidad',(SELECT id FROM facultad WHERE codigo='FHX-GE-M-01'), 1),
('EI-12410', 'Enseñanza del Inglés', (SELECT id FROM facultad WHERE codigo='FIDX-GE-M-01'), 1);

-- Programas educativos para la región de Veracruz
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CC-12411', 'Ciencias de la Comunicación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('DV-12412', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('CC-12413', 'Ciencias de la Comunicación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('PV-12414', 'Pedagogía',(SELECT id FROM facultad WHERE codigo='FPX-GE-M-01'), 1),
('DMTV-12415', 'Docencia Mediada por Tecnología', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1);

-- Programas educativos para la región de Orizaba-Córdoba
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('DV-12416', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('SO-12417', 'Sociología',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1);

-- Programas educativos para la región de Poza Rica-Tuxpan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('DV-12418', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('PV-12419', 'Pedagogía',(SELECT id FROM facultad WHERE codigo='FPX-GE-M-01'), 1),
('TS-12420', 'Trabajo Social', (SELECT id FROM facultad WHERE codigo='FTSP-GE-M-01'), 1),
('DEPJT-12421', 'Derecho con Enfoque de Pluralismo Jurídico - Totonacapan (Espinal)',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1);

-- Programas educativos para la región de Coatzacoalcos-Minatitlán
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('DV-12422', 'Derecho',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('TS-12423', 'Trabajo Social', (SELECT id FROM facultad WHERE codigo='FTSC-GE-M-01'), 1),
('TDI-12424', 'TSU Docencia del Inglés', (SELECT id FROM facultad WHERE codigo='FTSC-GE-M-01'), 1);


-- > P R O G R A M A S  E D U C A T I V O S  D E L  A R E A  E C O N O M I C O  A D M I N I S T R A T I V O --
-- Programas educativos para la región de Xalapa
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AD-12425', 'Administración',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('CO-12426', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('AE-12427', 'Administración',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('ANI-12428', 'Administración de Negocios Internacionales',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('CPGP-12429', 'Ciencias Políticas y Gestión Pública',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1),
('CO-12430', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('DTHO-12431', 'Desarrollo del Talento Humano en las Organizaciones',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('ECO-12432', 'Economía',(SELECT id FROM facultad WHERE codigo='FHX-GE-M-01'), 1),
('GEO-12434', 'Geografía',(SELECT id FROM facultad WHERE codigo='FHX-GE-M-01'), 1),
('GDNI-12435', 'Gestión y Dirección de Negocios',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('PRP-12437', 'Publicidad y Relaciones Públicas',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1),
('CPGP-12441', 'Ciencias Políticas y Gestión Pública',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1),
('SCA-12439', 'Sistemas Computacionales Administrativos',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),

('EST-12433', 'Estadística', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('IS-12436', 'Ingeniería de Software', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('RSC-12438', 'Redes y Servicios de Cómputo', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('TC-12440', 'Tecnologías Computacionales', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('ICD-CCM-12551', 'Licenciatura en Ingeniería en Ciencia de Datos', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('LISTI-CCM-12548', 'Licenciatura en Ingeniería en Sistemas y Tecnologías de la Información', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('ICCI-CCM-12549', 'Licenciatura en Ingeniería de Ciberseguridad e Infraestructura de Cómputo', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1),
('ISW2-CCM-12550', 'Ingeniería de Software 2', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01'), 1);

-- Programas educativos para la región de Veracruz
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AD-12442', 'Administración',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('CO-12443', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('AE-12444', 'Administración',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('AT-12445', 'Administración Turística',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('CO-12446', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('GDNI-12447', 'Gestión y Dirección de Negocios',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('LIA-12448', 'Logística Internacional y Aduanas',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('TIO-12449', 'Tecnologías de Información en las Organizaciones',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('LIA-12450', 'Logística Internacional y Aduanas',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1);

-- Programas educativos para la región de Orizaba-Córdoba
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AD-12451', 'Administración',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('CO-12452', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('AE-12453', 'Administración',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('CO-12454', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('GDNI-12455', 'Gestión y Dirección de Negocios',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('IS-12456', 'Ingeniería de Software',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('TIO-12457', 'Tecnologías de Información en las Organizaciones',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('GI-12458', 'Gestión Intercultural - Grandes montañas (Tequila)',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('CPGP-12459', 'Ciencias Políticas y Gestión Pública',(SELECT id FROM facultad WHERE codigo='FSX-GE-M-01'), 1);

-- Programas educativos para la región de Poza Rica-Tuxpan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CO-12460', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('CO-12461', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('DERH-12462', 'Dirección Estratégica de Recursos Humanos',(SELECT id FROM facultad WHERE codigo='FPX-GE-M-01'), 1),
('GDNI-12463', 'Gestión y Dirección de Negocios',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('GIH-12464', 'Gestión Intercultural - Huasteca (Ixhuatlán de Madero)',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1),
('GIT-12465', 'Gestión Intercultural - Totonacapan (Espinal)',(SELECT id FROM facultad WHERE codigo='FDX-GE-M-01'), 1);

-- Programas educativos para la regiónm de Coatzacoalcos-Minitatitlan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('COA-12460', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('ADE-12461', 'Administración',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('COE-12462', 'Contaduría',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('GDNE-12463', 'Gestión y Dirección de Negocios',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('ISE-12464', 'Ingeniería de Software',(SELECT id FROM facultad WHERE codigo='FIX-GE-M-01'), 1),
('GIS-12465', 'Gestión Intercultural - Selvas (Huazuntlán, Mpio. Mecayapan)',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('LIAV-12466', 'Logística Internacional y Aduanas',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1);


-- > P R O G R A M A S  E D U C A T I V O S  D E L  A R E A  D E  C I E N C I A S  D E  L A  S A L U D --
-- Programas educativos del área de la salud para la región de Xalapa
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CD-XAL-12467', 'Cirujano Dentista',(SELECT id FROM facultad WHERE codigo='FOX-GE-M-01'), 1),
('ENF-XAL-12468', 'Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('MC-XAL-12469', 'Médico Cirujano',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1),
('TSE-XAL-12470', 'TSU Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('TSR-XAL-12471', 'TSU Radiólogo',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1);

-- Programas educativos del área de la salud para la región de Veracruz
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CD-VER-12472', 'Cirujano Dentista',(SELECT id FROM facultad WHERE codigo='FOX-GE-M-01'), 1),
('EDF-VER-12473', 'Educación Física, Deporte y Recreación', (SELECT id FROM facultad WHERE codigo='FMVV-GE-M-01'), 1),
('ENF-VER-12474', 'Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('MC-VER-12475', 'Médico Cirujano',(SELECT id FROM facultad WHERE codigo='FMV-GE-M-01'), 1),
('NUT-VER-12476', 'Nutrición',(SELECT id FROM facultad WHERE codigo='FNX-GE-M-01'), 1),
('PSI-VER-12477', 'Psicología', (SELECT id FROM facultad WHERE codigo='FPSX-GE-M-01'), 1),
('QC-VER-12478', 'Química Clínica', (SELECT id FROM facultad WHERE codigo='FQFX-GE-M-01'), 1),
('QIR-VER-12479', 'Quiropráctica',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('TSUH-VER-12480', 'TSU Histotecnólogo y Embalsamador',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1),
('TSR-VER-12481', 'TSU Radiólogo',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1);

-- Programas educativos del área de la salud para la región de Orizaba-Córdoba
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CD-ORI-12482', 'Cirujano Dentista',(SELECT id FROM facultad WHERE codigo='FOX-GE-M-01'), 1),
('ENF-ORI-12483', 'Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('MC-ORI-12484', 'Médico Cirujano',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1);

-- Programas educativos del área de la salud para la región de Poza Rica-Tuxpan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CD-POZ-12485', 'Cirujano Dentista',(SELECT id FROM facultad WHERE codigo='FOX-GE-M-01'), 1),
('ENF-POZ-12486', 'Enfermería', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01'), 1),
('MC-POZ-12487', 'Médico Cirujano',(SELECT id FROM facultad WHERE codigo='FMV-GE-M-01'), 1),
('PSI-POZ-12488', 'Psicología', (SELECT id FROM facultad WHERE codigo='FPSX-GE-M-01'), 1);

-- Programas educativos del área de la salud para la región de Coatzacoalcos-Minatitlán
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('CD-COA-12489', 'Cirujano Dentista',(SELECT id FROM facultad WHERE codigo='FOX-GE-M-01'), 1),
('ENF-COA-12490', 'Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('MC-COA-12491', 'Médico Cirujano',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1),
('TSE-COA-12492', 'TSU Enfermería',(SELECT id FROM facultad WHERE codigo='FBX-GE-M-01'), 1),
('TSR-COA-12493', 'TSU Radiólogo',(SELECT id FROM facultad WHERE codigo='FCX-GE-M-01'), 1);


-- > P R O G R A M A S  E D U C A T I V O S  D E  E L  A R E A  D E  C I E N C I A S  B I O L O G I C A S  Y A G R O P E C U A R I A S --
-- Programas educativos del área de Ciencias Biológicas y Agropecuarias para la región de Xalapa
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('BIO-XAL-12494', 'Biología', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01'), 1),
('AGR-XAL-12495', 'Ingeniero Agrónomo', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01'), 1),
('AGS-XAL-12496', 'Agroecología y Soberanía Alimentaria - Xalapa',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1);

-- Programas educativos del área de Ciencias Biológicas y Agropecuarias para la región de Veracruz
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AIN-VER-12497', 'Agronegocios Internacionales',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('BM-VER-12498', 'Biología Marina',(SELECT id FROM facultad WHERE codigo='FBV-GE-M-01'), 1),
('MVZ-VER-12499', 'Médico Veterinaria y Zootecnista', (SELECT id FROM facultad WHERE codigo='FMVV-GE-M-01'), 1);

-- Programas educativos del área de Ciencias Biológicas y Agropecuarias para la región de Orizaba-Córdoba
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('BIO-ORI-12500', 'Biología', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01'), 1),
('AGR-ORI-12501', 'Ingeniero Agrónomo', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01'), 1);

-- Programas educativos del área de Ciencias Biológicas y Agropecuarias para la región de Poza Rica-Tuxpan
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AIN-POZ-12502', 'Agronegocios Internacionales',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1),
('BIO-POZ-12503', 'Biología',(SELECT id FROM facultad WHERE codigo='FBV-GE-M-01'), 1),
('BM-POZ-12504', 'Biología Marina',(SELECT id FROM facultad WHERE codigo='FBV-GE-M-01'), 1),
('MVZ-POZ-12505', 'Médico Veterinario y Zootecnista', (SELECT id FROM facultad WHERE codigo='FMVV-GE-M-01'), 1),
('AGS-POZ-12506', 'Agroecología y Soberanía Alimentaria - Huasteca (Ixhuatlán de Madero)',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1);

-- Programas educativos del área de Ciencias Biológicas y Agropecuarias para la región de Coatzacoalcos-Minatitlán
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('ISA-CCM-12507', 'Ingeniería en Sistemas de Producción Agropecuaria A Distancia', (SELECT id FROM facultad WHERE codigo='FBAC-GE-M-01'), 1),
('ISA-CCM-12508', 'Ingeniería en Sistemas de Producción Agropecuaria Escolarizado', (SELECT id FROM facultad WHERE codigo='FBAC-GE-M-01'), 1),
('AGS-CCM-12509', 'Agroecología y Soberanía Alimentaria - Selvas (Huazuntlán, Mpio. Mecayapan)',(SELECT id FROM facultad WHERE codigo='FMX-GE-M-01'), 1),
('AIN-CCM-12510', 'Agronegocios Internacionales Virtual',(SELECT id FROM facultad WHERE codigo='FAV-GE-M-01'), 1);


-- > P R O G R A M A S  E D U C A T I V O S  D E L  A R E A  D E  A R T E S --
-- Programas educativos del área académica de Artes para la región de Xalapa
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AV-XAL-12511', 'Artes Visuales', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('CI-XAL-12512', 'Canto - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('CLI-XAL-12513', 'Clarinete - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('CON-XAL-12514', 'Contrabajo - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('COR-XAL-12515', 'Corno - Ciclo Iniciacion', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('DC-XAL-12516', 'Danza Contemporánea - Licenciatura', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('DCV-XAL-12517', 'Diseño de la Comunicación Visual', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('EM-XAL-12518', 'Educación Musical', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('EJ-XAL-12519', 'Estudios de Jazz', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('FL-XAL-12520', 'Flauta - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('FOT-XAL-12521', 'Fotografía', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('GUI-XAL-12522', 'Guitarra - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('MUS-XAL-12523', 'Música', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('OBO-XAL-12524', 'Oboe - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('PER-XAL-12525', 'Percusiones - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('PIA-XAL-12526', 'Piano - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('SAX-XAL-12527', 'Saxofón - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TTE-XAL-12528', 'Teatro', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TA-XAL-12529', 'Técnico en Alientos', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TC-XAL-12530', 'Técnico en Canto', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TCU-XAL-12531', 'Técnico en Cuerdas', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TDC-XAL-12532', 'Técnico en Danza Contemporánea', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TDP-XAL-12533', 'Técnico en Dibujo y Pintura', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TGU-XAL-12534', 'Técnico en Guitarra', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TPER-XAL-12535', 'Técnico en Percusiones', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TPIA-XAL-12536', 'Técnico en Piano', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TRO-XAL-12537', 'Trombón - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('TRU-XAL-12538', 'Trompeta - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('VIO-XAL-12539', 'Viola - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('VII-XAL-12540', 'Violín - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('VCL-XAL-12541', 'Violoncello - Ciclo Iniciación', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1),
('EAP-XAL-12542', 'Educación Artística con Perfiles Diferenciados Virtual', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01'), 1);

--Programa educativo global --
INSERT INTO programa_educativo (codigo, nombre, id_facultad, id_nivel) VALUES 
('AA-0000', 'Sin programa educativo', 0,0),

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --




-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / I N F O R M A C I O N  D E  L O S  U S U A R I O S  A D M I N I S T R A D O R E S / / / / / --


-- A D M I N I S T R A D O R  G L O B A L --
INSERT INTO administrador(correo,clave,id_facultad)  VALUES
('administrador@admin.uv.mx', 'defaultpass', (SELECT id FROM facultad WHERE codigo='AAAA-AA-A-00'));

-- A D M I N I S T R A D O R E S  R E G I O N  X A L A P A --
INSERT INTO administrador (correo, clave, nombre, paterno, id_facultad) VALUES 
('adminFAPX@admin.uv.mx', 'defaultpass', 'Administrador', 'FAP', (SELECT id FROM facultad WHERE codigo='FAPX-GE-M-01')),
('adminFDAX@admin.uv.mx', 'defaultpass', 'Administrador', 'FDA', (SELECT id FROM facultad WHERE codigo='FDAX-GE-M-01')),
('adminFMUX@admin.uv.mx', 'defaultpass', 'Administrador', 'FMU', (SELECT id FROM facultad WHERE codigo='FMUX-GE-M-01')),
('adminFTX@admin.uv.mx', 'defaultpass', 'Administrador', 'FT',(SELECT id FROM facultad WHERE codigo= 'FTX-GE-M-01')),
('adminFBX@admin.uv.mx', 'defaultpass', 'Administrador', 'FB',(SELECT id FROM facultad WHERE codigo= 'FBX-GE-M-01')),
('adminFCAX@admin.uv.mx', 'defaultpass', 'Administrador', 'FCA', (SELECT id FROM facultad WHERE codigo='FCAX-GE-M-01')),
('adminFBAX@admin.uv.mx', 'defaultpass', 'Administrador', 'FBA', (SELECT id FROM facultad WHERE codigo='FBAX-GE-M-01')),
('adminFEX@admin.uv.mx', 'defaultpass', 'Administrador', 'FE',(SELECT id FROM facultad WHERE codigo= 'FEX-GE-M-01')),
('adminFMX@admin.uv.mx', 'defaultpass', 'Administrador', 'FM',(SELECT id FROM facultad WHERE codigo= 'FMX-GE-M-01')),
('adminFNX@admin.uv.mx', 'defaultpass', 'Administrador', 'FN',(SELECT id FROM facultad WHERE codigo= 'FNX-GE-M-01')),
('adminFOX@admin.uv.mx', 'defaultpass', 'Administrador', 'FO',(SELECT id FROM facultad WHERE codigo= 'FOX-GE-M-01')),
('adminFPSX@admin.uv.mx', 'defaultpass', 'Administrador', 'FPS', (SELECT id FROM facultad WHERE codigo='FPSX-GE-M-01')),
('adminFCX@admin.uv.mx', 'defaultpass', 'Administrador', 'FC',(SELECT id FROM facultad WHERE codigo= 'FCX-GE-M-01')),
('adminFECX@admin.uv.mx', 'defaultpass', 'Administrador', 'FEC', (SELECT id FROM facultad WHERE codigo='FECX-GE-M-01')),
('adminFEIX@admin.uv.mx', 'defaultpass', 'Administrador', 'FEI', (SELECT id FROM facultad WHERE codigo='FEIX-GE-M-01')),
('adminFASX@admin.uv.mx', 'defaultpass', 'Administrador', 'FAS', (SELECT id FROM facultad WHERE codigo='FASX-GE-M-01')),
('adminFDX@admin.uv.mx', 'defaultpass', 'Administrador', 'FD',(SELECT id FROM facultad WHERE codigo= 'FDX-GE-M-01')),
('adminFSX@admin.uv.mx', 'defaultpass', 'Administrador', 'FS',(SELECT id FROM facultad WHERE codigo= 'FSX-GE-M-01')),
('adminFAX@admin.uv.mx', 'defaultpass', 'Administrador', 'FA',(SELECT id FROM facultad WHERE codigo= 'FAX-GE-M-01')),
('adminFFX@admin.uv.mx', 'defaultpass', 'Administrador', 'FF',(SELECT id FROM facultad WHERE codigo= 'FFX-GE-M-01')),
('adminFHX@admin.uv.mx', 'defaultpass', 'Administrador', 'FH',(SELECT id FROM facultad WHERE codigo= 'FHX-GE-M-01')),
('adminFIDX@admin.uv.mx', 'defaultpass', 'Administrador', 'FID', (SELECT id FROM facultad WHERE codigo='FIDX-GE-M-01')),
('adminFLEX@admin.uv.mx', 'defaultpass', 'Administrador', 'FLE', (SELECT id FROM facultad WHERE codigo='FLEX-GE-M-01')),
('adminFPX@admin.uv.mx', 'defaultpass', 'Administrador', 'FP',(SELECT id FROM facultad WHERE codigo= 'FPX-GE-M-01')),
('adminFARX@admin.uv.mx', 'defaultpass', 'Administrador', 'FAR', (SELECT id FROM facultad WHERE codigo='FARX-GE-M-01')),
('adminFFIX@admin.uv.mx', 'defaultpass', 'Administrador', 'FFI', (SELECT id FROM facultad WHERE codigo='FFIX-GE-M-01')),
('adminFMAX@admin.uv.mx', 'defaultpass', 'Administrador', 'FMA', (SELECT id FROM facultad WHERE codigo='FMAX-GE-M-01')),
('adminFICX@admin.uv.mx', 'defaultpass', 'Administrador', 'FIC', (SELECT id FROM facultad WHERE codigo='FICX-GE-M-01')),
('adminFQFX@admin.uv.mx', 'defaultpass', 'Administrador', 'FQF', (SELECT id FROM facultad WHERE codigo='FQFX-GE-M-01')),
('adminFCQX@admin.uv.mx', 'defaultpass', 'Administrador', 'FCQ', (SELECT id FROM facultad WHERE codigo='FCQX-GE-M-01')),
('adminFIX@admin.uv.mx', 'defaultpass', 'Administrador', 'FI',(SELECT id FROM facultad WHERE codigo= 'FIX-GE-M-01')),
('adminFIEX@admin.uv.mx', 'defaultpass', 'Administrador', 'FIE', (SELECT id FROM facultad WHERE codigo='FIEX-GE-M-01')),
('adminCSRSX@admin.uv.mx', 'defaultpass', 'Administrador', 'CSR', (SELECT id FROM facultad WHERE codigo='CSRS-GE-M-01')),
('adminCIAX@admin.uv.mx', 'defaultpass', 'Administrador', 'CIA', (SELECT id FROM facultad WHERE codigo='CIAX-GE-M-01'));

-- A D M I N I S T R A D O R E S  R E G I O N  V E R A C R U Z --
INSERT INTO administrador (correo, clave, nombre, paterno, id_facultad) VALUES 
('adminFMVV@admin.uv.mx', 'defaultpass', 'Administrador', 'FMVV', (SELECT id FROM facultad WHERE codigo='FMVV-GE-M-01')),
('adminFEFV@admin.uv.mx', 'defaultpass', 'Administrador', 'FEF', (SELECT id FROM facultad WHERE codigo='FEFV-GE-M-01')),
('adminFBV@admin.uv.mx', 'defaultpass', 'Administrador', 'FB',(SELECT id FROM facultad WHERE codigo= 'FBV-GE-M-01')),
('adminFEV@admin.uv.mx', 'defaultpass', 'Administrador', 'FE',(SELECT id FROM facultad WHERE codigo= 'FEV-GE-M-01')),
('adminFMV@admin.uv.mx', 'defaultpass', 'Administrador', 'FM',(SELECT id FROM facultad WHERE codigo= 'FMV-GE-M-01')),
('adminFNV@admin.uv.mx', 'defaultpass', 'Administrador', 'FN',(SELECT id FROM facultad WHERE codigo= 'FNV-GE-M-01')),
('adminFOV@admin.uv.mx', 'defaultpass', 'Administrador', 'FO',(SELECT id FROM facultad WHERE codigo= 'FOV-GE-M-01')),
('adminFPV@admin.uv.mx', 'defaultpass', 'Administrador', 'FP',(SELECT id FROM facultad WHERE codigo= 'FPV-GE-M-01')),
('adminFAV@admin.uv.mx', 'defaultpass', 'Administrador', 'FA',(SELECT id FROM facultad WHERE codigo= 'FAV-GE-M-01')),
('adminFCV@admin.uv.mx', 'defaultpass', 'Administrador', 'FC',(SELECT id FROM facultad WHERE codigo= 'FCV-GE-M-01')),
('adminFTCV@admin.uv.mx', 'defaultpass', 'Administrador', 'FTC', (SELECT id FROM facultad WHERE codigo='FTCV-GE-M-01')),
('adminFPEV@admin.uv.mx', 'defaultpass', 'Administrador', 'FPE', (SELECT id FROM facultad WHERE codigo='FPEV-GE-M-01')),
('adminFIV@admin.uv.mx', 'defaultpass', 'Administrador', 'FIV',(SELECT id FROM facultad WHERE codigo= 'FIV-GE-M-01')),
('adminFIVV@admin.uv.mx', 'defaultpass', 'Administrador', 'FIV',(SELECT id FROM facultad WHERE codigo= 'FIV-GE-M-02')),
('adminFIVV2@admin.uv.mx', 'defaultpass', 'Administrador', 'FIV',(SELECT id FROM facultad WHERE codigo= 'FIV-GE-M-03')),
('adminFIVV3@admin.uv.mx', 'defaultpass', 'Administrador', 'FIV',(SELECT id FROM facultad WHERE codigo= 'FIV-GE-M-04')),
('adminCIAV@admin.uv.mx', 'defaultpass', 'Administrador', 'CIA', (SELECT id FROM facultad WHERE codigo='CIAV-GE-M-01')),
('adminTLAV@admin.uv.mx', 'defaultpass', 'Administrador', 'TLA', (SELECT id FROM facultad WHERE codigo='TLAV-GE-M-01')),
('adminDB@admin.uv.mx', 'defaultpass', 'Administrador', 'DB', (SELECT id FROM facultad WHERE codigo='DB-GE-M-03'));

-- A D M I N I S T R A D O R E S  R E G I O N  O R I Z A B A --
INSERT INTO administrador (correo, clave, nombre, paterno, id_facultad) VALUES 
('adminFBAO@admin.uv.mx', 'defaultpass', 'Administrador', 'FBA', (SELECT id FROM facultad WHERE codigo='FBAO-GE-M-01')),
('adminFEO@admin.uv.mx', 'defaultpass', 'Administrador', 'FEO',(SELECT id FROM facultad WHERE codigo= 'FEO-GE-M-01')),
('adminFMO@admin.uv.mx', 'defaultpass', 'Administrador', 'FMO',(SELECT id FROM facultad WHERE codigo= 'FMO-GE-M-01')),
('adminFOO@admin.uv.mx', 'defaultpass', 'Administrador', 'FOO',(SELECT id FROM facultad WHERE codigo= 'FOO-GE-M-01')),
('adminFCO@admin.uv.mx', 'defaultpass', 'Administrador', 'FCO',(SELECT id FROM facultad WHERE codigo= 'FCO-GE-M-01')),
('adminFAO@admin.uv.mx', 'defaultpass', 'Administrador', 'FAO',(SELECT id FROM facultad WHERE codigo= 'FAO-GE-M-01')),
('adminFCQO@admin.uv.mx', 'defaultpass', 'Administrador', 'FCQO', (SELECT id FROM facultad WHERE codigo='FCQO-GE-M-01')),
('adminFIO@admin.uv.mx', 'defaultpass', 'Administrador', 'FIO',(SELECT id FROM facultad WHERE codigo= 'FIO-GE-M-01')),
('adminDBO@admin.uv.mx', 'defaultpass', 'Administrador', 'DB', (SELECT id FROM facultad WHERE codigo='DB-GE-M-04'));

-- A D M I N I S T R A D O R E S  R E G I O N  P O Z A - R I C A   T U X P A N --
INSERT INTO administrador (correo, clave, nombre, paterno, id_facultad) VALUES 
('adminFBAP@admin.uv.mx', 'defaultpass', 'Administrador', 'FBA', (SELECT id FROM facultad WHERE codigo='FBAP-GE-M-01')),
('adminFEP@admin.uv.mx', 'defaultpass', 'Administrador', 'FEP',(SELECT id FROM facultad WHERE codigo= 'FEP-GE-M-01')),
('adminFMP@admin.uv.mx', 'defaultpass', 'Administrador', 'FMP',(SELECT id FROM facultad WHERE codigo= 'FMP-GE-M-01')),
('adminFOP@admin.uv.mx', 'defaultpass', 'Administrador', 'FOP',(SELECT id FROM facultad WHERE codigo= 'FOP-GE-M-01')),
('adminFPSP@admin.uv.mx', 'defaultpass', 'Administrador', 'FPSP', (SELECT id FROM facultad WHERE codigo='FPSP-GE-M-01')),
('adminFCP@admin.uv.mx', 'defaultpass', 'Administrador', 'FCP',(SELECT id FROM facultad WHERE codigo= 'FCP-GE-M-01')),
('adminFPP@admin.uv.mx', 'defaultpass', 'Administrador', 'FPP',(SELECT id FROM facultad WHERE codigo= 'FPP-GE-M-01')),
('adminFTSP@admin.uv.mx', 'defaultpass', 'Administrador', 'FTSP', (SELECT id FROM facultad WHERE codigo='FTSP-GE-M-01')),
('adminFAP@admin.uv.mx', 'defaultpass', 'Administrador', 'FAP',(SELECT id FROM facultad WHERE codigo= 'FAP-GE-M-01')),
('adminFCQP@admin.uv.mx', 'defaultpass', 'Administrador', 'FCQP', (SELECT id FROM facultad WHERE codigo='FCQP-GE-M-01')),
('adminFICP@admin.uv.mx', 'defaultpass', 'Administrador', 'FICP', (SELECT id FROM facultad WHERE codigo='FICP-GE-M-01')),
('adminFIMP@admin.uv.mx', 'defaultpass', 'Administrador', 'FIMP', (SELECT id FROM facultad WHERE codigo='FIMP-GE-M-01')),
('adminFIEP@admin.uv.mx', 'defaultpass', 'Administrador', 'FIEP', (SELECT id FROM facultad WHERE codigo='FIEP-GE-M-01')),
('adminDBP@admin.uv.mx', 'defaultpass', 'Administrador', 'DB', (SELECT id FROM facultad WHERE codigo='DB-GE-M-05'));

-- A D M I N I S T R A D O R E S  R E G I O N  C O A T Z A C O A L C O S - M I N A T I T L A N --
INSERT INTO administrador (correo, clave, nombre, paterno, id_facultad) VALUES 
('adminFBAC@admin.uv.mx', 'defaultpass', 'Administrador', 'FBA', (SELECT id FROM facultad WHERE codigo='FBAC-GE-M-01')),
('adminFEC@admin.uv.mx', 'defaultpass', 'Administrador', 'FEC',(SELECT id FROM facultad WHERE codigo= 'FEC-GE-M-01')),
('adminFMC@admin.uv.mx', 'defaultpass', 'Administrador', 'FMC',(SELECT id FROM facultad WHERE codigo= 'FMC-GE-M-01')),
('adminFOC@admin.uv.mx', 'defaultpass', 'Administrador', 'FOC',(SELECT id FROM facultad WHERE codigo= 'FOC-GE-M-01')),
('adminFCAC@admin.uv.mx', 'defaultpass', 'Administrador', 'FCAC', (SELECT id FROM facultad WHERE codigo='FCAC-GE-M-01')),
('adminFTSC@admin.uv.mx', 'defaultpass', 'Administrador', 'FTSC', (SELECT id FROM facultad WHERE codigo='FTSC-GE-M-01')),
('adminFCQC@admin.uv.mx', 'defaultpass', 'Administrador', 'FCQC', (SELECT id FROM facultad WHERE codigo='FCQC-GE-M-01')),
('adminFIC@admin.uv.mx', 'defaultpass', 'Administrador', 'FIC',(SELECT id FROM facultad WHERE codigo= 'FIC-GE-M-01')),
('adminDBC@admin.uv.mx', 'defaultpass', 'Administrador', 'DB',(SELECT id FROM facultad WHERE codigo='DB-GE-M-06')),
('adminEEC@admin.uv.mx', 'defaultpass', 'Administrador', 'EEC', (SELECT id FROM facultad WHERE codigo='EEC-GE-M-01'));

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --





-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / E X P E R I E N C I A S  E D U C A T I V A S  / / / / / / / / / / / --

-- Agrear Experiencias educativas --
INSERT INTO experiencia_educativa (codigo, nombre, id_programa, id_academia) VALUES
('EE-001', 'Programación Básica', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-P-ITR')),
('EE-002', 'Estructuras de Datos', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-AS-I-ITR')),
('EE-003', 'Algoritmos', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-M-I-ITR')),
('EE-004', 'Sistemas Operativos', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-SR-I-ITR')),
('EE-005', 'Base de Datos', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR')),
('EE-006', 'Redes de Computadoras', (SELECT id FROM programa_educativo WHERE codigo='RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-R-I-ITR')),
('EE-007', 'Programación Orientada a Objetos', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-P-ITR')),
('EE-008', 'Desarrollo Web', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-STW-I-T')),
('EE-009', 'Ingeniería de Software', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-IS-I-T')),
('EE-010', 'Calidad de Software', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-CS-I-I')),
('EE-011', 'Seguridad Informática', (SELECT id FROM programa_educativo WHERE codigo='RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-SEG-I-ITR')),
('EE-012', 'Inteligencia Artificial', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR')),
('EE-013', 'Machine Learning', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR')),
('EE-014', 'Sistemas Distribuidos', (SELECT id FROM programa_educativo WHERE codigo='RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-SR-I-ITR')),
('EE-015', 'Arquitectura de Computadoras', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-AS-I-ITR')),
('EE-016', 'Administración de Redes', (SELECT id FROM programa_educativo WHERE codigo='RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-R-I-ITR')),
('EE-017', 'Desarrollo de Aplicaciones Móviles', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-DS-I-ITR')),
('EE-018', 'Computación en la Nube', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-SR-I-ITR')),
('EE-019', 'Metodologías Ágiles', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-APS-I-I')),
('EE-020', 'Análisis y Diseño de Sistemas', (SELECT id FROM programa_educativo WHERE codigo='IS-12436'), (SELECT id FROM academia WHERE codigo='FEIX-IS-I-T')),
('EE-021', 'Procesamiento de Señales', '(SELECT id FROM programa_educativo WHERE codigo=RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-AS-I-ITR')),
('EE-022', 'Computación Gráfica', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-IHC-I-IT')),
('EE-023', 'Internet de las Cosas', '(SELECT id FROM programa_educativo WHERE codigo=RSC-12438'), (SELECT id FROM academia WHERE codigo='FEIX-SR-I-ITR')),
('EE-024', 'Big Data', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR')),
('EE-025', 'Robótica', (SELECT id FROM programa_educativo WHERE codigo='TC-12440'), (SELECT id FROM academia WHERE codigo='FEIX-SIC-I-ITR'));

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --





-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / / C R E A R  P E R I O D O S  Y  C A N A L E S   2 0 2 4 / / / / / / / / / / / --

-- Crear periodos
INSERT INTO periodo (nombre, fecha_inicio, fecha_termino) VALUES ('AGO24-DEC24', '2024-08-20', '2024-12-10');
INSERT INTO periodo (nombre, fecha_inicio, fecha_termino) VALUES ('FEB24-JUN24', '2024-02-20', '2024-05-10');
INSERT INTO periodo (nombre, fecha_inicio, fecha_termino) VALUES ('AGO23-DEC23', '2023-08-20', '2023-12-10');
INSERT INTO periodo (nombre, fecha_inicio, fecha_termino) VALUES ('FEB23-JUN23', '2023-02-20', '2023-05-10');

-- Obtener el ID del periodo creado
SET @id_periodo = (SELECT id FROM periodo WHERE nombre = 'AGO24-DEC24');

-- Verificar si el periodo fue creado
SELECT * FROM periodo WHERE id = @id_periodo;

-- Asociar cada academia con el periodo
INSERT INTO academia_periodo (id_academia, id_periodo)
SELECT id, @id_periodo FROM academia;

-- Verificar si las relaciones academia-periodo fueron creadas
SELECT * FROM academia_periodo WHERE id_periodo = @id_periodo;

-- Crear un canal "General" con permisos para todas las relaciones academia-periodo
INSERT INTO canal (nombre, usuarios_permitidos, permisos, id_academia_periodo)
SELECT 'General', 'all', 'all', id FROM academia_periodo WHERE id_periodo = @id_periodo;

-- Verificar los canales creados
SELECT * FROM canal WHERE id_academia_periodo IN (SELECT id FROM academia_periodo WHERE id_periodo = @id_periodo);

-- C R E A R   U S U A R I O   P R U E B A  --
-- INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol) VALUES 
-- ('champico@uv.mx', 'defaultpass', 'Edgar Yael', 'Cortes', 'Carrillo', 'Coordinador');

-- C R E A R  S E G U N D O  U S U A R I O  P R U E B A --
-- INSERT INTO usuario (correo, clave, nombre, paterno, materno, rol) VALUES 
-- ('felipeJLL@uv.mx', 'defaultpass', 'Felipe de Jesus', 'Lucido', 'Lozano', 'coordinador');

DELETE FROM usuario WHERE correo='felipeJLL@uv.mx';

INSERT INTO academia (codigo, nombre) VALUES ('FEIX-M-T-PG', 'Academia de gallos');

INSERT INTO coordinador (id_usuario, id_academia) VALUES
( ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id FROM academia WHERE codigo='FEIX-M-T-PG' ) );

INSERT INTO academia_periodo (id_academia, id_periodo) VALUES
( ( SELECT id FROM academia WHERE codigo='FEIX-M-T-PG' ), (SELECT id FROM periodo WHERE nombre = 'AGO24-DEC24')),
( ( SELECT id FROM academia WHERE codigo='FEIX-M-T-PG' ), (SELECT id FROM periodo WHERE nombre = 'FEB24-JUN24')),
( ( SELECT id FROM academia WHERE codigo='FEIX-M-T-PG' ), (SELECT id FROM periodo WHERE nombre = 'AGO23-DEC23')),
( ( SELECT id FROM academia WHERE codigo='FEIX-M-T-PG' ), (SELECT id FROM periodo WHERE nombre = 'FEB23-JUN23'));

INSERT INTO miembro(id_usuario, id_academia_periodo) VALUES 
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 3) ),
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 4) ),
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 5) ),
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 9) ),
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 10) ),
(   ( SELECT id FROM usuario WHERE correo='felipeJLL@uv.mx'), ( SELECT id_academia_periodo FROM vista_academia_periodo WHERE id_academia = 11) );

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --







-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
-- / / / / / / / / /  I N F O R M A C I O N  D E  J E F E S  D E  C A R R E R A/ / / / / / / / / / / --


-- Agregar usuarios a la tabla usuario
-- INSERT INTO usuario (correo, clave, nombre, paterno, materno, fecha_creacion) VALUES
-- ('zmorales@uv.mx', 'defaultpass', 'Zoylo', 'Morales', NOW())),
-- ('jocharan@uv.mx', 'defaultpass', 'Jorge Octavio', 'Ocharán', 'Hernández', NOW()),
-- ('jmendez@uv.mx', 'defaultpass', 'Jesús Roberto', 'Mendez', 'Ortiz', NOW()),
-- ('chperez@uv.mx', 'defaultpass', 'Christian', 'Pérez', 'Salazar', NOW());

-- Agregar roles a la tabla usuario_roles
-- INSERT INTO usuario_roles (correo, es_docente,es_coordinador, es_jefe_carrera) VALUES
-- ('zmorales@uv.mx', TRUE, FALSE, TRUE),
-- ('jocharan@uv.mx', TRUE, TRUE, TRUE),
-- ('jmendez@uv.mx', TRUE, FALSE, TRUE),
-- ('chperez@uv.mx', TRUE, TRUE, TRUE);

-- Agregar jefes de carrera a la tabla jefe_carrera
-- INSERT INTO jefe_carrera (correo, codigo) VALUES
-- ('zmorales@uv.mx', 'EST-12433'),
-- ('jocharan@uv.mx', 'IS-12436'),
-- ('jmendez@uv.mx', 'TC-12440'),
-- ('chperez@uv.mx', 'RSC-12438');

-- ////////////////////////////////////////////////////////////////////////////////////////////////// --
