
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыОперацийЧекККМ
	{
		ПустаяСсылка = - 1,
		Продажа = 0,
		Возврат = 1,//чек на возврат
	}
	public static partial class ВидыОперацийЧекККМ_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Продажа = new Guid("2829bab9-3e91-87b9-4594-fd7c42f38028");
		public static readonly Guid Возврат = new Guid("7f32fea8-8daf-5031-413e-f8c4485e36d8");//чек на возврат
		public static ВидыОперацийЧекККМ Получить(this ВидыОперацийЧекККМ Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыОперацийЧекККМ Получить(this ВидыОперацийЧекККМ Значение, Guid Ссылка)
		{
			if(Ссылка == Продажа)
			{
				return ВидыОперацийЧекККМ.Продажа;
			}
			else if(Ссылка == Возврат)
			{
				return ВидыОперацийЧекККМ.Возврат;
			}
			return ВидыОперацийЧекККМ.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыОперацийЧекККМ Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыОперацийЧекККМ Значение)
		{
			switch (Значение)
			{
				case ВидыОперацийЧекККМ.Продажа: return Продажа;
				case ВидыОперацийЧекККМ.Возврат: return Возврат;
			}
			return Guid.Empty;
		}
	}
}
