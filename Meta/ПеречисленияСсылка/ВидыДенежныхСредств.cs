
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬идыƒенежных—редств
	{
		ѕуста€—сылка = - 1,
		Ќаличные = 0,
		Ѕезналичные = 1,
	}
	public static partial class ¬идыƒенежных—редств_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid Ќаличные = new Guid("74ff2eb2-0c25-6375-4852-f580c4a92552");
		public static readonly Guid Ѕезналичные = new Guid("8446c6b7-7b13-add0-40d7-4997770c5ff4");
		public static ¬идыƒенежных—редств ѕолучить(this ¬идыƒенежных—редств «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыƒенежных—редств ѕолучить(this ¬идыƒенежных—редств «начение, Guid —сылка)
		{
			if(—сылка == Ќаличные)
			{
				return ¬идыƒенежных—редств.Ќаличные;
			}
			else if(—сылка == Ѕезналичные)
			{
				return ¬идыƒенежных—редств.Ѕезналичные;
			}
			return ¬идыƒенежных—редств.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыƒенежных—редств «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыƒенежных—редств «начение)
		{
			switch («начение)
			{
				case ¬идыƒенежных—редств.Ќаличные: return Ќаличные;
				case ¬идыƒенежных—редств.Ѕезналичные: return Ѕезналичные;
			}
			return Guid.Empty;
		}
	}
}
