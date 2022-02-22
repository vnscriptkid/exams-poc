# notes

## nested join

- https://www.kscerbiakas.lt/typeorm-nested-relationships/
- https://dev.to/yoshi_yoshi/typeorm-multiple-db-calls-vs-single-db-call-178
- https://www.thisdot.co/blog/connecting-to-postgresql-using-typeorm
- https://dev.to/yoshi_yoshi/typeorm-query-builder-with-subquery-490c
- https://www.youtube.com/watch?v=pf2e_bgcHbA

## virtual fields

- https://pietrzakadrian.com/blog/virtual-column-solutions-for-typeorm

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

## business logic

#### 1. Exam with scheduling info

- types of exams

  - (1) SINGLE => `parent_id` is null AND no children
  - (2) GROUP PARENT => `parent_id` is null AND has children
  - (3) GROUP CHILD => `parent_id` is not null

- scheduling status: **SCHEDULED** OR **UNSCHEDULED**

  - (1) SINGLE:
    - (**SCHEDULED**): has a connected examScheduling record
    - (**UNSCHEDULED**): has no connected examScheduling record
  - (2) GROUP CHILD:
    - (**SCHEDULED**): has a connected examScheduling record
    - (**UNSCHEDULED**): has no connected examScheduling record
  - (3) GROUP PARENT:
    - (**SCHEDULED**):
      - all of it's children are **SCHEDULED**
      - sum(children.studentPlanned) = e.studentPlanned
    - (**UNSCHEDULED**):

- extra:

  - (4) PAST EXAM:
    - either group or
    - has been **SCHEDULED**
    - in the past

- publication status: TODO

- simpleAllocation: TODO

- seatAllocation: TODO

- email supervisors: TODO

- authorization: TODO

- booking related operations: TODO
