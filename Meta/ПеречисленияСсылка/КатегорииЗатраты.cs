
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum КатегорииЗатраты
	{
		ПустаяСсылка = - 1,
		Зарплата = 0,
		ЕСН = 1,//Страховые взносы (ранее ЕСН)
		НДФЛ = 2,
	}
	public static partial class КатегорииЗатраты_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Зарплата = new Guid("b0a37fbb-20ad-75a4-4930-3d2f1fd9acca");
		public static readonly Guid ЕСН = new Guid("4b6249a8-5993-57a0-4fce-980cd5f1b12d");//Страховые взносы (ранее ЕСН)
		public static readonly Guid НДФЛ = new Guid("df6c8581-55f5-6914-43e1-e133a3e08a86");
		public static КатегорииЗатраты Получить(this КатегорииЗатраты Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static КатегорииЗатраты Получить(this КатегорииЗатраты Значение, Guid Ссылка)
		{
			if(Ссылка == Зарплата)
			{
				return КатегорииЗатраты.Зарплата;
			}
			else if(Ссылка == ЕСН)
			{
				return КатегорииЗатраты.ЕСН;
			}
			else if(Ссылка == НДФЛ)
			{
				return КатегорииЗатраты.НДФЛ;
			}
			return КатегорииЗатраты.ПустаяСсылка;
		}
		public static byte[] Ключ(this КатегорииЗатраты Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this КатегорииЗатраты Значение)
		{
			switch (Значение)
			{
				case КатегорииЗатраты.Зарплата: return Зарплата;
				case КатегорииЗатраты.ЕСН: return ЕСН;
				case КатегорииЗатраты.НДФЛ: return НДФЛ;
			}
			return Guid.Empty;
		}
	}
}
