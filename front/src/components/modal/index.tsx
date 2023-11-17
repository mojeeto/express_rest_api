import {
  Button,
  FileInput,
  Label,
  Modal as ModalFlowbite,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { PostType, newPost, updatePost } from "../postsList/model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../utils/redux";
import { addPostAction } from "../../../utils/redux/action/postAction";
import { addErrorAction } from "../../../utils/redux/action/alertAction";

const Modal: React.FC<{
  color?:
    | "blue"
    | "gray"
    | "dark"
    | "light"
    | "success"
    | "failure"
    | "warning"
    | "purple";
  buttenValue: string;
  edit?: boolean;
  post?: PostType;
}> = ({ color = "blue", buttenValue, edit = false, post }) => {
  if (edit && !post) throw new Error("Error edit is true but post is empty");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(edit ? post!.title : "");
  const [content, setContent] = useState<string>(edit ? post!.content : "");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(
    edit ? "http://localhost:8080/" + post!.imagePath : null
  );
  const dispatch = useDispatch<AppDispatch>();

  const onCloseModal = () => {
    setOpenModal(false);
    setTitle("");
    setContent("");
    setImage(null);
    setPreview("");
  };

  const onSave = () => {
    if (title && content && image) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("image", image);
      newPost(formData)
        .then((response) => {
          if (response.status === 201) {
            onCloseModal();
            return dispatch(addPostAction(response.data.data));
          }
          if (response.status === 422)
            return console.log("Error", response.data.message);
        })
        .catch((err) => {
          console.log("ERROR:", err.response.status);
          if (err.response.status === 422) {
            dispatch(
              addErrorAction({
                type: "ERROR",
                message:
                  "Please make sure the title length is bigger than 2 character.",
              })
            );
          }
        });
    }
  };

  const onUpdate = () => {
    if (title && content) {
      console.log("OK");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);
      updatePost(formData, post!._id)
        .then((response) => {
          if (response.status === 200) {
            onCloseModal();
            return dispatch(addPostAction(response.data.post));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    let fileReader: FileReader | null = null;
    if (image) {
      fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onloadend = () => {
        if (fileReader) {
          setPreview(fileReader.result);
        }
      };
    }
    return () => {
      if (fileReader) {
        fileReader.abort();
        fileReader = null;
      }
    };
  }, [image]);

  return (
    <>
      <Button color={color} onClick={() => setOpenModal(true)}>
        {buttenValue}
      </Button>
      <ModalFlowbite show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalFlowbite.Header />
        <ModalFlowbite.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-purple-900 dark:text-white">
              New Post
              <div className="h-0.5 w-auto bg-purple-900" />
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="image" value="Image" />
              </div>
              <div className="flex flex-col gap-2">
                <FileInput
                  id="image"
                  onChange={(e) =>
                    setImage((_) => {
                      if (!e.target.files) return null;
                      return e.target.files[0];
                    })
                  }
                  required
                />
                {preview ? (
                  <img className="w-[150px]" src={`${preview}`} />
                ) : (
                  <span>Please select a Image.</span>
                )}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="content" value="Content" />
              </div>
              <Textarea
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onCloseModal}>
                Cancel
              </Button>
              <Button
                color="success"
                onClick={edit ? onUpdate : onSave}
                disabled={
                  title === "" || content === "" || (image === null && !edit)
                }
              >
                {edit ? "Update" : "Save"}
              </Button>
            </div>
          </div>
        </ModalFlowbite.Body>
      </ModalFlowbite>
    </>
  );
};

export default Modal;
