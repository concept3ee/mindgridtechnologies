import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  website: string;
  phone: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SheetForm;
    const { name, email, website, phone } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Fetch existing data
    const range = "Sheet1!A2:D"; // Adjust range to start from the first row with data
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = existingData.data.values || [];

    // Check for duplicate based on email
    const isDuplicate = rows.some(
      (row) => row?.[1]?.toLowerCase() === email.toLowerCase()
    );
    if (isDuplicate) {
      return new Response(
        JSON.stringify({
          code: "EMAIL_EXISTS",
          message: "A user with this email address already exists.",
        }),
        {
          status: 409, // Conflict
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Append new data
    const valueInputOption = "USER_ENTERED";
    const values = [[name, email, website, phone]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2:D", // Ensure you append at the correct range
      valueInputOption,
      requestBody: { values },
    });

    return new Response(
      JSON.stringify({ message: "Data appended successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
