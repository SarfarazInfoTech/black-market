import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3 col-md-3 col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            required
            name="productName"
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-md-3 col-12">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: Number(e.currentTarget.value) });
            }}
            value={this.state.productPrice}
          />
        </div>
        <div className="mb-3 col-2 pt-2">
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>
    );
  }
}

export default AddItem;
