
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum ВидыИнформационныхКарт
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"70176b0f-1e67-4fb7-b1a7-c6e2fa474a90\", \"Представление\":\"Магнитная\"}")]
		Магнитная = 0,
		[EnumMember(Value = "{\"Ссылка\":\"111e19ef-0500-4a19-85fd-9c87c395c624\", \"Представление\":\"Штриховая\"}")]
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