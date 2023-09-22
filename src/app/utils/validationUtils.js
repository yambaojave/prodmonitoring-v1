import {
  SESSION_HEADER_ID_KEY,
  SESSION_WORKGROUP_ID_KEY,
} from "../data/constants";

export function setSessionData(headerId, workgroupId) {

  try {
    sessionStorage.setItem(SESSION_HEADER_ID_KEY, headerId);
    sessionStorage.setItem(SESSION_WORKGROUP_ID_KEY, workgroupId);

    const storedValueHeader = sessionStorage.getItem(SESSION_HEADER_ID_KEY);
    const storedValueWorkGroup = sessionStorage.getItem(
      SESSION_WORKGROUP_ID_KEY
    );

    if (
      storedValueHeader !== null ||
      storedValueWorkGroup !== null
    ) {
        return true;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
