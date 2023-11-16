import {
  Button,
  FileInput,
  Label,
  Modal as ModalFlowbite,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { newPost } from "../postsList/model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../utils/redux";
import { addPostAction } from "../../../utils/redux/action/postAction";

const Modal: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  const onCloseModal = () => {
    setOpenModal(false);
    setTitle("");
    setContent("");
    setImage(null);
    setPreview("");
  };

  const onSave = () => {
    newPost({
      title,
      content,
    })
      .then((response) => {
        dispatch(addPostAction(response.data.data));
        onCloseModal();
      })
      .catch((err) => {
        console.log("ERROR:", err.message);
      });
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
      <Button color="purple" onClick={() => setOpenModal(true)}>
        New Post
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
                onClick={onSave}
                disabled={title === "" || content === "" || image === null}
              >
                Save
              </Button>
            </div>
          </div>
        </ModalFlowbite.Body>
      </ModalFlowbite>
    </>
  );
};

export default Modal;
