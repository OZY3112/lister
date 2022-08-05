import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import useAuthStore from "../stores/authStore";
import Nav from "./ui/Nav";

const date = new Date();
const userData: any = {
  userId: "114569442847513028138",
  notes: [
    {
      title: "Note 1",
      content:
        "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: `8/5/2022`,
    },
    {
      title: "Note 2",
      content:
        "2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: `8/5/2022`,
    },
    {
      title: "Note 3",
      content:
        "3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: `8/5/2022`,
    },
  ],
};

export default function Sidebar({ setNote }: any) {
  return (
    <section className="bg-priDark  w-1/4 h-screen text-white">
      <Nav />
      <TableContainer>
        <Table>
          <Tbody>
            {/* {notes.map((note: Note, i) => {
              return (
                <figure
                  onClick={() => setNote(note)}
                  key={i}
                  className="h-16 border-white border-b-[1px] p-2 mx-2"
                >
                  <div className="text-xl">{note.title}</div>
                  <div className="justify-end flex">{note.date}</div>
                </figure>
              );
            })} */}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
}
