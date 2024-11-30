// import * as fs from "node:fs/promises";
import {createFakeContact} from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { PATH_DB } from "../constants/contacts.js";

const generateContacts = async (number) => {
    const contactsList = await readContacts();
    const newContact = Array(number).fill(0).map(createFakeContact);
    const newContactsList = [...contactsList, ...newContact];
    await writeContacts(newContactsList);

    // const contactList = Array(number).fill(0).map(createFakeContact);
    // const data = await fs.readFile(PATH_DB, "utf-8")
    // console.log(JSON.parse(data)[0]);
};

generateContacts(5);
