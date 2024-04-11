create table if not exists tbapontamento_alteracao_taubate(
 id integer primary key,
 correcao varchar(254),
 status varchar(254),
 obs varchar(254),
 geom geometry(point,31983)
);
