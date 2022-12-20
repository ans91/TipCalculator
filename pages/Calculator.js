import React, { useState } from "react";
import styles from "../styles/Calculator.module.css";
import Colors from "../Components/Colors";
import { CustomInput, CustomText, FlexBox } from "../Components/GlobalComponents";


const Calculator = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  const [err, setErr] = useState("");
  const [flag, setFlag] = useState(false);
  const [people, setPeople] = useState("");

  const handlButton = (e, num) => {
    let tempBill = Number(bill);
    let tempPeople = Number(people);
    if (
      typeof tempBill === "number" &&
      tempBill > 0 &&
      typeof tempPeople === "number" &&
      tempPeople > 0
    ) {
      let tempTip = (tempBill * (num / 100)) / tempPeople;
      setTip(tempTip.toFixed(2));
      let tot = tempBill / tempPeople + tempTip;
      setTotal(tot.toFixed(2));
      setErr("");
      setFlag(false);
    } else {
      setErr("Can't be zero");
      setFlag(true);
    }
  };

  const handleReset = () => {
    setBill("");
    setPeople("");
    setTip("");
    setTotal("");
  };

  return (
    <div
      className={styles.body}
      style={{
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: Colors.Light_grayish_cyan,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <FlexBox pTop={50}>
        <img src="../logo.svg" width={"100%"} height={"100%"} />
      </FlexBox>

      <div
        className={styles.container}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding: "10px",
          alignItems: "initial",
          borderRadius: 10,
          marginBottom: 120,
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {/* first div */}
        <div
          className={styles.container}
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            width: "210px",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            gap: "20px",
          }}
        >
          <div>
            <CustomText>Bill</CustomText>
            <CustomInput
              bgImage={"url(../icon-dollar.svg)"}
              placeholder="0"
              pTop={5}
              pBot={5}
              pRight={10}
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            ></CustomInput>
          </div>
          <div>
            <CustomText>Select tip %</CustomText>
            <div
              className={styles.container}
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "flex-start",
                marginTop: 5,
                flexWrap: "wrap",
              }}
            >
              <button
                className={styles.btnHover}
                onClick={(e) => handlButton(e, 5)}
              >
                5%
              </button>
              <button
                className={styles.btnHover}
                onClick={(e) => handlButton(e, 10)}
              >
                10%
              </button>
              <button
                className={styles.btnHover}
                onClick={(e) => handlButton(e, 15)}
              >
                15%
              </button>
              <button
                className={styles.btnHover}
                onClick={(e) => handlButton(e, 25)}
              >
                25%
              </button>
              <button
                className={styles.btnHover}
                onClick={(e) => handlButton(e, 50)}
              >
                50%
              </button>
              <input
                placeholder="Custom"
                onClick={(e) => handlButton(e, e.target.value)}
                style={{
                  width: "60px",
                  backgroundColor: Colors.Very_light_grayish_cyan,
                  border: 0,
                  padding: 3,
                  textAlign: "right",
                }}
              ></input>
            </div>
          </div>
          <div>
            <CustomText>Number of people</CustomText>
            <CustomText fColor={"red"} pLeft={30}>
              {err ? err : ""}
            </CustomText>
            <CustomInput
              bgImage={"url(../icon-dollar.svg)"}
              placeholder="0"
              pTop={5}
              pBot={5}
              pRight={10}
              outlineColor={flag?"red":"hsl(172, 67%, 45%)"}
              value={people}
              onChange={(e) => setPeople(e.target.value)}
            ></CustomInput>
          </div>
        </div>
        {/* second div */}
        <div
          className={styles.container}
          style={{
            width: "210px",
            backgroundColor: Colors.Very_dark_cyan,
            direction: "column",
            justifyContent: "flex-start",
            borderRadius: 7,
          }}
        >
          <div
            className={styles.container}
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <div
              className={styles.container}
              style={{
                alignItems: "flex-start",
                paddingLeft: "15px",
                marginTop: 30,
                fontSize: 12,
              }}
            >
              <CustomText fColor={"white"}>Tip Amount</CustomText>
              <CustomText fColor={Colors.Dark_grayish_cyan}>
                / person
              </CustomText>
            </div>
            <div>
              <CustomText fColor={Colors.Strong_cyan} fSize={24} fWeight={700}>
                $
              </CustomText>
              <CustomText fColor={Colors.Strong_cyan} fSize={28} fWeight={700} pRight={15} vAlign={-2}>
                {tip ? tip : "0.00"}
              </CustomText>
            </div>
          </div>
          <div
            className={styles.container}
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <div
              className={styles.container}
              style={{
                alignItems: "flex-start",
                paddingLeft: "15px",
                fontSize: 12,
                marginTop: 20,
              }}
            >
              <CustomText fColor={"white"}>Total</CustomText>
              <CustomText fColor={Colors.Dark_grayish_cyan}>
                / person
              </CustomText>
            </div>
            <div>
              <CustomText fColor={Colors.Strong_cyan} fSize={24} fWeight={700}>
                $
              </CustomText>
              <CustomText fColor={Colors.Strong_cyan} fSize={28} fWeight={700} pRight={15} vAlign={-2}>
                {total ? total : "0.00"}
              </CustomText>
            </div>
          </div>
            <button
              onClick={handleReset}
              style={{
                width: "90%",
                backgroundColor: Colors.Strong_cyan,
                marginTop: "30%",
                borderRadius: "5px",
                padding: "5px",
                marginBottom: 10,
              }}
            >
              RESET
            </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
