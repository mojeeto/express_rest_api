import {
  Button,
  FileInput,
  Label,
  Modal as ModalFlowbite,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useState } from "react";

const Modal: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  function onCloseModal() {
    setOpenModal(false);
    setTitle("");
    setContent("");
  }

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
              <FileInput id="image" required />
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
              <Button color="failure">Cancel</Button>
              <Button color="success" disabled>
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
