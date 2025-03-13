let divide = (numerator, denominator) => {

    if( typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Numerator or Denominator is not number")
    }

    if (denominator === 0) {
        throw new Error("Dominator is 0");
    }

    return numerator / denominator;
}


try {
    const result1 = divide(10, 2);
    console.log(`Resul: ${result1}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log("End of work");
}


try {
    const result2 = divide(15, 0);
    console.log(`Result: ${result2}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log("End of work");
}


try {
    const result3 = divide("10", 2);
    console.log(`Result: ${result3}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log("End of work");
}


try {
    const result4 = divide("twenty", "seven");
    console.log(`Result: ${result4}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
} finally {
    console.log("End of work");
}