
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ВидыКомплектации
	{
		ПустаяСсылка = - 1,
		Сборка = 0,
		Разборка = 1,
	}
	public static partial class ВидыКомплектации_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Сборка = new Guid("44cb1f9a-92b1-4d91-4d41-49378956a992");
		public static readonly Guid Разборка = new Guid("8f7be684-3a93-37cb-497b-bbbe5b53842d");
		public static ВидыКомплектации Получить(this ВидыКомплектации Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыКомплектации Получить(this ВидыКомплектации Значение, Guid Ссылка)
		{
			if(Ссылка == Сборка)
			{
				return ВидыКомплектации.Сборка;
			}
			else if(Ссылка == Разборка)
			{
				return ВидыКомплектации.Разборка;
			}
			return ВидыКомплектации.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыКомплектации Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыКомплектации Значение)
		{
			switch (Значение)
			{
				case ВидыКомплектации.Сборка: return Сборка;
				case ВидыКомплектации.Разборка: return Разборка;
			}
			return Guid.Empty;
		}
	}
}