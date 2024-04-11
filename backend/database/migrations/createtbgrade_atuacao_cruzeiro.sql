create table if not exists tbgrade_atuacao_cruzeiro(
 id integer primary key,
 atribuicao varchar(25),
 status varchar(25),
 validacao varchar(25),
 status_val varchar(25),
 obs varchar(250),
 area_km2 float,
 geom geometry(multipolygon,31983)
);
