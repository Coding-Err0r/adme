import React, { Component, useEffect } from "react";
import Preview from "../Preview";
import Uploader from "../Uploader";

class ImageDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesPreviewUrls: [],
    };
  }

  imagesPreviewUrls = (result) => {
    this.setState({
      imagesPreviewUrls: [...this.state.imagesPreviewUrls, result],
    });
  };

  deleteImage = (id) => {
    const { imagesPreviewUrls } = this.state;
    if (imagesPreviewUrls.length > 0) {
      const filterImages = imagesPreviewUrls.filter((image) => image.id !== id);
      this.setState({
        imagesPreviewUrls: filterImages,
      });
    }
  };

  render() {
    const { imagesPreviewUrls } = this.state;
    // console.log(imagesPreviewUrls);

    return (
      <div>
        <Uploader imagesPreviewUrls={this.imagesPreviewUrls} />
        {imagesPreviewUrls.length > 0 ? (
          <Preview
            imagesPreviewUrls={imagesPreviewUrls}
            deleteImage={this.deleteImage}
          />
        ) : null}
      </div>
    );
  }
}

export default ImageDnD;
