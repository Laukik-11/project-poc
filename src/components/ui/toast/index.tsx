import { Transition } from "@headlessui/react";
import React from "react";
import { ToastIcon, Toaster, resolveValue } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      containerStyle={{
        top: 80,
        right: 30,
      }}
      position="top-right"
    >
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-[rgb(22,27,37)] rounded shadow-lg"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <div className="flex items-center justify-center gap-1">
            <ToastIcon toast={t} />
            <p className="px-1">{resolveValue(t.message, t)}</p>
          </div>
        </Transition>
      )}
    </Toaster>
  );
};

export default Toast;
