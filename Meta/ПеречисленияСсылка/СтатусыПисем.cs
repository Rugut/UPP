
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СтатусыПисем
	{
		ПустаяСсылка = - 1,
		Полученное = 0,
		Отправленное = 1,
		Исходящее = 2,
		Сохраненное = 3,
	}
	public static partial class СтатусыПисем_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Полученное = new Guid("a2bc35a9-f657-bb60-43b0-c53a7ff9c8ea");
		public static readonly Guid Отправленное = new Guid("062bd8a2-8705-dc03-4991-b64d10fd8ab3");
		public static readonly Guid Исходящее = new Guid("74907088-d4bc-69dc-4d62-2345201e4f9f");
		public static readonly Guid Сохраненное = new Guid("d8cad490-4cc5-af07-407d-bc30bd244fcb");
		public static СтатусыПисем Получить(this СтатусыПисем Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтатусыПисем Получить(this СтатусыПисем Значение, Guid Ссылка)
		{
			if(Ссылка == Полученное)
			{
				return СтатусыПисем.Полученное;
			}
			else if(Ссылка == Отправленное)
			{
				return СтатусыПисем.Отправленное;
			}
			else if(Ссылка == Исходящее)
			{
				return СтатусыПисем.Исходящее;
			}
			else if(Ссылка == Сохраненное)
			{
				return СтатусыПисем.Сохраненное;
			}
			return СтатусыПисем.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтатусыПисем Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтатусыПисем Значение)
		{
			switch (Значение)
			{
				case СтатусыПисем.Полученное: return Полученное;
				case СтатусыПисем.Отправленное: return Отправленное;
				case СтатусыПисем.Исходящее: return Исходящее;
				case СтатусыПисем.Сохраненное: return Сохраненное;
			}
			return Guid.Empty;
		}
	}
}
