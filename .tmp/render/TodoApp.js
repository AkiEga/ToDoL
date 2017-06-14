'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoApp = _react2.default.createClass({
  displayName: 'TodoApp',

  getInitialState: function getInitialState() {
    return {
      todos: []
    };
  },
  onAdd: function onAdd(newTodo) {
    this.setState({
      todos: this.state.todos.concat({ item: newTodo, status: 0 })
    });
  },
  onDelete: function onDelete(i) {
    var targetTodo = this.state.todos[i];
    targetTodo.status = 1;
    this.setState({
      todos: this.state.todos
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'todoApp' },
      _react2.default.createElement(TodoCreator, { onAdd: this.onAdd }),
      _react2.default.createElement(TodoList, { todos: this.state.todos, onDelete: this.onDelete })
    );
  }
});

var TodoCreator = _react2.default.createClass({
  displayName: 'TodoCreator',

  getInitialState: function getInitialState() {
    return {
      value: ""
    };
  },
  _onAdd: function _onAdd() {
    var newTodo = this.refs.inputText.value;
    this.props.onAdd(newTodo);
    this.setState({ value: "" });
  },
  _onChange: function _onChange(e) {
    this.setState({
      value: e.target.value
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'TodoCreator' },
      _react2.default.createElement('input', { type: 'text', value: this.state.value, ref: 'inputText', placeholder: 'Input your new todo', onChange: this._onChange }),
      _react2.default.createElement(
        'button',
        { onClick: this._onAdd },
        'Add'
      )
    );
  }
});

var TodoList = _react2.default.createClass({
  displayName: 'TodoList',

  _onDelete: function _onDelete(i) {
    this.props.onDelete(i);
  },
  render: function render() {
    return _react2.default.createElement(
      'ul',
      null,
      this.props.todos.map(function (todo, i) {
        if (todo.status == 0) {
          return _react2.default.createElement(
            'li',
            { key: i },
            _react2.default.createElement('input', { type: 'checkbox',
              onClick: this._onDelete.bind(this, i) }),
            todo.item
          );
        } else {
          return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              's',
              null,
              todo.item
            )
          );
        }
      }, this)
    );
  }
});

