import {
  SESSION_HEADER_ID_KEY,
  SESSION_LINE_KEY,
  SESSION_MODEL_KEY,
  SESSION_WORKGROUP_ID_KEY,
} from "../data/constants";

export function setSessionData(params) {
  const { id, machine, model, workGroupId } = params;
  try {
    sessionStorage.setItem(SESSION_HEADER_ID_KEY, id);
    sessionStorage.setItem(SESSION_LINE_KEY, machine);
    sessionStorage.setItem(SESSION_MODEL_KEY, model);
    sessionStorage.setItem(SESSION_WORKGROUP_ID_KEY, workGroupId);

    const storedValueHeader = sessionStorage.getItem(SESSION_HEADER_ID_KEY);
    const storedValueLine = sessionStorage.getItem(SESSION_LINE_KEY);
    const storedValueModel = sessionStorage.getItem(SESSION_MODEL_KEY);
    const storedValueWorkGroup = sessionStorage.getItem(
      SESSION_WORKGROUP_ID_KEY
    );

    if (
      storedValueHeader !== null ||
      storedValueLine !== null ||
      storedValueModel !== null ||
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
