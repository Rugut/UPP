
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
	public enum ИзмеренияБюджетирования
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"60644654-7e3a-4216-b632-deaff33c9cd1\", \"Представление\":\"Сценарий\"}")]
		Сценарий = 0,
		[EnumMember(Value = "{\"Ссылка\":\"8df52e02-36ba-4bdf-aaa1-4352736a65cc\", \"Представление\":\"ЦФО\"}")]
		ЦФО = 1,
		[EnumMember(Value = "{\"Ссылка\":\"1ece4bad-e268-4297-956b-d1db092d8d33\", \"Представление\":\"Проект\"}")]
		Проект = 2,
		[EnumMember(Value = "{\"Ссылка\":\"3dffe1da-423a-4f57-8279-d2bc1fe49198\", \"Представление\":\"Валюта\"}")]
		Валюта = 3,
		[EnumMember(Value = "{\"Ссылка\":\"905482c6-b1a5-47d7-b36e-a4d48a63c1ed\", \"Представление\":\"Контрагент\"}")]
		Контрагент = 4,
		[EnumMember(Value = "{\"Ссылка\":\"d8d57a44-bcbe-47c7-8b53-da9425bf2da6\", \"Представление\":\"Номенклатура\"}")]
		Номенклатура = 5,
	}
	public static partial class ИзмеренияБюджетирования_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Сценарий = new Guid("afde32b6-3cf3-d19c-4216-7e3a60644654");
		public static readonly Guid ЦФО = new Guid("5243a1aa-6a73-cc65-4bdf-36ba8df52e02");
		public static readonly Guid Проект = new Guid("dbd16b95-2d09-338d-4297-e2681ece4bad");
		public static readonly Guid Валюта = new Guid("bcd27982-e41f-9891-4f57-423a3dffe1da");
		public static readonly Guid Контрагент = new Guid("d4a46eb3-638a-edc1-47d7-b1a5905482c6");
		public static readonly Guid Номенклатура = new Guid("94da538b-bf25-a62d-47c7-bcbed8d57a44");
		public static ИзмеренияБюджетирования Получить(this ИзмеренияБюджетирования Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ИзмеренияБюджетирования Получить(this ИзмеренияБюджетирования Значение, Guid Ссылка)
		{
			if(Ссылка == Сценарий)
			{
				return ИзмеренияБюджетирования.Сценарий;
			}
			else if(Ссылка == ЦФО)
			{
				return ИзмеренияБюджетирования.ЦФО;
			}
			else if(Ссылка == Проект)
			{
				return ИзмеренияБюджетирования.Проект;
			}
			else if(Ссылка == Валюта)
			{
				return ИзмеренияБюджетирования.Валюта;
			}
			else if(Ссылка == Контрагент)
			{
				return ИзмеренияБюджетирования.Контрагент;
			}
			else if(Ссылка == Номенклатура)
			{
				return ИзмеренияБюджетирования.Номенклатура;
			}
			return ИзмеренияБюджетирования.ПустаяСсылка;
		}
		public static byte[] Ключ(this ИзмеренияБюджетирования Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ИзмеренияБюджетирования Значение)
		{
			switch (Значение)
			{
				case ИзмеренияБюджетирования.Сценарий: return Сценарий;
				case ИзмеренияБюджетирования.ЦФО: return ЦФО;
				case ИзмеренияБюджетирования.Проект: return Проект;
				case ИзмеренияБюджетирования.Валюта: return Валюта;
				case ИзмеренияБюджетирования.Контрагент: return Контрагент;
				case ИзмеренияБюджетирования.Номенклатура: return Номенклатура;
			}
			return Guid.Empty;
		}
	}
}