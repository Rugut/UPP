
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum СтатусыОтправки
	{
		ПустаяСсылка = - 1,
		ВКонверте = 0,//В конверте
		Отправлен = 1,
		Доставлен = 2,
		НеПринят = 3,//Не принят
		Сдан = 4,
	}
	public static partial class СтатусыОтправки_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid ВКонверте = new Guid("0c96eeb0-db97-8a50-442b-68b718207208");//В конверте
		public static readonly Guid Отправлен = new Guid("53148fac-5c88-3d51-4c69-8185f10e893a");
		public static readonly Guid Доставлен = new Guid("8df59491-2186-616d-4b98-3b1d75247242");
		public static readonly Guid НеПринят = new Guid("8e679097-26f4-d57d-4ee6-1ea052173c3b");//Не принят
		public static readonly Guid Сдан = new Guid("66dafc9d-055c-7d9f-4cb0-181fe2d76814");
		public static СтатусыОтправки Получить(this СтатусыОтправки Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтатусыОтправки Получить(this СтатусыОтправки Значение, Guid Ссылка)
		{
			if(Ссылка == ВКонверте)
			{
				return СтатусыОтправки.ВКонверте;
			}
			else if(Ссылка == Отправлен)
			{
				return СтатусыОтправки.Отправлен;
			}
			else if(Ссылка == Доставлен)
			{
				return СтатусыОтправки.Доставлен;
			}
			else if(Ссылка == НеПринят)
			{
				return СтатусыОтправки.НеПринят;
			}
			else if(Ссылка == Сдан)
			{
				return СтатусыОтправки.Сдан;
			}
			return СтатусыОтправки.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтатусыОтправки Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтатусыОтправки Значение)
		{
			switch (Значение)
			{
				case СтатусыОтправки.ВКонверте: return ВКонверте;
				case СтатусыОтправки.Отправлен: return Отправлен;
				case СтатусыОтправки.Доставлен: return Доставлен;
				case СтатусыОтправки.НеПринят: return НеПринят;
				case СтатусыОтправки.Сдан: return Сдан;
			}
			return Guid.Empty;
		}
	}
}