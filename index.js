class StringUtils {

   static reverce(string) {
      if (typeof string === "string")
         return string.split("").reverse().join("");
      throw new Error("Unsupported operation exception!");
   }

}

exports.StringUtils = StringUtils;