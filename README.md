# notes

## nested join

- https://www.kscerbiakas.lt/typeorm-nested-relationships/
- https://dev.to/yoshi_yoshi/typeorm-multiple-db-calls-vs-single-db-call-178
- https://www.thisdot.co/blog/connecting-to-postgresql-using-typeorm
- https://dev.to/yoshi_yoshi/typeorm-query-builder-with-subquery-490c
- https://www.youtube.com/watch?v=pf2e_bgcHbA

## TODOS

## sqls

- Delete all priorities that has no connected exam

```sql
delete from priorities where id in (select * from (
  select p.id
  from priorities p
  left join exams e on p.exam_id = e.id
  where e.id is null
) as id);
```
