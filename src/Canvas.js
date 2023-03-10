function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }  

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));

var styles = {"container":"_1Lxpd","toolBoxContainer":"_2PfdK","colors":"_15Nzf","color":"_3thI9","active":"_3sodH"};

function DrawingToolBox(_ref) {
  var colors = _ref.colors,
      active = _ref.active,
      onChange = _ref.onChange;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.toolBoxContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.colors
  }, colors.map(function (color, key) {
    var _classNames;

    return /*#__PURE__*/React__default.createElement("button", {
      key: key,
      onClick: function onClick() {
        return onChange(color);
      },
      className: classNames(styles.color, (_classNames = {}, _classNames[styles.active] = active === color, _classNames)),
      style: {
        backgroundColor: color
      }
    });
  })));
}

function ReactCanvasPaint(props) {
  var canvas = React.useRef(null);

  var _useState = React.useState(false),
      drawing = _useState[0],
      setDrawing = _useState[1];

  var _useState2 = React.useState(null),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = React.useState(props.colors[0]),
      activeColor = _useState3[0],
      setActiveColor = _useState3[1];

  var onDown = React.useCallback(function (event) {
    var coordinates = getCoordinates(event);

    if (coordinates) {
      setPosition(coordinates);
      setDrawing(true);
    }
  }, []);
  var onUp = React.useCallback(function () {
    setDrawing(false);
    setPosition(null);
  }, []);

  var getCoordinates = function getCoordinates(event) {
    if (!canvas.current) {
      return null;
    }

    var x = event.pageX || event.touches[0].pageX;
    var y = event.pageY || event.touches[0].pageY;
    return {
      x: x - canvas.current.offsetLeft,
      y: y - canvas.current.offsetTop
    };
  };

  var onMove = React.useCallback(function (event) {
    if (drawing) {
      var newPosition = getCoordinates(event);

      if (position && newPosition) {
        drawLine(position, newPosition);
        setPosition(newPosition);
      }
    }
  }, [drawing, position]);

  var drawLine = function drawLine(originalPosition, newPosition) {
    if (!canvas.current) {
      return null;
    }

    var context = canvas.current.getContext('2d');

    if (context) {
      context.strokeStyle = activeColor;
      context.lineJoin = 'round';
      context.lineWidth = props.strokeWidth;
      context.beginPath();
      context.moveTo(originalPosition.x, originalPosition.y);
      context.lineTo(newPosition.x, newPosition.y);
      context.closePath();
      context.stroke();
      handleDraw(context.getImageData(0, 0, props.width, props.height));
    }
  };

  var handleDraw = function handleDraw(data) {
    if (typeof props.onDraw === 'function') {
      props.onDraw(data);
    }
  };

  React.useEffect(function () {
    if (typeof props.data === 'object' && canvas.current) {
      var context = canvas.current.getContext('2d');
      context.putImageData(props.data, 0, 0);
    }
  }, [props.data]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default.createElement("canvas", {
    ref: canvas,
    onMouseDown: props.viewOnly ? undefined : onDown,
    onTouchStart: props.viewOnly ? undefined : onDown,
    onMouseUp: props.viewOnly ? undefined : onUp,
    onTouchEnd: props.viewOnly ? undefined : onUp,
    onMouseLeave: props.viewOnly ? undefined : onUp,
    onMouseMove: props.viewOnly ? undefined : onMove,
    onTouchMove: props.viewOnly ? undefined : onMove,
    width: props.width,
    height: props.height
  }), !props.viewOnly && /*#__PURE__*/React__default.createElement(DrawingToolBox, {
    colors: props.colors,
    active: activeColor,
    onChange: setActiveColor
  }));
}

ReactCanvasPaint.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewOnly: PropTypes.bool,
  data: PropTypes.object,
  onDraw: PropTypes.func,
  colors: PropTypes.arrayOf(PropTypes.string),
  strokeWidth: PropTypes.number
};
ReactCanvasPaint.defaultProps = {
  width: 800,
  height: 400,
  viewOnly: false,
  data: undefined,
  onDraw: undefined,
  strokeWidth: 5
};

module.exports = ReactCanvasPaint;
//# sourceMappingURL=index.js.map
