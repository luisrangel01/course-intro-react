import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem = initialValue;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        // throw Error("I'm an error");
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 5000);
  }, []);

  const saveItem = (newTodos) => {
    try {
      setItem(newTodos);
      localStorage.setItem(itemName, JSON.stringify(newTodos));
    } catch (error) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
