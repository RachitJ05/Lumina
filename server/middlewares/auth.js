import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  try {
    const userId = await req.auth().userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    
    req.userId = userId;
    next();
  } catch (error) {
    console.error("AUTH ERROR:", error);
    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
