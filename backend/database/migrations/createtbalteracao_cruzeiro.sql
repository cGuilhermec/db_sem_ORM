create table if not exists tbalteracao_cruzeiro(
 id integer primary key,
 area_km2 float,
 municipio varchar(254),
 cod_estado varchar(254),
 cod_class float,
 class varchar(254),
 obs varchar(254),
 geom geometry(multipolygon,31983)
);
