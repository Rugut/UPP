
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
		///<summary>
		///(”пр)
		///</summary>
	public enum ¬идыќпераций„ек  ћ
	{
		ѕуста€—сылка = - 1,
		ѕродажа = 0,
		¬озврат = 1,//чек на возврат
	}
	public static partial class ¬идыќпераций„ек  ћ_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid ѕродажа = new Guid("2829bab9-3e91-87b9-4594-fd7c42f38028");
		public static readonly Guid ¬озврат = new Guid("7f32fea8-8daf-5031-413e-f8c4485e36d8");//чек на возврат
		public static ¬идыќпераций„ек  ћ ѕолучить(this ¬идыќпераций„ек  ћ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ¬идыќпераций„ек  ћ ѕолучить(this ¬идыќпераций„ек  ћ «начение, Guid —сылка)
		{
			if(—сылка == ѕродажа)
			{
				return ¬идыќпераций„ек  ћ.ѕродажа;
			}
			else if(—сылка == ¬озврат)
			{
				return ¬идыќпераций„ек  ћ.¬озврат;
			}
			return ¬идыќпераций„ек  ћ.ѕуста€—сылка;
		}
		public static byte[]  люч(this ¬идыќпераций„ек  ћ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ¬идыќпераций„ек  ћ «начение)
		{
			switch («начение)
			{
				case ¬идыќпераций„ек  ћ.ѕродажа: return ѕродажа;
				case ¬идыќпераций„ек  ћ.¬озврат: return ¬озврат;
			}
			return Guid.Empty;
		}
	}
}
