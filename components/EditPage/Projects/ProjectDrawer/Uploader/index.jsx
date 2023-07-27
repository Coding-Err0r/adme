import React, { Component } from "react";

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageValidationError: null,
    };
  }

  filesSelectedHandler = (e) => {
    if (this.checkMimeType(e)) {
      const { imagesPreviewUrl } = this.props;
      const files = Array.from(e.target.files);
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = {
            file: reader.result,
            size: file.size,
            name: file.name,
          };
          this.setState({ imageValidationError: null });
          imagesPreviewUrl(result);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  checkMimeType(event) {
    const { files } = event.target;
    let err = "";
    const types = ["image/png", "image/jpeg", "image/jpg"];
    for (let x = 0; x < files.length; x += 1) {
      if (types.every((type) => files[x].type !== type)) {
        err += `${files[x].type} is not a supported format\n`;
      }
    }

    if (err !== "") {
      event.target.value = null;
      this.setState({ imageValidationError: err });
      return false;
    }
    return true;
  }

  render() {
    const { imageValidationError } = this.state;
    return (
      <>
        <div id="main">
          <div className="w-full">
            <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  Drop images to Attach, or
                  <span className="text-blue-600 underline"> browse</span>
                </span>
              </span>
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.filesSelectedHandler}
                accept="image/png, image/jpeg"
                multiple
                className ="hidden"
              />
            </label>
          </div>

          <p>Drag your images here or click in this area.</p>
          {imageValidationError ? (
            <span className="error-msg">{imageValidationError}</span>
          ) : null}
        </div>
      </>
    );
  }
}

export default Uploader;
