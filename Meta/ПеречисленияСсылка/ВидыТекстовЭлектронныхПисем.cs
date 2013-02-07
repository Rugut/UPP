
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ВидыТекстовЭлектронныхПисем
	{
		ПустаяСсылка = - 1,
		HTML = 0,
		Текст = 1,//Простой текст
		Прочее = 2,
		HTMLСКартинками = 3,//HTML с картинками
	}
	public static partial class ВидыТекстовЭлектронныхПисем_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid HTML = new Guid("908e1c80-5002-09d3-4530-c2a1286e20e8");
		public static readonly Guid Текст = new Guid("257a76a1-e6f5-4561-46d6-af808186d7b5");//Простой текст
		public static readonly Guid Прочее = new Guid("e3d508bd-386a-0f58-48db-628a9f02ff83");
		public static readonly Guid HTMLСКартинками = new Guid("bfedb6aa-8341-cdf3-4e1f-11b95b11992f");//HTML с картинками
		public static ВидыТекстовЭлектронныхПисем Получить(this ВидыТекстовЭлектронныхПисем Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыТекстовЭлектронныхПисем Получить(this ВидыТекстовЭлектронныхПисем Значение, Guid Ссылка)
		{
			if(Ссылка == HTML)
			{
				return ВидыТекстовЭлектронныхПисем.HTML;
			}
			else if(Ссылка == Текст)
			{
				return ВидыТекстовЭлектронныхПисем.Текст;
			}
			else if(Ссылка == Прочее)
			{
				return ВидыТекстовЭлектронныхПисем.Прочее;
			}
			else if(Ссылка == HTMLСКартинками)
			{
				return ВидыТекстовЭлектронныхПисем.HTMLСКартинками;
			}
			return ВидыТекстовЭлектронныхПисем.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыТекстовЭлектронныхПисем Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыТекстовЭлектронныхПисем Значение)
		{
			switch (Значение)
			{
				case ВидыТекстовЭлектронныхПисем.HTML: return HTML;
				case ВидыТекстовЭлектронныхПисем.Текст: return Текст;
				case ВидыТекстовЭлектронныхПисем.Прочее: return Прочее;
				case ВидыТекстовЭлектронныхПисем.HTMLСКартинками: return HTMLСКартинками;
			}
			return Guid.Empty;
		}
	}
}