class CustomError extends Error {
  status: Response["status"];
  statusText: Response["statusText"];
  type: Response["type"];
  url: Response["url"];
  name: string;
  data: unknown;

  constructor({
    message,
    status,
    statusText,
    type,
    data,
    url,
  }: Pick<Error, "message"> &
    Pick<Response, "status" | "statusText" | "type" | "url"> & {
      data: unknown;
    }) {
    super(message);

    this.status = status;
    this.statusText = statusText;
    this.type = type;
    this.url = url;
    this.data = data;
    this.name = "CustomError";
  }
}

export const fetchWrapper = async <T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    credentials: "include",
    ...options,
  });

  if (response.ok) {
    const result = await response.json();
    return result as T;
  }

  const data = JSON.parse(JSON.stringify(await response.text()));
  throw new CustomError({
    status: response.status,
    statusText: response.statusText,
    type: response.type,
    url: response.url,
    data,
    message: "",
  });
};
