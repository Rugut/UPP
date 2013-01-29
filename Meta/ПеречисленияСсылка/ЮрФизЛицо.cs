
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(ќбщ)
		///</summary>
	public enum ёр‘изЋицо
	{
		ѕуста€—сылка = - 1,
	///<summary>
	///(ќбщ)
	///</summary>
		ёрЋицо = 0,
	///<summary>
	///(ќбщ)
	///</summary>
		‘изЋицо = 1,
	}
	public static partial class ёр‘изЋицо_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ёрЋицо = new Guid("6d7a91b3-8ec0-f6a0-4f59-c4deeef13a4c");
		///<summary>
		///(ќбщ)
		///</summary>
		public static readonly Guid ‘изЋицо = new Guid("b8b93ea1-82fc-86a2-4720-bafad2cff47a");
		public static ёр‘изЋицо ѕолучить(this ёр‘изЋицо «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ёр‘изЋицо ѕолучить(this ёр‘изЋицо «начение, Guid —сылка)
		{
			if(—сылка == ёрЋицо)
			{
				return ёр‘изЋицо.ёрЋицо;
			}
			else if(—сылка == ‘изЋицо)
			{
				return ёр‘изЋицо.‘изЋицо;
			}
			return ёр‘изЋицо.ѕуста€—сылка;
		}
		public static byte[]  люч(this ёр‘изЋицо «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ёр‘изЋицо «начение)
		{
			switch («начение)
			{
				case ёр‘изЋицо.ёрЋицо: return ёрЋицо;
				case ёр‘изЋицо.‘изЋицо: return ‘изЋицо;
			}
			return Guid.Empty;
		}
	}
}
