import Button from "@mui/material/Button";

const AddToggleEffect = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        active: false,
        text: "Edit",
      };
    }

    toggleState = () => {
      this.setState((prevState) => {
        return { active: !prevState.active };
      });
    };

    render() {
      return (
        <OriginalComponent
          isEditing={this.state.active}
          toggleState={this.toggleState}
        >
          {this.state.text}
        </OriginalComponent>
      );
    }
  }
  return NewComponent;
};

export default AddToggleEffect(Button);
