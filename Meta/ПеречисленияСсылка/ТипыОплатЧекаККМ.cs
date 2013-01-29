
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum “ипыќплат„ека  ћ
	{
		ѕуста€—сылка = - 1,
		Ќаличные = 0,
		ѕлатежна€ арта = 1,//ѕлатежна€ карта
		Ѕанковский редит = 2,//Ѕанковский кредит
	}
	public static partial class “ипыќплат„ека  ћ_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid Ќаличные = new Guid("4628cca2-d1e8-75e1-4d80-3e0ea62a6716");
		public static readonly Guid ѕлатежна€ арта = new Guid("fa8a3183-3d9f-5fd8-4453-4585283b757a");//ѕлатежна€ карта
		public static readonly Guid Ѕанковский редит = new Guid("2e0fdc93-c2b1-08ab-404c-d4df778a9cf9");//Ѕанковский кредит
		public static “ипыќплат„ека  ћ ѕолучить(this “ипыќплат„ека  ћ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипыќплат„ека  ћ ѕолучить(this “ипыќплат„ека  ћ «начение, Guid —сылка)
		{
			if(—сылка == Ќаличные)
			{
				return “ипыќплат„ека  ћ.Ќаличные;
			}
			else if(—сылка == ѕлатежна€ арта)
			{
				return “ипыќплат„ека  ћ.ѕлатежна€ арта;
			}
			else if(—сылка == Ѕанковский редит)
			{
				return “ипыќплат„ека  ћ.Ѕанковский редит;
			}
			return “ипыќплат„ека  ћ.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипыќплат„ека  ћ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипыќплат„ека  ћ «начение)
		{
			switch («начение)
			{
				case “ипыќплат„ека  ћ.Ќаличные: return Ќаличные;
				case “ипыќплат„ека  ћ.ѕлатежна€ арта: return ѕлатежна€ арта;
				case “ипыќплат„ека  ћ.Ѕанковский редит: return Ѕанковский редит;
			}
			return Guid.Empty;
		}
	}
}
