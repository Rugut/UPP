
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum СтатусыСоглашенийЭД
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"392e3a4f-fdfc-41c5-96e0-65bfbfdc8af5\", \"Представление\":\"Действует\"}")]
		Действует = 0,
		[EnumMember(Value = "{\"Ссылка\":\"9f210ed8-a279-4896-824e-6f5f01c0e6cf\", \"Представление\":\"Закрыто\"}")]
		Закрыто = 1,
		[EnumMember(Value = "{\"Ссылка\":\"7309d3f3-312d-4e5b-a6b7-0d5d2476ec3b\", \"Представление\":\"НеСогласовано\"}")]
		НеСогласовано = 2,//Не согласовано
	}
	public static partial class СтатусыСоглашенийЭД_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Действует = new Guid("bf65e096-dcbf-f58a-41c5-fdfc392e3a4f");
		public static readonly Guid Закрыто = new Guid("5f6f4e82-c001-cfe6-4896-a2799f210ed8");
		public static readonly Guid НеСогласовано = new Guid("5d0db7a6-7624-3bec-4e5b-312d7309d3f3");//Не согласовано
		public static СтатусыСоглашенийЭД Получить(this СтатусыСоглашенийЭД Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтатусыСоглашенийЭД Получить(this СтатусыСоглашенийЭД Значение, Guid Ссылка)
		{
			if(Ссылка == Действует)
			{
				return СтатусыСоглашенийЭД.Действует;
			}
			else if(Ссылка == Закрыто)
			{
				return СтатусыСоглашенийЭД.Закрыто;
			}
			else if(Ссылка == НеСогласовано)
			{
				return СтатусыСоглашенийЭД.НеСогласовано;
			}
			return СтатусыСоглашенийЭД.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтатусыСоглашенийЭД Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтатусыСоглашенийЭД Значение)
		{
			switch (Значение)
			{
				case СтатусыСоглашенийЭД.Действует: return Действует;
				case СтатусыСоглашенийЭД.Закрыто: return Закрыто;
				case СтатусыСоглашенийЭД.НеСогласовано: return НеСогласовано;
			}
			return Guid.Empty;
		}
	}
}