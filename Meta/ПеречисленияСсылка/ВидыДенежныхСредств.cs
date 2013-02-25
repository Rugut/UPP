
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
	public enum ВидыДенежныхСредств
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"c4a92552-f580-4852-b22e-ff74250c7563\", \"Представление\":\"Наличные\"}")]
		Наличные = 0,
		[EnumMember(Value = "{\"Ссылка\":\"770c5ff4-4997-40d7-b7c6-4684137bd0ad\", \"Представление\":\"Безналичные\"}")]
		Безналичные = 1,
	}
	public static partial class ВидыДенежныхСредств_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Наличные = new Guid("74ff2eb2-0c25-6375-4852-f580c4a92552");
		public static readonly Guid Безналичные = new Guid("8446c6b7-7b13-add0-40d7-4997770c5ff4");
		public static ВидыДенежныхСредств Получить(this ВидыДенежныхСредств Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыДенежныхСредств Получить(this ВидыДенежныхСредств Значение, Guid Ссылка)
		{
			if(Ссылка == Наличные)
			{
				return ВидыДенежныхСредств.Наличные;
			}
			else if(Ссылка == Безналичные)
			{
				return ВидыДенежныхСредств.Безналичные;
			}
			return ВидыДенежныхСредств.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыДенежныхСредств Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыДенежныхСредств Значение)
		{
			switch (Значение)
			{
				case ВидыДенежныхСредств.Наличные: return Наличные;
				case ВидыДенежныхСредств.Безналичные: return Безналичные;
			}
			return Guid.Empty;
		}
	}
}