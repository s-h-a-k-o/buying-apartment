export const createFormData = (body: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(body).forEach(([field, value]) => {
    if (value) {
      if (field === "files" && Array.isArray(value)) {
        value.forEach((file) => {
          formData.append("files", file);
        });
      } else if (Array.isArray(value) && value.length > 0) {
        formData.append(field, JSON.stringify(value));
      } else if (typeof value === "object" && !Array.isArray(value)) {
        formData.append(field, JSON.stringify(value));
      } else if (typeof value === "string" && !!value.trim()) {
        formData.append(field, value);
      } else if (
        !Array.isArray(value) &&
        typeof value !== "string" &&
        typeof value !== "object"
      ) {
        formData.append(field, String(value));
      }
    }
  });

  return formData;
};
