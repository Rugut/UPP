using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Gen
{
    internal class Ожидания : List<WaitHandle>
    {
        public void Ждать()
        {
            var waitHandle = this.ToArray(); 
            if (waitHandle.Length == 0)
            {
                return;
            }
            else if (waitHandle.Length <= 64)
            {
                WaitHandle.WaitAll(waitHandle);
                return;
            }
            var waitHandles = new WaitHandle[64];
            for (var sourceIndex = 0; sourceIndex < waitHandle.Length; sourceIndex += 64)
            {
                if (waitHandle.Length - sourceIndex < 64)
                {
                    Array.Resize(ref waitHandles, waitHandle.Length - sourceIndex);
                    Array.Copy(waitHandle, sourceIndex, waitHandles, 0, waitHandle.Length - sourceIndex);
                }
                else
                {
                    Array.Copy(waitHandle, sourceIndex, waitHandles, 0, 64);
                }
                WaitHandle.WaitAll(waitHandles);
            }
            this.Clear();
        }
    }
}
