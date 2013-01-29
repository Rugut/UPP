
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ќќшибкиЁ¬
	{
		ѕуста€—сылка = - 1,
	}
	public static partial class “ќќшибкиЁ¬_«начени€//:ѕеречисление—сылка
	{
		public static “ќќшибкиЁ¬ ѕолучить(this “ќќшибкиЁ¬ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ќќшибкиЁ¬ ѕолучить(this “ќќшибкиЁ¬ «начение, Guid —сылка)
		{
			return “ќќшибкиЁ¬.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ќќшибкиЁ¬ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ќќшибкиЁ¬ «начение)
		{
			switch («начение)
			{
			}
			return Guid.Empty;
		}
	}
}
