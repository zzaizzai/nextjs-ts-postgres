
import { sql } from "@vercel/postgres";

export default async function Home() {

  const drop = await sql`drop table if exists  test;`;
  const create = await sql`create table test(
    id serial primary key,
    name text
    );`

  const insert = await sql`
  insert into test(name) values('test good');
  `;
  const  { rows }  = await sql`select * from test;`;
  console.log(rows )

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.text}
        </div>
      ))}
    </div>
  );
}