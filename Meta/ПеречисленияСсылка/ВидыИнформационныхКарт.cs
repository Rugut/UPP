
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыИнформационныхКарт
	{
		ПустаяСсылка = - 1,
		Магнитная = 0,
		Штриховая = 1,
	}
	public static partial class ВидыИнформационныхКарт_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Магнитная = new Guid("e2c6a7b1-47fa-904a-4fb7-1e6770176b0f");
		public static readonly Guid Штриховая = new Guid("879cfd85-95c3-24c6-4a19-0500111e19ef");
		public static ВидыИнформационныхКарт Получить(this ВидыИнформационныхКарт Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыИнформационныхКарт Получить(this ВидыИнформационныхКарт Значение, Guid Ссылка)
		{
			if(Ссылка == Магнитная)
			{
				return ВидыИнформационныхКарт.Магнитная;
			}
			else if(Ссылка == Штриховая)
			{
				return ВидыИнформационныхКарт.Штриховая;
			}
			return ВидыИнформационныхКарт.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыИнформационныхКарт Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыИнформационныхКарт Значение)
		{
			switch (Значение)
			{
				case ВидыИнформационныхКарт.Магнитная: return Магнитная;
				case ВидыИнформационныхКарт.Штриховая: return Штриховая;
			}
			return Guid.Empty;
		}
	}
}