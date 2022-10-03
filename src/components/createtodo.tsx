import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleVaild = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [{ id: Date.now(), text: toDo, category }, ...oldToDos]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleVaild)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do.",
        })}
        type="text"
        placeholder="Write a to do"
      />
      <button>ADD</button>
    </form>
  );
};

export default CreateToDo;