(0, _reactDom.render)(_react2.default.createElement(TodoApp, null), document.getElementById('content'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvVG9kb0FwcC5qc3giXSwibmFtZXMiOlsiVG9kb0FwcCIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidG9kb3MiLCJvbkFkZCIsIm5ld1RvZG8iLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uY2F0IiwiaXRlbSIsInN0YXR1cyIsIm9uRGVsZXRlIiwiaSIsInRhcmdldFRvZG8iLCJyZW5kZXIiLCJUb2RvQ3JlYXRvciIsInZhbHVlIiwiX29uQWRkIiwicmVmcyIsImlucHV0VGV4dCIsInByb3BzIiwiX29uQ2hhbmdlIiwiZSIsInRhcmdldCIsIlRvZG9MaXN0IiwiX29uRGVsZXRlIiwibWFwIiwidG9kbyIsImJpbmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJQSxVQUFVLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQzlCQyxtQkFBaUIsMkJBQVU7QUFDekIsV0FBTztBQUNMQyxhQUFPO0FBREYsS0FBUDtBQUdELEdBTDZCO0FBTTlCQyxTQUFPLGVBQVNDLE9BQVQsRUFBaUI7QUFDdEIsU0FBS0MsUUFBTCxDQUFjO0FBQ1pILGFBQU8sS0FBS0ksS0FBTCxDQUFXSixLQUFYLENBQWlCSyxNQUFqQixDQUF3QixFQUFDQyxNQUFLSixPQUFOLEVBQWVLLFFBQU8sQ0FBdEIsRUFBeEI7QUFESyxLQUFkO0FBR0QsR0FWNkI7QUFXOUJDLFlBQVUsa0JBQVNDLENBQVQsRUFBVztBQUNuQixRQUFJQyxhQUFhLEtBQUtOLEtBQUwsQ0FBV0osS0FBWCxDQUFpQlMsQ0FBakIsQ0FBakI7QUFDQUMsZUFBV0gsTUFBWCxHQUFvQixDQUFwQjtBQUNBLFNBQUtKLFFBQUwsQ0FBYztBQUNaSCxhQUFPLEtBQUtJLEtBQUwsQ0FBV0o7QUFETixLQUFkO0FBR0QsR0FqQjZCO0FBa0I5QlcsVUFBUSxrQkFBVTtBQUNoQixXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUNFLG9DQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtWLEtBQXpCLEdBREY7QUFFRSxvQ0FBQyxRQUFELElBQVUsT0FBTyxLQUFLRyxLQUFMLENBQVdKLEtBQTVCLEVBQW1DLFVBQVUsS0FBS1EsUUFBbEQ7QUFGRixLQURGO0FBTUQ7QUF6QjZCLENBQWxCLENBQWQ7O0FBNEJBLElBQUlJLGNBQWMsZ0JBQU1kLFdBQU4sQ0FBa0I7QUFBQTs7QUFDbENDLG1CQUFpQiwyQkFBVTtBQUN6QixXQUFPO0FBQ0xjLGFBQU87QUFERixLQUFQO0FBR0QsR0FMaUM7QUFNbENDLFVBQVEsa0JBQVU7QUFDaEIsUUFBSVosVUFBVSxLQUFLYSxJQUFMLENBQVVDLFNBQVYsQ0FBb0JILEtBQWxDO0FBQ0EsU0FBS0ksS0FBTCxDQUFXaEIsS0FBWCxDQUFpQkMsT0FBakI7QUFDQSxTQUFLQyxRQUFMLENBQWMsRUFBQ1UsT0FBTSxFQUFQLEVBQWQ7QUFDRCxHQVZpQztBQVdsQ0ssYUFBVyxtQkFBU0MsQ0FBVCxFQUFXO0FBQ3BCLFNBQUtoQixRQUFMLENBQWM7QUFDWlUsYUFBT00sRUFBRUMsTUFBRixDQUFTUDtBQURKLEtBQWQ7QUFHRCxHQWZpQztBQWdCbENGLFVBQVEsa0JBQVU7QUFDaEIsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGFBQWY7QUFDRSwrQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLUCxLQUFMLENBQVdTLEtBQXJDLEVBQTRDLEtBQUksV0FBaEQsRUFBNEQsYUFBWSxxQkFBeEUsRUFBOEYsVUFBVSxLQUFLSyxTQUE3RyxHQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsU0FBUyxLQUFLSixNQUF0QjtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUQ7QUF2QmlDLENBQWxCLENBQWxCOztBQTBCQSxJQUFJTyxXQUFXLGdCQUFNdkIsV0FBTixDQUFrQjtBQUFBOztBQUMvQndCLGFBQVcsbUJBQVNiLENBQVQsRUFBVztBQUNwQixTQUFLUSxLQUFMLENBQVdULFFBQVgsQ0FBb0JDLENBQXBCO0FBQ0QsR0FIOEI7QUFJL0JFLFVBQVEsa0JBQVU7QUFDaEIsV0FDRTtBQUFBO0FBQUE7QUFFSSxXQUFLTSxLQUFMLENBQVdqQixLQUFYLENBQWlCdUIsR0FBakIsQ0FBcUIsVUFBU0MsSUFBVCxFQUFjZixDQUFkLEVBQWdCO0FBQ25DLFlBQUdlLEtBQUtqQixNQUFMLElBQWUsQ0FBbEIsRUFBb0I7QUFDbEIsaUJBQ0U7QUFBQTtBQUFBLGNBQUksS0FBS0UsQ0FBVDtBQUNFLHFEQUFRLE1BQUssVUFBYjtBQUNRLHVCQUFTLEtBQUthLFNBQUwsQ0FBZUcsSUFBZixDQUFvQixJQUFwQixFQUEwQmhCLENBQTFCLENBRGpCLEdBREY7QUFFbURlLGlCQUFLbEI7QUFGeEQsV0FERjtBQU1ELFNBUEQsTUFPSztBQUNILGlCQUFPO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFJa0IsbUJBQUtsQjtBQUFUO0FBQUosV0FBUDtBQUNEO0FBQ0YsT0FYRCxFQVdFLElBWEY7QUFGSixLQURGO0FBa0JEO0FBdkI4QixDQUFsQixDQUFmOztBQTJCQSxzQkFDRSw4QkFBQyxPQUFELE9BREYsRUFFRW9CLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGRiIsImZpbGUiOiJUb2RvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG52YXIgVG9kb0FwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0b2RvczogW11cclxuICAgIH1cclxuICB9LFxyXG4gIG9uQWRkOiBmdW5jdGlvbihuZXdUb2RvKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0b2RvczogdGhpcy5zdGF0ZS50b2Rvcy5jb25jYXQoe2l0ZW06bmV3VG9kbywgc3RhdHVzOjB9KVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBvbkRlbGV0ZTogZnVuY3Rpb24oaSl7XHJcbiAgICB2YXIgdGFyZ2V0VG9kbyA9IHRoaXMuc3RhdGUudG9kb3NbaV07XHJcbiAgICB0YXJnZXRUb2RvLnN0YXR1cyA9IDE7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdG9kb3M6IHRoaXMuc3RhdGUudG9kb3NcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvQXBwXCI+XHJcbiAgICAgICAgPFRvZG9DcmVhdG9yIG9uQWRkPXt0aGlzLm9uQWRkfS8+XHJcbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt0aGlzLnN0YXRlLnRvZG9zfSBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBUb2RvQ3JlYXRvciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogXCJcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgX29uQWRkOiBmdW5jdGlvbigpe1xyXG4gICAgdmFyIG5ld1RvZG8gPSB0aGlzLnJlZnMuaW5wdXRUZXh0LnZhbHVlO1xyXG4gICAgdGhpcy5wcm9wcy5vbkFkZChuZXdUb2RvKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOlwiXCJ9KTtcclxuICB9LFxyXG4gIF9vbkNoYW5nZTogZnVuY3Rpb24oZSl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVG9kb0NyZWF0b3JcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gcmVmPVwiaW5wdXRUZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCB5b3VyIG5ldyB0b2RvXCIgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfS8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9vbkFkZH0+QWRkPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgVG9kb0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgX29uRGVsZXRlOiBmdW5jdGlvbihpKXtcclxuICAgIHRoaXMucHJvcHMub25EZWxldGUoaSk7XHJcbiAgfSwgIFxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRvZG9zLm1hcChmdW5jdGlvbih0b2RvLGkpe1xyXG4gICAgICAgICAgICBpZih0b2RvLnN0YXR1cyA9PSAwKXtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fb25EZWxldGUuYmluZCh0aGlzLCBpKX0vPnt0b2RvLml0ZW19ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzPnt0b2RvLml0ZW19PC9zPjwvbGk+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxucmVuZGVyKFxyXG4gIDxUb2RvQXBwLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4pO1xyXG5cclxuIl19