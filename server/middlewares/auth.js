import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
  
  try {
    const authData = await req.auth();
    const userId = authData.userId;

    let hasPremiumPlan = false;

    try {
      if (authData.has) {
        hasPremiumPlan = await authData.has({ plan: "premium" });
      }
    } catch {
      hasPremiumPlan = false;
    }

    const user = await clerkClient.users.getUser(userId);

    let free_usage = user.privateMetadata?.free_usage ?? 0;

    if (!hasPremiumPlan && free_usage >= 10) {
      return res.status(403).json({
        success: false,
        message: "Limit reached. Upgrade to continue.",
      });
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    req.free_usage = free_usage;
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
