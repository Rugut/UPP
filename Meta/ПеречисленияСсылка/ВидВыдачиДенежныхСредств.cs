
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum ¬ид¬ыдачиƒенежных—редств
	{
		ѕуста€—сылка = - 1,
		 ассе  ћ = 0,//кассе   ћ
		Ќ““ = 1,
	}
	public static partial class ¬ид¬ыдачиƒенежных—редств_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid  ассе  ћ = new Guid("abfffe8a-80d3-92a1-4834-e8de1c4cb498");//кассе   ћ
		public static readonly Guid Ќ““ = new Guid("b57d6b97-19c1-bf77-40ed-e73c2c756df8");
		public static ¬ид¬ыдачиƒенежных—редств ѕолучить(this ¬ид¬ыдачиƒенежных—редств «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬ид¬ыдачиƒенежных—редств ѕолучить(this ¬ид¬ыдачиƒенежных—редств «начение, Guid —сылка)
		{
			if(—сылка ==  ассе  ћ)
			{
				return ¬ид¬ыдачиƒенежных—редств. ассе  ћ;
			}
			else if(—сылка == Ќ““)
			{
				return ¬ид¬ыдачиƒенежных—редств.Ќ““;
			}
			return ¬ид¬ыдачиƒенежных—редств.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬ид¬ыдачиƒенежных—редств «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬ид¬ыдачиƒенежных—редств «начение)
		{
			switch («начение)
			{
				case ¬ид¬ыдачиƒенежных—редств. ассе  ћ: return  ассе  ћ;
				case ¬ид¬ыдачиƒенежных—редств.Ќ““: return Ќ““;
			}
			return Guid.Empty;
		}
	}
}
