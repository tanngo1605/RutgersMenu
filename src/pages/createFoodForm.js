import React from "react";

class CreateFoodForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      campus: "",
      info: "",
      img: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
      e.preventDefault();
    this.setState({ name: "", info: "", img: "", campus: "" });
  };

  render() {
    return (
      <div>
        <h3>Create Food</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Campus </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.campus}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Infor </label>
            <input
              type="text"
              className="form-control"
              value={this.state.info}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Img</label>
            <input
              type="text"
              className="form-control"
              value={this.state.img}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create Food" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateFoodForm;
