import React from 'react'
import { CopyBlock, atomOneLight } from 'react-code-blocks';

const Wrapper = ({ id, name, children, code, language, showLineNumbers = true, wrapLines = true, copyBlockClassName }) => {
  return (
    <>
      <div className="grid grid-cols-6" id={id}>
        <div className="col-span-6 lg:col-span-3 p-10 border-r-slate-200 border-r-[2px]">
          <div className="text-[21px] font-bold mb-4 text-primary">{name}</div>
          {children}
        </div>
        <div className="col-span-6 lg:col-span-3 p-10">
          <div>
            <div className="text-[21px] font-bold mb-4 text-primary ">Code</div>
            <div className={`max-h-[50vh] ${copyBlockClassName} overflow-y-scroll border-[2px] rounded-lg`}>
              <CopyBlock
                theme={atomOneLight}
                text={code}
                language={language || "jsx"}
                showLineNumbers={showLineNumbers}
                wrapLines={wrapLines}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-gray-200"></div>
    </>
  )
}
export default Wrapper