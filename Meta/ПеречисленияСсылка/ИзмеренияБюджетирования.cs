
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ИзмеренияБюджетирования
	{
		ПустаяСсылка = - 1,
		Сценарий = 0,
		ЦФО = 1,
		Проект = 2,
		Валюта = 3,
		Контрагент = 4,
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
