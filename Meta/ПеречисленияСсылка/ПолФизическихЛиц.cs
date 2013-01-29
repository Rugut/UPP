
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ѕол‘изическихЋиц
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///(ќбщ)
	///</summary>
		ћужской = 0,
	///<summary>
	///(ќбщ)
	///</summary>
		∆енский = 1,
	}
	public static partial class ѕол‘изическихЋиц_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ћужской = new Guid("1f4b7fa6-2afa-25ce-4077-8e147f241253");
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ∆енский = new Guid("f8114d92-bd68-e095-4c8f-aeea40a3ad5b");
		public static ѕол‘изическихЋиц ѕолучить(this ѕол‘изическихЋиц «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ѕол‘изическихЋиц ѕолучить(this ѕол‘изическихЋиц «начение, Guid —сылка)
		{
			if(—сылка == ћужской)
			{
				return ѕол‘изическихЋиц.ћужской;
			}
			else if(—сылка == ∆енский)
			{
				return ѕол‘изическихЋиц.∆енский;
			}
			return ѕол‘изическихЋиц.ѕуста€—сылка;
		}
		public static byte[]  люч(this ѕол‘изическихЋиц «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ѕол‘изическихЋиц «начение)
		{
			switch («начение)
			{
				case ѕол‘изическихЋиц.ћужской: return ћужской;
				case ѕол‘изическихЋиц.∆енский: return ∆енский;
			}
			return Guid.Empty;
		}
	}
}
