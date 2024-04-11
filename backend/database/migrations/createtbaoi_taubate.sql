create table if not exists tbaoi_taubate(
 id integer primary key,
 cd_mun varchar(7),
 nm_mun varchar(50),
 sigla_uf varchar(2),
 area_km2 float,
 geom geometry(multipolygon,31983)
);
