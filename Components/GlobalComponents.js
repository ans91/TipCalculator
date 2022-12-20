import styles from "../styles/Calculator.module.css";
import Colors from "./Colors";

export const FlexBox = ({
  children,
  display,
  direction,
  jc,
  ai,
  gap,
  mTop,
  mBot,
  mLeft,
  mRight,
  margin,
  padding,
  pBot,
  pTop,
  pRight,
  pLeft,
  width,
  height,
  bg,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        display: display ? display : "flex",
        flexDirection: direction ? direction : "row",
        justifyContent: jc ? jc : "center",
        alignItems: ai ? ai : "center",
        gap: gap,
        marginTop: mTop,
        marginBottom: mBot,
        marginLeft: mLeft,
        marginRight: mRight,
        margin: margin,
        padding: padding,
        paddingBottom: pBot,
        paddingTop: pTop,
        paddingRight: pRight,
        paddingLeft: pLeft,
        width: width,
        height: height,
        backgroundColor: bg,
      }}
    >
      {children}
    </div>
  );
};

export const CustomText = ({
  children,
  fSize,
  fWeight,
  fColor,
  mTop,
  mBot,
  mLeft,
  mRight,
  margin,
  padding,
  pBot,
  pTop,
  pRight,
  pLeft,
  vAlign,
}) => {
  return (
    <spam
      style={{
        fontSize: fSize ? fSize : 12,
        fontWeight: fWeight,
        color: fColor ? fColor : "black",
        marginTop: mTop,
        marginBottom: mBot,
        marginLeft: mLeft,
        marginRight: mRight,
        margin: margin,
        padding: padding,
        paddingBottom: pBot,
        paddingTop: pTop,
        paddingRight: pRight,
        paddingLeft: pLeft,
        verticalAlign: vAlign,
      }}
    >
      {children}
    </spam>
  );
};

export const CustomInput = ({
  children,
  placeholder,
  value,
  onChange,
  bgImage,
  bgSize,
  bgRepeat,
  bgPosition,
  width,
  bgColor,
  tAlighn,
  mTop,
  mBot,
  mLeft,
  mRight,
  margin,
  padding,
  pBot,
  pTop,
  pRight,
  pLeft,
  border,
  bRadius,
  outlineColor,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        backgroundImage: bgImage,
        backgroundSize: bgSize ? bgSize : 8,
        backgroundRepeat: bgRepeat ? bgRepeat : "no-repeat",
        width: width ? width : "200px",
        backgroundColor: bgColor ? bgColor : Colors.Very_light_grayish_cyan,
        textAlign: tAlighn ? tAlighn : "right",
        backgroundPosition: bgPosition ? bgPosition : 5,
        border: border ? border : "none",
        outlineColor: outlineColor ? outlineColor : "hsl(172, 67%, 45%)",
        borderRadius: bRadius ? bRadius : 5,
        appearance: "none",
        marginTop: mTop,
        marginBottom: mBot,
        marginLeft: mLeft,
        marginRight: mRight,
        margin: margin,
        padding: padding,
        paddingBottom: pBot,
        paddingTop: pTop,
        paddingRight: pRight,
        paddingLeft: pLeft,
      }}
    >
      {children}
    </input>
  );
};
